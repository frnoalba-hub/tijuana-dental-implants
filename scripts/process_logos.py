"""Process Blaze logos: remove dark backgrounds -> transparent, cut icon out of lockup.

Outputs (in public/brand/):
  - blaze-lockup.png : full logo (icon + BLAZE + DENTAL), transparent bg
  - blaze-icon.png   : just the metallic icon, transparent bg (from the lockup)
  - blaze-button.png : circular button (icon on dark disc), cropped, for favicon use
"""
import numpy as np
from PIL import Image, ImageFilter

BRAND = "public/brand"


def to_transparent(img, lo=84, hi=140):
    """Light-on-dark -> RGBA with luminance-based alpha. Drops dark background + grain."""
    rgb = np.asarray(img.convert("RGB"), dtype=np.float32)
    lum = 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]
    alpha = np.clip((lum - lo) / (hi - lo), 0.0, 1.0) * 255.0
    out = np.dstack([rgb, alpha]).astype(np.uint8)
    rgba = Image.fromarray(out, "RGBA")
    # median filter the alpha to remove isolated grain specks, keep strokes
    a = rgba.split()[3].filter(ImageFilter.MedianFilter(size=3))
    rgba.putalpha(a)
    return rgba


def autocrop(img, pad=12):
    a = np.asarray(img)[..., 3]
    ys, xs = np.where(a > 8)
    if len(xs) == 0:
        return img
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    x0 = max(0, x0 - pad); y0 = max(0, y0 - pad)
    x1 = min(img.width, x1 + pad); y1 = min(img.height, y1 + pad)
    return img.crop((x0, y0, x1 + 1, y1 + 1))


# ---- Full lockup (transparent) ----
full = Image.open(f"{BRAND}/blaze-full-src.png")
lockup = to_transparent(full)
lockup_cropped = autocrop(lockup)
lockup_cropped.save(f"{BRAND}/blaze-lockup.png")
print("lockup", lockup_cropped.size)

# ---- Icon only: take the first real content block off the transparent lockup ----
a = np.asarray(lockup)[..., 3]
row_has = (a > 24).sum(axis=1) >= 6  # bool: row has meaningful content
H = len(row_has)
# collect runs of content rows that are long enough to be a real block (not grain)
blocks = []
i = 0
while i < H:
    if row_has[i]:
        j = i
        while j < H and row_has[j]:
            j += 1
        if j - i >= 18:  # real block
            blocks.append((i, j))
        i = j
    else:
        i += 1
icon_top, icon_bot = blocks[0]
icon_img = lockup.crop((0, icon_top, lockup.width, icon_bot))
icon_img = autocrop(icon_img)
icon_img.save(f"{BRAND}/blaze-icon.png")
print("icon", icon_img.size, "blocks", blocks)

# ---- Circular button: crop the disc, keep as-is (dark bg) for favicon ----
btn = Image.open(f"{BRAND}/blaze-button-src.png").convert("RGB")
# the disc is centered; crop to a centered square already 1024x1024, keep full
btn.save(f"{BRAND}/blaze-button.png")
# also produce small favicon sizes
for sz in (180, 64, 32):
    btn.resize((sz, sz), Image.LANCZOS).save(f"{BRAND}/blaze-button-{sz}.png")
print("button done")
