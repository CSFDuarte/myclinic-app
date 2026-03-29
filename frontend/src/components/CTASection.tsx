import Image from 'next/image'
import { WHATSAPP_URL } from '@/lib/constants'
import { IMAGES } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="bg-brand-bgLight py-24 px-6 relative overflow-hidden">
      <Image
        src={IMAGES.ornamentSide}
        alt=""
        aria-hidden
        width={1024}
        height={693}
        className="absolute -left-24 bottom-0 w-[320px] ornament-soft"
      />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title mb-6">Conquiste seu sorriso dos sonhos com um protocolo padrao ouro</h2>
        <p className="text-brand-muted font-sans text-base leading-relaxed mb-10">
          E cuidado, transformacao e reencontro com a sua melhor versao. Agende sua avaliacao e descubra
          como transformar seu sorriso com seguranca e previsibilidade.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base px-12 py-4"
        >
          Agende sua consulta
        </a>
      </div>
    </section>
  )
}
