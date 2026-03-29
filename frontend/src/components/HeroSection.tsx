import Image from 'next/image'
import { Instagram, Youtube, Facebook } from 'lucide-react'
import {
  IMAGES,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  FACEBOOK_URL,
  ADDRESS_CAMPINAS,
  ADDRESS_CITY,
  ADDRESS_STATE,
} from '@/lib/constants'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-end px-6"
      style={{
        backgroundImage: `url('${IMAGES.heroBackground}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 md:mr-20 flex flex-col items-center text-center bg-brand-bg/85 border border-brand-border rounded-2xl px-10 py-10 max-w-xs w-full">
        <a href="/" className="mb-6">
          <Image
            src={IMAGES.logoMain}
            alt="MyClinic Odonto"
            width={180}
            height={90}
            className="w-44 h-auto object-contain"
            priority
          />
        </a>

        <div className="flex items-center gap-4 mb-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-cream hover:border-brand-rose hover:text-brand-rose transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-cream hover:border-brand-rose hover:text-brand-rose transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-cream hover:border-brand-rose hover:text-brand-rose transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={16} />
          </a>
        </div>

        <div className="text-brand-muted text-sm font-sans leading-relaxed space-y-1">
          <p className="font-semibold text-brand-cream">{ADDRESS_CAMPINAS}</p>
          <p>{ADDRESS_CITY}</p>
          <p>{ADDRESS_STATE}</p>
        </div>
      </div>
    </section>
  )
}
