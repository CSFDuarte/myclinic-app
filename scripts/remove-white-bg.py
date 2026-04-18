#!/usr/bin/env python3
"""
Remove fundo branco de um PNG, deixando-o transparente.
Uso: ./remove-white-bg.py <arquivo.png> [threshold=240]
"""
import sys
from pathlib import Path
from PIL import Image


def main() -> int:
    if len(sys.argv) < 2:
        print("Uso: remove-white-bg.py <arquivo> [threshold]", file=sys.stderr)
        return 1

    path = Path(sys.argv[1])
    threshold = int(sys.argv[2]) if len(sys.argv) > 2 else 240

    img = Image.open(path).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r >= threshold and g >= threshold and b >= threshold:
                # quanto mais branco, mais transparente
                brightness = min(r, g, b)
                alpha = max(0, int((255 - brightness) * 255 / (255 - threshold)))
                pixels[x, y] = (r, g, b, alpha)

    img.save(path)
    print(f"OK: {path} (transparência aplicada)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
