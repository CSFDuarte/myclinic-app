const testimonials = [
  {
    quote:
      '"Eu não conseguia mais sorrir com vontade. Depois do protocolo na MyClinic, recuperei minha autoestima e minha alegria. Sou muito grata a essa equipe maravilhosa!"',
    name: 'Tia Maria',
    role: 'Protocolo All-on-4',
    initials: 'TM',
  },
  {
    quote:
      '"Fiz o Invisalign aqui e o resultado superou tudo que esperava. Atendimento acolhedor, ambiente lindo e profissionais que realmente se importam com você."',
    name: 'Sr. José',
    role: 'Invisalign',
    initials: 'SJ',
  },
  {
    quote:
      '"Nossa querida Dona Gildete ficamos muito felizes em ser escolhidos para transformar o sorriso dela. Um trabalho que vai muito além da estética."',
    name: 'Dona Gildete',
    role: 'Estética do Sorriso',
    initials: 'DG',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-bgLight py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start gap-6 mb-16">
          {/* Ícone coração decorativo */}
          <div className="hidden md:block text-brand-roseGold/30 text-9xl font-serif leading-none select-none mt-2">
            ♥
          </div>
          <div>
            <p className="section-subtitle">Nossos pacientes</p>
            <h2 className="section-title">
              Saiba a opinião<br />
              <span className="text-brand-roseGold">dos pacientes</span>
            </h2>
          </div>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-brand-bg p-8 flex flex-col gap-6">
              {/* Quote */}
              <p className="text-brand-muted font-sans text-sm leading-relaxed italic flex-1">
                {t.quote}
              </p>

              {/* Avatar + nome */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-roseGold/20 border border-brand-roseGold/40 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-brand-roseGold font-semibold text-sm">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-brand-roseGold text-sm">{t.name}</p>
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
