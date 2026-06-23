"""Crisp Blaze lockup — silver-key from hi-res source, strip B-edge smear, sharp export."""
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

BRAND = Path("public/brand")
HIRES = Path(
    r"C:\Users\sebas\.cursor\projects\c-Users-sebas-OneDrive-Desktop-VC-CORE-HQ\assets"
    r"\c__Users_sebas_AppData_Roaming_Cursor_User_workspaceStorage_465acc0bd8295a93e6af6eff448cf3e7_images_Full_Blaze_Dental_New_Logo_-74ac78c7-03ae-4c34-a7fe-30dd1afee779.png"
)
SRC = BRAND / "blaze-lockup-source.png"
OUT = BRAND / "blaze-lockup.png"
OUT_2X = BRAND / "blaze-lockup@2x.png"


def luminance(rgb: np.ndarray) -> np.ndarray:
    return 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]


def silver_mask(rgb: np.ndarray, lo: float = 92.0, hi: float = 220.0) -> np.ndarray:
    lum = luminance(rgb.astype(np.float32))
    return (np.clip((lum - lo) / (hi - lo), 0.0, 1.0) * 255.0).astype(np.uint8)


def trim_left_smear(
    rgb: np.ndarray,
    alpha: np.ndarray,
    text_start_ratio: float = 0.48,
    solid_lum: float = 168.0,
    solid_alpha: int = 96,
) -> np.ndarray:
    """Remove dark removebg smear left of the real metal edge (faded B)."""
    h, w = rgb.shape[:2]
    lum = luminance(rgb.astype(np.float32))
    out = alpha.copy()
    y_text = int(h * text_start_ratio)

    for y in range(y_text, h):
        cut = w
        for x in range(w):
            if out[y, x] >= solid_alpha and lum[y, x] >= solid_lum:
                cut = x
                break
        if cut < w:
            out[y, :cut] = 0

    for y in range(0, y_text):
        for x in range(w):
            if out[y, x] > 0 and lum[y, x] < 128:
                out[y, x] = 0

    return out


def prune_low_alpha_halos(alpha: np.ndarray, floor: int = 36) -> np.ndarray:
    out = alpha.copy()
    out[out < floor] = 0
    return out


def autocrop(rgba: Image.Image, pad: int = 6) -> Image.Image:
    a = np.asarray(rgba)[..., 3]
    ys, xs = np.where(a > 20)
    if len(xs) == 0:
        return rgba
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(rgba.width - 1, x1 + pad)
    y1 = min(rgba.height - 1, y1 + pad)
    return rgba.crop((x0, y0, x1 + 1, y1 + 1))


def sharpen_rgba(img: Image.Image, radius: float = 0.55, percent: int = 115) -> Image.Image:
    r, g, b, a = img.split()
    rgb = Image.merge("RGB", (r, g, b))
    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=radius, percent=percent, threshold=2))
    r, g, b = rgb.split()
    return Image.merge("RGBA", (r, g, b, a))


def resolve_source() -> Path:
    if SRC.exists():
        return SRC
    if HIRES.exists():
        return HIRES
    return BRAND / "blaze-lockup-original.png"


def build_base() -> Image.Image:
    source = resolve_source()
    rgb = np.array(Image.open(source).convert("RGB"), dtype=np.uint8)
    alpha = silver_mask(rgb.astype(np.float32), lo=92, hi=220)
    rgba = Image.fromarray(np.dstack([rgb, alpha]), "RGBA")
    smoothed = rgba.split()[3].filter(ImageFilter.MedianFilter(size=3))
    rgba.putalpha(smoothed)
    alpha = np.array(rgba)[..., 3]
    alpha = trim_left_smear(rgb, alpha)
    alpha = prune_low_alpha_halos(alpha)
    rgba = Image.fromarray(np.dstack([rgb, alpha]).astype(np.uint8), "RGBA")
    rgba = autocrop(rgba, pad=6)
    return sharpen_rgba(rgba)


def export(width: int, path: Path, base: Image.Image) -> None:
    h = max(1, int(round(base.height * width / base.width)))
    out = base.resize((width, h), Image.LANCZOS) if width != base.width else base
    out = sharpen_rgba(out, radius=0.45, percent=105)
    out.save(path, optimize=True)
    print("saved", path, out.size)


def main() -> None:
    if HIRES.exists() and not SRC.exists():
        Image.open(HIRES).save(SRC)
        print("cached source", SRC)
    base = build_base()
    export(base.width, OUT, base)
    export(base.width * 2, OUT_2X, base)


if __name__ == "__main__":
    main()
