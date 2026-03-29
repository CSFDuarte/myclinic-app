import Image from 'next/image'
import { Instagram, Youtube, Facebook, MapPin } from 'lucide-react'
import {
  IMAGES,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  FACEBOOK_URL,
  WHATSAPP_URL,
  ADDRESS_CAMPINAS,
  MAPS_CAMPINAS,
} from '@/lib/constants'

export default function Footer() {
  return (
    <footer id="contato" className="bg-brand-bgLight border-t border-brand-roseGold/20 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Logo */}
        <div className="flex flex-col items-start gap-6">
          <Image
            src={IMAGES.logoGold}
            alt="MyClinic Odonto"
            width={200}
            height={100}
            className="w-48 h-auto object-contain"
          />
          <p className="text-brand-muted font-sans text-sm leading-relaxed max-w-xs">
            Odontologia Estética e Contemporânea. Transformamos sorrisos e renovamos
            a autoestima dos nossos pacientes.
          </p>
        </div>

        {/* Endereço e contatos */}
        <div className="text-right flex flex-col items-end gap-4">
          <h3 className="font-serif text-2xl text-brand-cream">Venha conhecer nossa clínica!</h3>

          <a
            href={MAPS_CAMPINAS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-muted hover:text-brand-cream text-sm font-sans transition-colors"
          >
            <MapPin size={14} className="text-brand-roseGold flex-shrink-0" />
            {ADDRESS_CAMPINAS}
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-roseGold hover:text-brand-cream font-sans text-sm transition-colors"
          >
            (19) 99938‑2566
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-brand-cream/30 flex items-center justify-center text-brand-cream hover:border-brand-roseGold hover:text-brand-roseGold transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={15} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-brand-cream/30 flex items-center justify-center text-brand-cream hover:border-brand-roseGold hover:text-brand-roseGold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-brand-cream/30 flex items-center justify-center text-brand-cream hover:border-brand-roseGold hover:text-brand-roseGold transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={15} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-brand-roseGold/10 text-center">
        <p className="text-brand-muted font-sans text-xs">
          © {new Date().getFullYear()} MyClinic Odonto — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
