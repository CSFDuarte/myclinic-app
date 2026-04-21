export default function InfrastructureSection() {
  return (
    <section id="clinica" style={{ background: 'var(--ivory-2)', padding: '140px 0' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 48px' }}>
        {/* Head */}
        <div className="spaces-head reveal" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'end',
          marginBottom: '70px',
        }}>
          <div>
            <span className="eyebrow">Nossos espaços</span>
            <h2 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(40px, 4.8vw, 72px)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
              marginTop: '20px',
            }}>
              Um ambiente pensado<br />para{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--bronze-deep)' }}>acolher</em> e cuidar.
            </h2>
          </div>
          <p style={{ color: 'var(--coffee)', maxWidth: '440px', lineHeight: 1.7 }}>
            A unidade principal, no Cambuí, foi desenhada para oferecer conforto, acolhimento e segurança
            em cada etapa — da recepção ao consultório. Também atendemos em Borda da Mata.
          </p>
        </div>

        {/* Gallery — 2 rows, sem overlap, espaçamento limpo */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Row 1 */}
          <div className="gallery-row" style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '20px' }}>
            <div className="gallery-img reveal" style={{
              height: '440px',
              backgroundImage: "url('/images/clinic-1.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              overflow: 'hidden',
            }} />
            <div className="gallery-img reveal" style={{
              height: '340px',
              alignSelf: 'end',
              backgroundImage: "url('/images/clinic-2.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 50%',
              overflow: 'hidden',
            }} />
          </div>

          {/* Row 2 */}
          <div className="gallery-row" style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '20px' }}>
            <div className="gallery-img reveal" style={{
              height: '340px',
              backgroundImage: "url('/images/clinic-3.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 60%',
              overflow: 'hidden',
            }} />
            <div className="gallery-img reveal" style={{
              height: '440px',
              alignSelf: 'end',
              backgroundImage: "url('/images/clinic-4.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              overflow: 'hidden',
            }} />
          </div>
        </div>

        {/* Locations */}
        <div className="locations" style={{
          marginTop: '90px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px',
          borderTop: '1px solid var(--line-strong)',
          paddingTop: '50px',
        }}>
          <div className="reveal">
            <div style={{ fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '10px' }}>
              — Unidade principal
            </div>
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '42px',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
            }}>
              <em style={{ fontStyle: 'italic', color: 'var(--bronze-deep)' }}>Campinas</em> · Cambuí
            </div>
            <div style={{ color: 'var(--coffee)', marginTop: '14px', maxWidth: '340px', lineHeight: 1.6 }}>
              R. José Guatemosin Nogueira, 26<br />Cambuí, Campinas — SP, 13025-120
            </div>
          </div>
          <div className="reveal">
            <div style={{ fontSize: '11px', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '10px' }}>
              — Unidade parceira
            </div>
            <div style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '42px',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
            }}>
              <em style={{ fontStyle: 'italic', color: 'var(--bronze-deep)' }}>Borda</em> da Mata
            </div>
            <div style={{ color: 'var(--coffee)', marginTop: '14px', maxWidth: '340px', lineHeight: 1.6 }}>
              Atendimento ampliado em Minas Gerais, com a mesma qualidade em implantes, Invisalign e estética.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .spaces-head { grid-template-columns: 1fr !important; }
          .locations { grid-template-columns: 1fr !important; }
          .gallery-row { grid-template-columns: 1fr !important; }
          .gallery-img { height: 280px !important; align-self: auto !important; }
        }
      `}</style>
    </section>
  )
}
