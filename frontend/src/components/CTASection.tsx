export default function CTASection() {
  return (
    <section style={{
      background: 'var(--espresso)',
      color: 'var(--ivory)',
      padding: '160px 0',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(184,135,106,0.18), transparent 60%)',
        pointerEvents: 'none',
      }} />
      {/* Ornament circle */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '100%',
        backgroundImage: "url('/images/ornament-circle.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '400px',
        opacity: 0.08,
        pointerEvents: 'none',
      }} />

      <div className="reveal" style={{ position: 'relative', zIndex: 1, maxWidth: '820px', margin: '0 auto', padding: '0 24px' }}>
        <span style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--rose-gold)',
        }}>Sua próxima etapa</span>

        <h2 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(44px, 5.5vw, 84px)',
          fontWeight: 300,
          margin: '24px 0 28px',
          lineHeight: 1.05,
          letterSpacing: '-0.015em',
        }}>
          Conquiste o{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--rose-gold)' }}>sorriso dos seus sonhos</em>{' '}
          com um protocolo padrão-ouro.
        </h2>

        <p style={{
          color: 'rgba(250,246,241,0.78)',
          fontSize: '18px',
          lineHeight: 1.7,
          marginBottom: '44px',
          maxWidth: '620px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          É cuidado, transformação e reencontro com a sua melhor versão. Agende sua avaliação e
          descubra como transformar o seu sorriso com segurança e previsibilidade.
        </p>

        <a href="https://wa.me/5519999382566" className="btn btn-gold" style={{ padding: '18px 36px' }}>
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
