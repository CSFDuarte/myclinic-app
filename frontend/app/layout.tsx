import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Clinic Odonto – Clínica odontológica em Campinas',
  description: 'Transforme seu sorriso em um dia com a MyClinic Odonto. Protocolo de carga imediata que devolve estética e qualidade de vida.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
