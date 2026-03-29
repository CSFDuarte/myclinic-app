import Image from 'next/image'
import { IMAGES, WHATSAPP_URL } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section className="bg-brand-bgLight py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <p className="section-subtitle">Nossa Missão</p>
          <h2 className="section-title mb-6">
            Primeiro título<br />
            <span className="text-brand-roseGold">para o paciente</span>
          </h2>
          <p className="text-brand-muted font-sans text-base leading-relaxed mb-4">
            Ter um sorriso completo não é apenas uma questão de estética, mas de qualidade de vida.
            Na MyClinic Odonto, acreditamos que cada transformação vai muito além do aspecto visual
            — é o reencontro com a sua melhor versão.
          </p>
          <p className="text-brand-muted font-sans text-base leading-relaxed mb-10">
            Somos especialistas em Implantes, Invisalign e Estética do Sorriso. Com uma equipe
            humanizada e os melhores protocolos do mercado, devolvemos o prazer de sorrir a cada
            paciente que passa pela nossa clínica.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agende pelo WhatsApp
          </a>
        </div>

        {/* Imagem / logo decorativo */}
        <div className="flex justify-center items-center">
          <div className="relative bg-brand-bg/60 p-12 flex items-center justify-center">
            <Image
              src={IMAGES.logoGold}
              alt="MyClinic Odonto"
              width={300}
              height={160}
              className="w-72 h-auto object-contain opacity-90"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
