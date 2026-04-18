import Image from 'next/image'
import { IMAGES, WHATSAPP_URL } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section className="bg-brand-bg py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="section-title mb-6">Odontologia Estética e Contemporânea em Campinas</h2>
          <p className="text-brand-muted font-sans text-lg leading-relaxed mb-8">
            A MyClinic Odonto é especializada em Implantes e Ortodontia, com uma experiência única de
            transformação do sorriso. Nossa missão é transformar sorrisos e renovar a autoestima dos pacientes.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agende pelo WhatsApp
          </a>
        </div>

        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={IMAGES.fotoClinica}
            alt="Clínica MyClinic Odonto em Campinas"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
