const doctors = [
  {
    initial: 'A',
    name: 'Dr. Adnan de Sousa Freitas',
    handle: '@dr_adnanfreitas',
    bio: 'Co-fundador da MyClinic Odonto. Atua em transformações de sorriso e reabilitação oral, com presença constante em casos clínicos complexos e acompanhamento individual de cada paciente.',
    creds: ['Implantodontia', 'Reabilitação', 'All-on-4'],
    badge: 'Dr. Adnan · CRO-SP',
  },
  {
    initial: 'P',
    name: 'Dra. Polyana Cantuária',
    handle: '@dra.polyanacantuaria',
    bio: 'Co-fundadora da MyClinic Odonto. Foco em orientação educativa e protocolos atuais de estética dental e ortodontia, com produção de conteúdo sobre durabilidade e cuidado com implantes.',
    creds: ['Estética', 'Ortodontia', 'Invisalign'],
    badge: 'Dra. Polyana · CRO-SP',
  },
]

export default function AuthoritySection() {
  return (
    <section id="equipe" style={{
      background: 'var(--espresso)',
      color: 'var(--ivory)',
      padding: '140px 0',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 48px' }}>
        {/* Section intro */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 90px' }}>
          <span style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--rose-gold)',
          }}>Nossos fundadores</span>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(36px, 4.4vw, 64px)',
            fontWeight: 300,
            margin: '20px 0 24px',
            lineHeight: 1.02,
            letterSpacing: '-0.015em',
          }}>
            Mãos que cuidam,<br />
            <em style={{ fontStyle: 'italic', color: 'var(--rose-gold)' }}>ciência que transforma.</em>
          </h2>
          <p style={{ color: 'rgba(250,246,241,0.78)', fontSize: '17px', lineHeight: 1.7 }}>
            Uma equipe de especialistas dedicada a cada caso — da primeira conversa à manutenção de longo prazo.
          </p>
        </div>

        {/* Doctors grid */}
        <div className="docs-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
        }}>
          {doctors.map((doc) => (
            <div key={doc.name} className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr',
              gap: '32px',
              alignItems: 'start',
              paddingBottom: '40px',
              borderBottom: '1px solid rgba(212,167,138,0.18)',
            }}>
              {/* Portrait placeholder */}
              <div style={{
                width: '180px',
                height: '220px',
                background: 'linear-gradient(160deg, #3d2d24, #2a1f1a)',
                border: '1px solid rgba(212,167,138,0.3)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'repeating-linear-gradient(45deg, transparent 0 8px, rgba(212,167,138,0.06) 8px 9px)',
                }} />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-italiana)',
                  fontSize: '72px',
                  color: 'var(--rose-gold)',
                  letterSpacing: '0.05em',
                }}>{doc.initial}</div>
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  right: '10px',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(212,167,138,0.7)',
                  textAlign: 'center',
                }}>{doc.badge}</div>
              </div>

              {/* Info */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '32px',
                  fontWeight: 300,
                  marginBottom: '6px',
                  color: 'var(--ivory)',
                }}>{doc.name}</h3>
                <div style={{
                  color: 'var(--rose-gold)',
                  fontSize: '18px',
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic',
                  letterSpacing: '0.08em',
                  marginBottom: '16px',
                }}>{doc.handle}</div>
                <p style={{ color: 'rgba(250,246,241,0.72)', fontSize: '15px', lineHeight: 1.7, marginBottom: '18px' }}>
                  {doc.bio}
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {doc.creds.map(c => (
                    <span key={c} style={{
                      fontSize: '10px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--rose-gold)',
                      padding: '6px 12px',
                      border: '1px solid rgba(212,167,138,0.3)',
                    }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .docs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
