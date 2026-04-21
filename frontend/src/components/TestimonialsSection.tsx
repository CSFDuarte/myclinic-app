const testimonials = [
  {
    initial: 'M',
    quote: '"Ter um sorriso completo não é só estética. Voltei a sorrir com segurança e recuperei minha qualidade de vida."',
    name: 'Tia Maria',
    role: 'Paciente de protocolo dentário',
  },
  {
    initial: 'J',
    quote: '"Minha experiência com Invisalign foi excelente. Atendimento próximo, explicações claras e resultado acima do esperado."',
    name: 'Sr. José',
    role: 'Paciente de ortodontia',
  },
  {
    initial: 'G',
    quote: '"A equipe cuidou de cada detalhe. Meu sorriso mudou e minha autoestima também. Recomendo de olhos fechados."',
    name: 'Dona Gildete',
    role: 'Paciente de estética do sorriso',
  },
]

export default function TestimonialsSection() {
  return (
    <section style={{ padding: '140px 0', position: 'relative', overflow: 'hidden', background: 'var(--ivory)' }}>
      {/* Giant quote background */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'var(--font-cormorant)',
        fontSize: '520px',
        fontWeight: 300,
        lineHeight: 0.7,
        color: 'var(--parchment)',
        opacity: 0.45,
        pointerEvents: 'none',
        zIndex: 0,
        userSelect: 'none',
      }}>&ldquo;</div>

      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 90px' }}>
          <span className="eyebrow">Depoimentos</span>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(36px, 4.4vw, 64px)',
            fontWeight: 300,
            margin: '20px 0 0',
            lineHeight: 1.02,
            letterSpacing: '-0.015em',
          }}>
            Sorrisos que falam<br />
            <em style={{ fontStyle: 'italic', color: 'var(--bronze-deep)' }}>por nós.</em>
          </h2>
        </div>

        <div className="test-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
        }}>
          {testimonials.map((t) => (
            <div key={t.name} className="reveal" style={{
              padding: '40px 32px',
              background: 'var(--ivory)',
              border: '1px solid var(--line)',
            }}>
              <div style={{ color: 'var(--bronze)', letterSpacing: '0.1em', marginBottom: '20px', fontSize: '14px' }}>
                ✦ ✦ ✦ ✦ ✦
              </div>
              <div style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '22px',
                lineHeight: 1.45,
                fontWeight: 300,
                color: 'var(--espresso)',
                marginBottom: '28px',
              }}>{t.quote}</div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid var(--line)',
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--bronze), var(--bronze-deep))',
                  color: 'var(--ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '18px',
                  flexShrink: 0,
                }}>{t.initial}</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--espresso)' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.08em' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .test-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
