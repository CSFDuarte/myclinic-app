'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { IMAGES } from '@/lib/constants'

const navLinks = [
  { label: 'Página Inicial', href: '#inicio' },
  { label: 'Serviços',       href: '#servicos' },
  { label: 'Contatos',       href: '#contato' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-bg/95 backdrop-blur-md shadow-lg' : 'bg-brand-bg/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#inicio" className="flex-shrink-0">
          <Image
            src={IMAGES.logoGold}
            alt="MyClinic Odonto"
            width={120}
            height={52}
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              {i > 0 && <span className="text-brand-muted mx-4 select-none">|</span>}
              <a
                href={link.href}
                className="text-brand-roseGold font-sans text-sm tracking-widest uppercase hover:text-brand-cream transition-colors duration-200 pb-0.5 border-b border-transparent hover:border-brand-cream"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-cream p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-brand-bg/98 px-6 py-4 flex flex-col gap-4 border-t border-brand-roseGold/20">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-brand-roseGold font-sans text-sm tracking-widest uppercase hover:text-brand-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
