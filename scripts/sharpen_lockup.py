"""Sharpen Blaze lockup from original removebg asset at display-ready resolution."""
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

BRAND = Path("public/brand")
SRC = BRAND / "blaze-lockup-original.png"
OUT = BRAND / "blaze-lockup.png"
OUT_2X = BRAND / "blaze-lockup@2x.png"
TARGET_W = 480
TARGET_W_2X = 640


def autocrop(rgba: Image.Image, pad: int = 6) -> Image.Image:
    a = np.asarray(rgba)[..., 3]
    ys, xs = np.where(a > 12)
    if len(xs) == 0:
        return rgba
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(rgba.width - 1, x1 + pad)
    y1 = min(rgba.height - 1, y1 + pad)
    return rgba.crop((x0, y0, x1 + 1, y1 + 1))


def harden_alpha(rgba: Image.Image, cutoff: int = 24) -> Image.Image:
    arr = np.array(rgba)
    a = arr[..., 3].astype(np.float32)
    a = np.clip((a - cutoff) / (255 - cutoff), 0, 1) * 255
    arr[..., 3] = a.astype(np.uint8)
    return Image.fromarray(arr, "RGBA")


def sharpen_rgba(img: Image.Image) -> Image.Image:
    r, g, b, a = img.split()
    rgb = Image.merge("RGB", (r, g, b))
    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=1.0, percent=140, threshold=2))
    r, g, b = rgb.split()
    return Image.merge("RGBA", (r, g, b, a))


def resize_to_width(img: Image.Image, width: int) -> Image.Image:
    if img.width >= width:
        return img
    scale = width / img.width
    height = max(1, int(round(img.height * scale)))
    return img.resize((width, height), Image.LANCZOS)


def export(width: int, path: Path) -> None:
    src = Image.open(SRC).convert("RGBA")
    cropped = autocrop(src)
    cropped = harden_alpha(cropped)
    sized = resize_to_width(cropped, width)
    sharp = sharpen_rgba(sized)
    sharp.save(path, optimize=True)
    print("saved", path, sharp.size)


def main() -> None:
    export(TARGET_W, OUT)
    export(TARGET_W_2X, OUT_2X)


if __name__ == "__main__":
    main()
