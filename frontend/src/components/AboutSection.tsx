export default function AboutSection() {
  return (
    <section id="filosofia" style={{ padding: '140px 0', position: 'relative', background: 'var(--ivory)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 48px' }}>
        {/* Philosophy grid */}
        <div className="philosophy-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '30px',
          alignItems: 'stretch',
        }}>
          <div className="phil-img reveal" style={{
            gridColumn: 'span 7',
            height: '560px',
            backgroundImage: "url('/images/smile-man.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
            position: 'relative',
          }}>
            <div style={{
              content: '',
              position: 'absolute',
              inset: '14px',
              border: '1px solid rgba(255,255,255,0.5)',
            }} />
          </div>

          <div className="phil-copy reveal" style={{
            gridColumn: 'span 5',
            padding: '20px 0 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <span className="eyebrow">Nossa filosofia</span>
            <h3 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '42px',
              fontWeight: 300,
              margin: '14px 0 20px',
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
            }}>
              Ciência, cuidado e <em style={{ fontStyle: 'italic', color: 'var(--bronze-deep)' }}>experiência</em> no centro de cada tratamento.
            </h3>
            <p style={{ color: 'var(--coffee)', marginBottom: '20px', lineHeight: 1.75 }}>
              A MyClinic Odonto nasceu com uma proposta: unir a técnica mais atual da odontologia
              contemporânea a um atendimento verdadeiramente humano. Cada sorriso tem uma história
              — e cada plano é desenhado para respeitá-la.
            </p>
            <p style={{ color: 'var(--coffee)', marginBottom: '20px', lineHeight: 1.75 }}>
              Nosso foco é previsibilidade. Combinamos planejamento digital, protocolos padrão-ouro
              e acompanhamento próximo para que você saiba, a cada etapa, o que esperar.
            </p>
            <div style={{ marginTop: '20px' }}>
              <a href="#especialidades" className="btn btn-ghost">Conheça as especialidades</a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats reveal" style={{
          marginTop: '80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid var(--line-strong)',
          borderBottom: '1px solid var(--line-strong)',
        }}>
          {[
            { num: '15', sup: '+', lbl: 'Anos de experiência clínica' },
            { num: '8.000', sup: '+', lbl: 'Pacientes atendidos' },
            { num: '02', sup: '', lbl: 'Unidades — Campinas & Borda da Mata' },
            { num: '04', sup: '', lbl: 'Especialidades estratégicas' },
          ].map(({ num, sup, lbl }) => (
            <div key={lbl} style={{
              padding: '40px 28px',
              borderRight: '1px solid var(--line)',
            }}>
              <div style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '68px',
                fontWeight: 300,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: 'var(--espresso)',
              }}>
                {num}{sup && <sup style={{ fontSize: '28px', verticalAlign: 'super', marginLeft: '4px' }}>{sup}</sup>}
              </div>
              <div style={{
                fontSize: '11px',
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginTop: '14px',
              }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .philosophy-grid { grid-template-columns: 1fr !important; }
          .phil-img { grid-column: 1 / -1 !important; height: 380px !important; }
          .phil-copy { grid-column: 1 / -1 !important; padding: 0 !important; }
          .stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
