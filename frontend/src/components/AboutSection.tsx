import Image from 'next/image'
import { IMAGES, WHATSAPP_URL } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section className="bg-brand-bg py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="section-title mb-6">Odontologia Estética e Contemporânea em Campinas</h2>
          <p className="text-brand-muted font-sans text-lg leading-relaxed mb-8">
            A MyClinic Odonto e especializada em Implantes e Ortodontia, com uma experiencia unica de
            transformacao do sorriso. Nossa missao e transformar sorrisos e renovar a autoestima dos pacientes.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agende pelo WhatsApp
          </a>
        </div>

        <div className="flex justify-center">
          <Image
            src={IMAGES.logoAccent}
            alt="My Clinic"
            width={347}
            height={344}
            className="w-48 md:w-64 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
