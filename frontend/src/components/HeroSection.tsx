import Image from 'next/image'
import { Instagram, Youtube, Twitter, MapPin } from 'lucide-react'
import { IMAGES, INSTAGRAM_URL, YOUTUBE_URL, WHATSAPP_URL, ADDRESS_CAMPINAS } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-end"
      style={{
        backgroundImage: `url('${IMAGES.heroBackground}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Card do lado direito */}
      <div className="relative z-10 mr-8 md:mr-20 flex flex-col items-center text-center bg-brand-bg/80 backdrop-blur-sm px-10 py-10 max-w-xs w-full">

        {/* Logo */}
        <a href="#inicio" className="mb-6">
          <Image
            src={IMAGES.logoGold}
            alt="MyClinic Odonto"
            width={180}
            height={90}
            className="w-44 h-auto object-contain"
            priority
          />
        </a>

        {/* Social icons */}
        <div className="flex items-center gap-4 mb-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-brand-cream/40 flex items-center justify-center text-brand-cream hover:border-brand-roseGold hover:text-brand-roseGold transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://twitter.com/myclinicodonto"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-brand-cream/40 flex items-center justify-center text-brand-cream hover:border-brand-roseGold hover:text-brand-roseGold transition-colors"
            aria-label="Twitter / X"
          >
            <Twitter size={16} />
          </a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-brand-cream/40 flex items-center justify-center text-brand-cream hover:border-brand-roseGold hover:text-brand-roseGold transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={16} />
          </a>
        </div>

        {/* Endereço */}
        <div className="text-brand-cream/80 text-sm font-sans leading-relaxed space-y-1">
          <p className="font-semibold text-brand-cream">R. José Guatemosin Nogueira, 26</p>
          <p>Cambuí, Campinas</p>
          <p>SP, 13025‑120</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-brand-roseGold/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-brand-roseGold" />
      </div>
    </section>
  )
}
