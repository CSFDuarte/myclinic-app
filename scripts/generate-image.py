#!/usr/bin/env python3
"""
Gera uma imagem via Google Imagen 4 e salva em frontend/public/images/.

Uso:
    ./generate-image.py <filename> "<prompt>" [--model fast|standard|ultra] [--aspect 1:1|16:9|9:16|4:3|3:4]

Exemplo:
    ./generate-image.py foto-clinica.jpeg "Elegant dental clinic..." --aspect 4:3
"""
import argparse
import base64
import json
import sys
import urllib.request
from pathlib import Path

KEY_FILE = Path.home() / ".secrets" / "gemini.key"
IMAGES_DIR = Path("/docker/apps/myclinic-app/frontend/public/images")

MODELS = {
    "fast": "imagen-4.0-fast-generate-001",
    "standard": "imagen-4.0-generate-001",
    "ultra": "imagen-4.0-ultra-generate-001",
}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("filename", help="Nome do arquivo de saída (ex: foto-clinica.jpeg)")
    parser.add_argument("prompt", help="Prompt em inglês")
    parser.add_argument("--model", choices=MODELS.keys(), default="fast")
    parser.add_argument("--aspect", default="1:1", choices=["1:1", "16:9", "9:16", "4:3", "3:4"])
    args = parser.parse_args()

    api_key = KEY_FILE.read_text().strip()
    model_id = MODELS[args.model]
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_id}:predict?key={api_key}"

    payload = {
        "instances": [{"prompt": args.prompt}],
        "parameters": {"sampleCount": 1, "aspectRatio": args.aspect},
    }

    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    with urllib.request.urlopen(req, timeout=120) as resp:
        data = json.load(resp)

    if "predictions" not in data:
        print(json.dumps(data, indent=2), file=sys.stderr)
        return 1

    img_bytes = base64.b64decode(data["predictions"][0]["bytesBase64Encoded"])
    out_path = IMAGES_DIR / args.filename
    out_path.write_bytes(img_bytes)
    print(f"OK: {out_path} ({len(img_bytes):,} bytes)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
