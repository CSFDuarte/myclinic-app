import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Italiana } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const italiana = Italiana({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italiana',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MyClinic Odonto — Odontologia Estética e Contemporânea',
  description: 'Clínica boutique em Campinas especializada em Implantodontia, Invisalign e Estética do Sorriso. Dr. Adnan Freitas e Dra. Polyana Cantuária.',
  metadataBase: new URL('https://myclinicodonto.com.br'),
  icons: {
    icon: '/images/logo-top-symbol.png',
  },
  openGraph: {
    title: 'MyClinic Odonto — Odontologia Estética e Contemporânea',
    description: 'Implantes, Invisalign e Estética do Sorriso em Campinas.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable} ${italiana.variable}`}>
      <head>
        <script
          defer
          src="https://analytics.srv1522376.hstgr.cloud/script.js"
          data-website-id="1edb21ef-4187-4b63-8d4e-fe531bf9d603"
        />
        <script
          async
          src="https://agenda.srv1522376.hstgr.cloud/embed/v1/widget.js"
          data-tenant="myclinic"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
