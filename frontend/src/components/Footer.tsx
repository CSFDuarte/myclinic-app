import Image from 'next/image'
import { Instagram, Youtube, Facebook, MapPin } from 'lucide-react'
import {
  IMAGES,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  FACEBOOK_URL,
  ADDRESS_CAMPINAS,
  ADDRESS_CITY,
  ADDRESS_STATE,
  MAPS_CAMPINAS,
} from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-bgLight border-t border-brand-border py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-4">
          <Image
            src={IMAGES.logoMain}
            alt="MyClinic Odonto"
            width={200}
            height={100}
            className="w-48 h-auto object-contain"
          />
        </div>

        <div className="text-right flex flex-col items-end gap-3">
          <h3 className="font-serif font-semibold text-3xl text-brand-cream">Venha conhecer nossa clínica!</h3>

          <a
            href={MAPS_CAMPINAS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-muted hover:text-brand-cream text-sm font-sans transition-colors"
          >
            <MapPin size={14} className="text-brand-rose flex-shrink-0" />
            {ADDRESS_CAMPINAS}
          </a>
          <p className="text-brand-muted text-sm">{ADDRESS_CITY}</p>
          <p className="text-brand-muted text-sm">{ADDRESS_STATE}</p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-cream hover:border-brand-rose hover:text-brand-rose transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={15} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-cream hover:border-brand-rose hover:text-brand-rose transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-cream hover:border-brand-rose hover:text-brand-rose transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={15} />
            </a>
          </div>
        </div>

      </div>

    </footer>
  )
}
