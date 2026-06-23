"""Blaze lockup export — flood-remove outer black only; keep full metallic fill."""
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

BRAND = Path("public/brand")
SRC = BRAND / "blaze-lockup-original.png"
OUT = BRAND / "blaze-lockup.png"
OUT_2X = BRAND / "blaze-lockup@2x.png"


def luminance(rgb: np.ndarray) -> np.ndarray:
    return 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]


def flatten_on_black(rgba: Image.Image) -> np.ndarray:
    bg = Image.new("RGBA", rgba.size, (0, 0, 0, 255))
    return np.array(Image.alpha_composite(bg, rgba).convert("RGB"), dtype=np.uint8)


def flood_alpha(rgb: np.ndarray, thresh: float = 24.0) -> np.ndarray:
    h, w = rgb.shape[:2]
    lum = luminance(rgb.astype(np.float32))
    alpha = np.full((h, w), 255, dtype=np.uint8)
    visited = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            if lum[y, x] <= thresh:
                q.append((y, x))
    for y in range(h):
        for x in (0, w - 1):
            if lum[y, x] <= thresh:
                q.append((y, x))

    while q:
        y, x = q.popleft()
        if y < 0 or y >= h or x < 0 or x >= w or visited[y, x]:
            continue
        if lum[y, x] > thresh:
            continue
        visited[y, x] = True
        alpha[y, x] = 0
        q.extend(((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)))

    # Drop only near-transparent removebg fringe, not letter shading
    alpha = np.where(alpha < 12, 0, alpha)
    return alpha


def autocrop(rgba: Image.Image, pad: int = 8) -> Image.Image:
    a = np.asarray(rgba)[..., 3]
    ys, xs = np.where(a > 16)
    if len(xs) == 0:
        return rgba
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    return rgba.crop((
        max(0, x0 - pad),
        max(0, y0 - pad),
        min(rgba.width, x1 + pad + 1),
        min(rgba.height, y1 + pad + 1),
    ))


def sharpen_rgba(img: Image.Image) -> Image.Image:
    r, g, b, a = img.split()
    rgb = Image.merge("RGB", (r, g, b)).filter(
        ImageFilter.UnsharpMask(radius=0.7, percent=120, threshold=2)
    )
    r, g, b = rgb.split()
    return Image.merge("RGBA", (r, g, b, a))


def build() -> Image.Image:
    src = Image.open(SRC).convert("RGBA")
    rgb = flatten_on_black(src)
    alpha = flood_alpha(rgb)
    rgba = Image.fromarray(np.dstack([rgb, alpha]).astype(np.uint8), "RGBA")
    return sharpen_rgba(autocrop(rgba, pad=10))


def export(width: int, path: Path, base: Image.Image) -> None:
    h = max(1, int(round(base.height * width / base.width)))
    out = base.resize((width, h), Image.LANCZOS) if width != base.width else base
    out.save(path, optimize=True)
    print("saved", path, out.size)


def main() -> None:
    base = build()
    export(500, OUT, base)
    export(1000, OUT_2X, base)


if __name__ == "__main__":
    main()
