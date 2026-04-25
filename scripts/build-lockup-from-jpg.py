"""One-off: build transparent lockup PNGs from blaze-dental-logo.jpg for sharp footer display."""
from __future__ import annotations

from PIL import Image

JPG = r"c:\Users\sebas\OneDrive\Desktop\VC_CORE_HQ\05_Companies\Dr_Jose_Dental\_WEB_SYSTEM\tijuana-dental-implants\public\blaze-dental-logo.jpg"
OUT = r"c:\Users\sebas\OneDrive\Desktop\VC_CORE_HQ\05_Companies\Dr_Jose_Dental\_WEB_SYSTEM\tijuana-dental-implants\public\blaze-dental-lockup.png"
OUT2 = r"c:\Users\sebas\OneDrive\Desktop\VC_CORE_HQ\05_Companies\Dr_Jose_Dental\_WEB_SYSTEM\tijuana-dental-implants\public\blaze-dental-lockup@2x.png"


def main() -> None:
    im = Image.open(JPG).convert("RGBA")
    px = im.load()
    w, h = im.size
    thr = 38
    for y in range(h):
        for x in range(w):
            r, g, b, _a = px[x, y]
            if r < thr and g < thr and b < thr:
                px[x, y] = (0, 0, 0, 0)
    bbox = im.getbbox()
    if not bbox:
        raise SystemExit("empty bbox after keying")
    pad = 14
    x0 = max(0, bbox[0] - pad)
    y0 = max(0, bbox[1] - pad)
    x1 = min(w, bbox[2] + pad)
    y1 = min(h, bbox[3] + pad)
    cropped = im.crop((x0, y0, x1, y1))
    w1, h1 = cropped.size
    hi = cropped.resize((w1 * 2, h1 * 2), Image.Resampling.LANCZOS)
    hi.save(OUT2, optimize=True, compress_level=9)
    cropped.save(OUT, optimize=True, compress_level=9)
    print("saved", OUT, cropped.size, OUT2, hi.size)


if __name__ == "__main__":
    main()
