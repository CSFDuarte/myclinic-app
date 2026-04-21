const steps = [
  {
    n: '— 01 —',
    title: 'Avaliação inicial',
    desc: 'Conversa, exames digitais e escuta ativa do que você busca. Sem pressa, sem fórmulas prontas.',
  },
  {
    n: '— 02 —',
    title: 'Planejamento digital',
    desc: 'Apresentação do plano em 3D, orçamento transparente e definição do caminho mais previsível.',
  },
  {
    n: '— 03 —',
    title: 'Tratamento',
    desc: 'Execução por especialistas, com o conforto e a tecnologia que a MyClinic oferece em duas unidades.',
  },
  {
    n: '— 04 —',
    title: 'Acompanhamento',
    desc: 'Manutenção e retornos para garantir longevidade ao resultado — o seu sorriso cuidado por anos.',
  },
]

export default function ProcessSection() {
  return (
    <section style={{ background: 'var(--ivory-2)', padding: '140px 0' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 48px' }}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px' }}>
          <span className="eyebrow">Nossa jornada</span>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(36px, 4.4vw, 64px)',
            fontWeight: 300,
            margin: '20px 0 24px',
            lineHeight: 1.02,
            letterSpacing: '-0.015em',
          }}>
            Do primeiro oi ao{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--bronze-deep)' }}>sorriso final</em>.
          </h2>
          <p style={{ color: 'var(--coffee)', fontSize: '17px', lineHeight: 1.7 }}>
            Transparência em cada etapa: planejamento, execução e manutenção acompanhados de perto pelos especialistas.
          </p>
        </div>

        <div className="steps-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {steps.map((step, i) => (
            <div key={step.title} className="reveal" style={{
              padding: '50px 30px',
              borderRight: i < steps.length - 1 ? '1px solid var(--line)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-italiana)',
                fontSize: '12px',
                letterSpacing: '0.3em',
                color: 'var(--bronze-deep)',
                marginBottom: '24px',
              }}>{step.n}</div>
              <h4 style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '26px',
                fontWeight: 400,
                marginBottom: '14px',
                lineHeight: 1.15,
              }}>{step.title}</h4>
              <p style={{ color: 'var(--coffee)', fontSize: '14px', lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
