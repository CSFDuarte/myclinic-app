import Image from 'next/image'
import { IMAGES } from '@/lib/constants'

const reasons = [
  {
    title: 'Transformacao em um dia',
    description: 'Com o protocolo de carga imediata, muitos pacientes recuperam o sorriso completo no mesmo dia do procedimento.',
  },
  {
    title: 'Atendimento humanizado',
    description: 'Cada plano de tratamento respeita historia, necessidades e objetivos de vida de cada paciente.',
  },
  {
    title: 'Equipe especialista',
    description: 'Dr. Adnan de Sousa Freitas e Dra. Polyana Cantuaria conduzem os casos com foco tecnico e acolhimento.',
  },
  {
    title: 'Duas unidades',
    description: 'Atendimento em Campinas e Borda da Mata com a mesma qualidade em implantodontia e estetica.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="bg-brand-bgLight py-24 px-6 relative overflow-hidden">
      <Image
        src={IMAGES.ornamentSide}
        alt=""
        aria-hidden
        width={1024}
        height={693}
        className="absolute -right-20 top-12 w-[320px] ornament-soft"
      />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Por que a My Clinic Odonto?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div key={`${item.title}-${index}`} className="flex flex-col gap-3">
              <h3 className="font-sans font-semibold text-xl text-brand-cream leading-snug">{item.title}</h3>
              <p className="text-brand-muted font-sans text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
