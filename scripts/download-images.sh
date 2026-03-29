#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# Download das imagens do site original para o frontend/public/images/
# Execute uma vez: bash scripts/download-images.sh
# Depois, troque as URLs em src/lib/constants.ts pelos caminhos locais
# ─────────────────────────────────────────────────────────────────────────────

set -e

DEST="frontend/public/images"
BASE="https://myclinicodonto.com.br/wp-content/uploads/2024/05"

mkdir -p "$DEST"

echo "📥 Baixando imagens..."

curl -L --progress-bar -o "$DEST/hero-clinica.jpg"  "$BASE/20221223_141547-1-1.jpg"
curl -L --progress-bar -o "$DEST/logo-white.png"    "$BASE/Logo_Prancheta-2-2.png"
curl -L --progress-bar -o "$DEST/logo-gold.png"     "$BASE/Group-1-1-1.png"
curl -L --progress-bar -o "$DEST/logo-icon.png"     "$BASE/output-onlinepngtools-4-300x288.png"
curl -L --progress-bar -o "$DEST/foto-clinica.jpeg" "$BASE/WhatsApp-Image-2024-05-11-at-14.15.03.jpeg"

echo ""
echo "✅ Imagens salvas em $DEST"
echo ""
echo "💡 Agora atualize src/lib/constants.ts:"
echo "   heroBackground: '/images/hero-clinica.jpg'"
echo "   logoWhite:      '/images/logo-white.png'"
echo "   logoGold:       '/images/logo-gold.png'"
echo "   logoIcon:       '/images/logo-icon.png'"
echo "   fotoClinica:    '/images/foto-clinica.jpeg'"
