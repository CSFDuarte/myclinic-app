import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MyClinic Odonto — Odontologia Estética e Contemporânea em Campinas',
  description:
    'Clínica especializada em Implantes, Invisalign e Estética do Sorriso. Transforme seu sorriso em apenas um dia com o Protocolo All-on-4. Cambuí, Campinas – SP.',
  keywords: [
    'implantes dentários campinas',
    'invisalign campinas',
    'protocolo dentário',
    'clareamento dental',
    'dentista campinas',
    'odontologia estética',
    'myclinic odonto',
  ],
  openGraph: {
    title: 'MyClinic Odonto — Odontologia Estética e Contemporânea',
    description: 'Transforme seu sorriso em apenas um dia. Implantes, Invisalign e Estética em Campinas – SP.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-brand-bg text-brand-cream font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
