import { Star } from 'lucide-react'

const reasons = [
  {
    title: 'Transformação em 1 Dia',
    description:
      'Com o Protocolo All-on-4, você sai da clínica com um sorriso completo e funcional no mesmo dia. Sem longas esperas, sem etapas desnecessárias.',
  },
  {
    title: 'Atendimento Humanizado',
    description:
      'Cada paciente tem uma história. Ouvimos, acolhemos e nos dedicamos de coração à transformação de vida de quem passa pela nossa clínica.',
  },
  {
    title: 'Duas Unidades',
    description:
      'Presente em Campinas (Cambuí) e Borda da Mata, estamos cada vez mais próximos de quem precisa transformar o sorriso com qualidade.',
  },
  {
    title: 'Equipe Especialista',
    description:
      'Dr. Adnan Freitas e Dra. Polyana Cantuária são especialistas dedicados, com formação de alto nível e paixão genuína pela odontologia.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="bg-brand-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Nossos diferenciais</p>
          <h2 className="section-title">
            Por que a <span className="text-brand-roseGold">My Clinic Odonto?</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {reasons.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-4">
              <Star
                size={32}
                className="text-brand-roseGold fill-brand-roseGold/30"
                aria-hidden
              />
              <h3 className="font-serif text-lg text-brand-cream leading-snug">
                {item.title}
              </h3>
              <p className="text-brand-muted font-sans text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
