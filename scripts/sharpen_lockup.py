"""Export crisp Blaze lockup PNGs — metallic strokes, no gray halo box."""
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

BRAND = Path("public/brand")
SRC = BRAND / "blaze-lockup-original.png"
OUT = BRAND / "blaze-lockup.png"
OUT_2X = BRAND / "blaze-lockup@2x.png"


def luminance(rgb: np.ndarray) -> np.ndarray:
    return 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]


def autocrop(rgba: Image.Image, pad: int = 8) -> Image.Image:
    a = np.asarray(rgba)[..., 3]
    ys, xs = np.where(a > 24)
    if len(xs) == 0:
        return rgba
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(rgba.width - 1, x1 + pad)
    y1 = min(rgba.height - 1, y1 + pad)
    return rgba.crop((x0, y0, x1 + 1, y1 + 1))


def clean_alpha(arr: np.ndarray) -> np.ndarray:
    rgb = arr[..., :3]
    lum = luminance(rgb)
    src_a = arr[..., 3]

    # Keep metallic strokes; drop dark gray removebg fringe
    keep = (lum >= 44) & (src_a >= 18)
    alpha = np.where(keep, np.clip(np.maximum(src_a, lum * 0.92), 0, 255), 0)

    # Hard-cut wispy semi-transparent box pixels
    alpha = np.where(alpha < 36, 0, alpha)
    alpha = np.where(alpha > 220, 255, alpha)
    return alpha.astype(np.uint8)


def defringe_rgb(arr: np.ndarray, alpha: np.ndarray) -> np.ndarray:
    out = arr[..., :3].astype(np.float32).copy()
    a = alpha.astype(np.float32) / 255.0
    mask = a > 0.14
    for c in range(3):
        ch = out[..., c]
        ch = np.where(mask, np.clip(ch / np.maximum(a, 1e-3), 0, 255), 0)
        out[..., c] = ch
    return out.astype(np.uint8)


def sharpen_rgba(img: Image.Image) -> Image.Image:
    r, g, b, a = img.split()
    rgb = Image.merge("RGB", (r, g, b))
    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=0.85, percent=130, threshold=2))
    r, g, b = rgb.split()
    return Image.merge("RGBA", (r, g, b, a))


def build_lockup() -> Image.Image:
    arr = np.array(Image.open(SRC).convert("RGBA")).astype(np.float32)
    alpha = clean_alpha(arr)
    rgb = defringe_rgb(arr, alpha)
    rgba = Image.fromarray(np.dstack([rgb, alpha]).astype(np.uint8), "RGBA")
    rgba = autocrop(rgba, pad=10)
    a = rgba.split()[3].filter(ImageFilter.MedianFilter(size=3))
    rgba.putalpha(a)
    return sharpen_rgba(rgba)


def export(width: int, path: Path, base: Image.Image) -> None:
    if base.width != width:
        height = max(1, int(round(base.height * width / base.width)))
        out = base.resize((width, height), Image.LANCZOS)
    else:
        out = base.copy()
    out = sharpen_rgba(out)
    out.save(path, optimize=True)
    print("saved", path, out.size)


def main() -> None:
    base = build_lockup()
    export(480, OUT, base)
    export(640, OUT_2X, base)


if __name__ == "__main__":
    main()
