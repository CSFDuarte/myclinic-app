// ─────────────────────────────────────────────────────────────────────────────
// Imagens: são servidas remotamente até o usuário baixar localmente.
// Para baixar, rode: bash scripts/download-images.sh
// Depois troque as URLs pelos caminhos locais: '/images/<nome-do-arquivo>'
// ─────────────────────────────────────────────────────────────────────────────

const WP = 'https://myclinicodonto.com.br/wp-content/uploads/2024/05'

export const IMAGES = {
  heroBackground: `${WP}/20221223_141547-1-1.jpg`,
  logoWhite:      `${WP}/Logo_Prancheta-2-2.png`,
  logoGold:       `${WP}/Group-1-1-1.png`,
  logoIcon:       `${WP}/output-onlinepngtools-4-300x288.png`,
  fotoClinica:    `${WP}/WhatsApp-Image-2024-05-11-at-14.15.03.jpeg`,
} as const

// ─────────────────────────────────────────────────────────────────────────────
// Contatos
// ─────────────────────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = '5519999382566'
export const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta!`
export const INSTAGRAM_URL   = 'https://www.instagram.com/myclinicodonto/'
export const FACEBOOK_URL    = 'https://www.facebook.com/dr.adnansousafreitas/'
export const YOUTUBE_URL     = 'https://www.youtube.com/@myclinicodonto'

export const ADDRESS_CAMPINAS = 'R. José Guatemosin Nogueira, 26 — Cambuí, Campinas — SP, 13025‑120'
export const MAPS_CAMPINAS    = 'https://maps.google.com/?q=R.+José+Guatemosin+Nogueira,+26,+Cambuí,+Campinas,+SP'
