"""Remove outer black box from full Blaze lockup; keep metallic strokes + tooth interior."""
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

BRAND = Path("public/brand")
SRC = BRAND / "blaze-lockup-original.png"
if not SRC.exists():
    SRC = Path(
        r"C:\Users\sebas\.cursor\projects\c-Users-sebas-OneDrive-Desktop-VC-CORE-HQ\assets"
        r"\c__Users_sebas_AppData_Roaming_Cursor_User_workspaceStorage_465acc0bd8295a93e6af6eff448cf3e7_images_Full_Blaze_Dental_New_Logo_-74ac78c7-03ae-4c34-a7fe-30dd1afee779.png"
    )


def luminance(rgb: np.ndarray) -> np.ndarray:
    return 0.2126 * rgb[..., 0] + 0.7152 * rgb[..., 1] + 0.0722 * rgb[..., 2]


def flood_remove_background(rgb: np.ndarray, thresh: float = 26.0) -> np.ndarray:
    """Transparent-fill dark pixels connected to image edges (the outer black box)."""
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
        q.append((y - 1, x))
        q.append((y + 1, x))
        q.append((y, x - 1))
        q.append((y, x + 1))

    return alpha


def autocrop(rgba: Image.Image, pad: int = 8) -> Image.Image:
    a = np.array(rgba)[..., 3]
    ys, xs = np.where(a > 8)
    if len(xs) == 0:
        return rgba
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    x0 = max(0, x0 - pad)
    y0 = max(0, y0 - pad)
    x1 = min(rgba.width - 1, x1 + pad)
    y1 = min(rgba.height - 1, y1 + pad)
    return rgba.crop((x0, y0, x1 + 1, y1 + 1))


def keep_logo_pixels(rgb: np.ndarray, alpha: np.ndarray, dark: float = 32.0, bright: float = 44.0) -> np.ndarray:
    """Drop dark islands not touching metallic strokes (removes texture splatter)."""
    h, w = rgb.shape[:2]
    lum = luminance(rgb.astype(np.float32))
    bright_mask = lum >= bright
    keep = bright_mask.copy()
    q: deque[tuple[int, int]] = deque((y, x) for y in range(h) for x in range(w) if bright_mask[y, x])
    visited = np.zeros((h, w), dtype=bool)
    while q:
        y, x = q.popleft()
        if visited[y, x]:
            continue
        visited[y, x] = True
        keep[y, x] = True
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx] and lum[ny, nx] > dark:
                q.append((ny, nx))

    out = alpha.copy()
    out[~keep] = 0
    return out


def strip_above_icon(lum: np.ndarray, alpha: np.ndarray, bright: float = 44.0, min_row: int = 80, pad: int = 4) -> np.ndarray:
    row_counts = (lum >= bright).sum(axis=1)
    icon_top = next((y for y, c in enumerate(row_counts) if c >= min_row), 0)
    out = alpha.copy()
    out[: max(0, icon_top - pad), :] = 0
    return out


def crop_to_logo_band(rgb: np.ndarray, alpha: np.ndarray, bright: float = 44.0, pad: int = 6) -> tuple[np.ndarray, np.ndarray]:
    """Trim empty rows below logo (optional tight vertical crop)."""
    lum = luminance(rgb.astype(np.float32))
    rows = np.where((alpha > 0).any(axis=1))[0]
    if len(rows) == 0:
        return rgb, alpha
    y0 = max(0, int(rows.min()) - pad)
    y1 = min(rgb.shape[0], int(rows.max()) + 1 + pad)
    return rgb[y0:y1].copy(), alpha[y0:y1].copy()


def main() -> None:
    src = Image.open(SRC).convert("RGB")
    rgb = np.array(src)
    lum = luminance(rgb.astype(np.float32))
    alpha = flood_remove_background(rgb, thresh=26)
    alpha = keep_logo_pixels(rgb, alpha, dark=32, bright=44)
    alpha = strip_above_icon(lum, alpha, bright=44, min_row=80, pad=4)
    rgba = Image.fromarray(np.dstack([rgb, alpha]).astype(np.uint8), "RGBA")
    rgb, alpha = crop_to_logo_band(rgb, alpha)
    rgba = Image.fromarray(np.dstack([rgb, alpha]).astype(np.uint8), "RGBA")
    cropped = autocrop(rgba, pad=10)
    out = BRAND / "blaze-lockup.png"
    cropped.save(out, optimize=True)
    print("saved", out, cropped.size, "transparent%", f"{(alpha==0).mean()*100:.1f}")


if __name__ == "__main__":
    main()
