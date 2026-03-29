import Image from 'next/image'
import { IMAGES } from '@/lib/constants'

const testimonials = [
  {
    quote: '"Ter um sorriso completo não é só estética. Voltei a sorrir com segurança e recuperei minha qualidade de vida."',
    name: 'Tia Maria',
    role: 'Paciente de protocolo dentário',
  },
  {
    quote: '"Minha experiência com Invisalign foi excelente. Atendimento próximo, explicações claras e resultado acima do esperado."',
    name: 'Sr. Jose',
    role: 'Paciente de ortodontia',
  },
  {
    quote: '"A equipe cuidou de cada detalhe. Meu sorriso mudou e minha autoestima também. Recomendo de olhos fechados."',
    name: 'Dona Gildete',
    role: 'Paciente de estética do sorriso',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-bg py-24 px-6 relative overflow-hidden">
      <Image
        src={IMAGES.ornamentCircle}
        alt=""
        aria-hidden
        width={300}
        height={289}
        className="absolute right-8 top-10 w-28 ornament-soft"
      />
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title">Saiba a opinião dos pacientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={`${t.name}-${index}`} className="bg-brand-bgLight border border-brand-border rounded-2xl p-8 flex flex-col gap-6">
              <p className="text-brand-muted font-sans text-sm leading-relaxed italic flex-1">{t.quote}</p>
              <div>
                <div>
                  <p className="font-sans font-semibold text-brand-cream text-sm">{t.name}</p>
                  <p className="font-sans text-brand-muted text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
