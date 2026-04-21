export default function HeroSection() {
  return (
    <header style={{ position: 'relative', padding: '80px 0 100px', overflow: 'hidden', background: 'var(--ivory)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 48px' }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* Left: copy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
              <span style={{ width: '48px', height: '1px', background: 'var(--bronze)', display: 'block' }}></span>
              <span className="eyebrow">Clínica boutique · Cambuí · Campinas</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(46px, 6.2vw, 98px)',
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: '-0.015em',
              marginBottom: '28px',
            }}>
              Odontologia<br />
              <em style={{ fontStyle: 'italic', color: 'var(--bronze-deep)' }}>estética</em> &amp;<br />
              <span style={{ fontFamily: 'var(--font-italiana)' }}>contemporânea.</span>
            </h1>

            <p style={{
              fontSize: '17px',
              color: 'var(--coffee)',
              maxWidth: '460px',
              marginBottom: '40px',
              lineHeight: 1.65,
            }}>
              Implantes, Invisalign e Estética do Sorriso com planejamento personalizado,
              tecnologia digital e um atendimento feito à mão — pensado para cada história.
            </p>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/5519999382566" className="btn btn-gold">Agende sua avaliação</a>
              <a href="#especialidades" className="btn btn-ghost">Nossas especialidades</a>
            </div>
          </div>

          {/* Right: visual */}
          <div className="hero-visual" style={{ position: 'relative', height: '640px' }}>
            {/* Ornament top-right */}
            <div style={{
              position: 'absolute',
              right: '-60px',
              top: '-40px',
              width: '220px',
              height: '220px',
              backgroundImage: "url('/images/ornament-top.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.55,
              transform: 'rotate(180deg)',
              pointerEvents: 'none',
            }} />
            {/* Ornament bottom-left */}
            <div style={{
              position: 'absolute',
              left: '-60px',
              bottom: '-40px',
              width: '220px',
              height: '220px',
              backgroundImage: "url('/images/ornament-top.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.55,
              pointerEvents: 'none',
            }} />

            {/* Main image */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: "url('/images/smile-woman.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 18%',
              filter: 'saturate(0.92)',
            }} />

            {/* Frame overlay */}
            <div style={{
              position: 'absolute',
              inset: '20px',
              border: '1px solid rgba(255,255,255,0.55)',
              pointerEvents: 'none',
            }} />

            {/* Floating tag */}
            <div style={{
              position: 'absolute',
              left: '-40px',
              top: '40px',
              background: 'var(--ivory)',
              padding: '18px 26px',
              border: '1px solid var(--line)',
              maxWidth: '240px',
              boxShadow: '0 30px 60px -30px rgba(42,31,26,0.25)',
            }}>
              <div style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '48px',
                fontWeight: 300,
                lineHeight: 1,
                color: 'var(--bronze-deep)',
              }}>
                15<span style={{ fontSize: '24px', verticalAlign: 'super' }}>+</span>
              </div>
              <div style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginTop: '8px',
                lineHeight: 1.5,
              }}>
                Anos transformando sorrisos em Campinas
              </div>
            </div>
          </div>
        </div>

        {/* Bottom meta bar */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
          fontSize: '11px',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginTop: '60px',
          paddingTop: '30px',
          borderTop: '1px solid var(--line)',
          flexWrap: 'wrap',
        }}>
          <span>✦ Dr. Adnan Freitas</span>
          <span style={{ width: '6px', height: '6px', background: 'var(--bronze)', borderRadius: '50%', display: 'inline-block' }}></span>
          <span>Dra. Polyana Cantuária</span>
          <span style={{ width: '6px', height: '6px', background: 'var(--bronze)', borderRadius: '50%', display: 'inline-block' }}></span>
          <span>Implantodontia · Invisalign · Estética</span>
          <span style={{ width: '6px', height: '6px', background: 'var(--bronze)', borderRadius: '50%', display: 'inline-block' }}></span>
          <span>CRO-SP</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { height: 460px !important; }
        }
      `}</style>
    </header>
  )
}
