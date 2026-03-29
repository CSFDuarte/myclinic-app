import type { Metadata } from 'next'
import { Lora, Poppins } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'My Clinic Odonto - Clínica odontológica em Campinas',
  description: 'Clinica especializada em implantes, Invisalign e estetica do sorriso em Campinas.',
  metadataBase: new URL('https://myclinicodonto.com.br'),
  openGraph: {
    title: 'My Clinic Odonto',
    description: 'Clínica odontológica em Campinas.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${lora.variable} ${poppins.variable}`}>
      <body className="bg-brand-bg text-brand-cream font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
