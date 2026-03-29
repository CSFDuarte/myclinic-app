import Image from 'next/image'
import { IMAGES, WHATSAPP_URL } from '@/lib/constants'

const services = [
  {
    title: 'Protocolo Dentario All-on-4',
    description: 'Reabilitacao completa com carga imediata para devolver estetica, mastigacao e qualidade de vida em um unico dia.',
  },
  {
    title: 'Implantes Dentarios',
    description: 'Implantes convencionais com planejamento personalizado, materiais de alta qualidade e foco em longevidade.',
  },
  {
    title: 'Invisalign',
    description: 'Ortodontia com alinhadores transparentes para corrigir o sorriso com discricao, conforto e previsibilidade.',
  },
  {
    title: 'Estetica do Sorriso',
    description: 'Clareamento e procedimentos esteticos para harmonizar o sorriso e elevar a autoestima.',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-brand-bg py-24 px-6 relative overflow-hidden">
      <Image
        src={IMAGES.ornamentTop}
        alt=""
        aria-hidden
        width={1536}
        height={1249}
        className="absolute -top-20 -left-24 w-[340px] ornament-soft"
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Conheça nossas especialidades</h2>
          <p className="text-brand-muted font-sans text-lg mt-4">
            Somos especialistas em implantes, ortodontia e estetica dental com abordagem humanizada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, index) => (
            <div key={`${svc.title}-${index}`} className="bg-brand-bgLight border border-brand-border rounded-2xl p-6 flex flex-col">
              <Image src={IMAGES.placeholderA} alt="Serviço" width={683} height={600} className="w-full h-auto mb-5" />

              <h3 className="font-sans text-xl text-brand-cream mb-3">{svc.title}</h3>
              <p className="text-brand-muted font-sans text-sm leading-relaxed mb-6 flex-1">{svc.description}</p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center btn-outline text-xs py-2.5 px-4"
              >
                Agendar consulta
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
