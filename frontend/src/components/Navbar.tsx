'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { IMAGES } from '@/lib/constants'

const navLinks = [
  { label: 'Página inicial', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Contatos', href: '/contatos' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex-shrink-0">
          <div className="flex flex-row items-center justify-center gap-0.5">
            <div className="relative w-12 h-12">
              <Image
                src={IMAGES.logoTopSymbol}
                alt="Símbolo My Clinic"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative w-[42px] h-[9px] -ml-0.5">
              <Image
                src={IMAGES.logoTopWordmark}
                alt="Marca My Clinic"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              {i > 0 && <span className="text-brand-muted/40 mx-4 select-none">|</span>}
              <Link
                href={link.href}
                className={`font-sans text-sm transition-colors duration-200 pb-0.5 border-b ${
                  pathname === link.href
                    ? 'text-brand-cream border-brand-cream'
                    : 'text-brand-muted border-transparent hover:text-brand-cream hover:border-brand-cream'
                }`}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <button
          className="md:hidden text-brand-cream p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-brand-bg px-6 py-4 flex flex-col gap-4 border-t border-brand-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-sans text-sm transition-colors ${
                pathname === link.href ? 'text-brand-cream' : 'text-brand-muted hover:text-brand-cream'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
