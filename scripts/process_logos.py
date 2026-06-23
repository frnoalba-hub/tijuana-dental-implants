"""Process Blaze logos: silver strokes only, no dark disc / black background.

Outputs (in public/brand/):
  - blaze-lockup.png : full logo, transparent bg
  - blaze-icon.png   : tooth/implant mark only, transparent bg
  - blaze-button-*.png : favicon sizes (icon only, no dark circle)
"""
import numpy as np
from PIL import Image, ImageFilter

BRAND = "public/brand"


def silver_mask(rgb: np.ndarray, lo: float = 95.0, hi: float = 215.0) -> np.ndarray:
    """Keep metallic stroke pixels; drop dark disc and black background."""
    lum = 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]
    alpha = np.clip((lum - lo) / (hi - lo), 0.0, 1.0) * 255.0
    return alpha.astype(np.uint8)


def to_transparent(img: Image.Image, lo: float = 95.0, hi: float = 215.0) -> Image.Image:
    rgb = np.asarray(img.convert("RGB"), dtype=np.float32)
    alpha = silver_mask(rgb, lo, hi)
    rgba = Image.fromarray(np.dstack([rgb, alpha]).astype(np.uint8), "RGBA")
    a = rgba.split()[3].filter(ImageFilter.MedianFilter(size=3))
    rgba.putalpha(a)
    return rgba


def autocrop(img: Image.Image, pad: int = 10) -> Image.Image:
    a = np.asarray(img)[..., 3]
    ys, xs = np.where(a > 12)
    if len(xs) == 0:
        return img
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(img.width, x1 + pad)
    y1 = min(img.height, y1 + pad)
    return img.crop((x0, y0, x1 + 1, y1 + 1))


def icon_from_button(button_path: str) -> Image.Image:
    """Extract only the silver tooth mark from the circular button asset."""
    btn = Image.open(button_path).convert("RGB")
    w, h = btn.size
    rgba = to_transparent(btn, lo=88, hi=220)
    arr = np.array(rgba)
    a = arr[..., 3].copy()
    cy, cx = h // 2, w // 2
    r = int(min(w, h) * 0.34)
    yy, xx = np.ogrid[:h, :w]
    inside_disc = (xx - cx) ** 2 + (yy - cy) ** 2 <= r ** 2
    # zero anything outside the center disc (removes edge artifacts)
    a[~inside_disc] = 0
    arr[..., 3] = a
    return autocrop(Image.fromarray(arr, "RGBA"))


# ---- Lockup: re-key existing export (no black box) ----
lockup_src = Image.open(f"{BRAND}/blaze-lockup.png")
lockup = to_transparent(lockup_src, lo=92, hi=215)
lockup = autocrop(lockup)
lockup.save(f"{BRAND}/blaze-lockup.png")
print("lockup", lockup.size)

# ---- Icon from button (no dark circle) ----
icon = icon_from_button(f"{BRAND}/blaze-button.png")
icon.save(f"{BRAND}/blaze-icon.png")
print("icon", icon.size)

# ---- Favicon: icon only on transparent, no dark disc ----
for sz in (180, 64, 32):
    fav = icon.resize((sz, sz), Image.LANCZOS)
    fav.save(f"{BRAND}/blaze-button-{sz}.png")
print("favicons done")
