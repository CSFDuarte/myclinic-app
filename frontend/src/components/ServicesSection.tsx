const services = [
  {
    num: '01',
    label: 'Protocolo',
    title: 'Protocolo Dentário All-on-4',
    desc: 'Reabilitação completa com carga imediata — estética, mastigação e qualidade de vida de volta em um único dia.',
    img: '/images/clinic-photo.jpeg',
    pos: 'center 35%',
  },
  {
    num: '02',
    label: 'Implantes',
    title: 'Implantes Dentários',
    desc: 'Planejamento personalizado, materiais de alta qualidade e foco em longevidade.',
    img: '/images/hero-background.jpg',
    pos: 'center center',
  },
  {
    num: '03',
    label: 'Invisalign',
    title: 'Invisalign',
    desc: 'Alinhadores transparentes para corrigir o sorriso com discrição, conforto e previsibilidade.',
    img: '/images/placeholder-b.jpeg',
    pos: 'center 25%',
  },
  {
    num: '04',
    label: 'Estética',
    title: 'Estética do Sorriso',
    desc: 'Clareamento, facetas e lentes de contato para harmonizar o sorriso e elevar a autoestima.',
    img: '/images/placeholder-a.jpeg',
    pos: 'center 25%',
  },
]

export default function ServicesSection() {
  return (
    <section id="especialidades" style={{ padding: '140px 0', background: 'var(--ivory)' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 48px' }}>

        {/* Intro */}
        <div className="services-intro reveal" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'end',
          marginBottom: '72px',
        }}>
          <div>
            <span className="eyebrow">Especialidades</span>
            <h2 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(40px, 4.8vw, 72px)',
              fontWeight: 300,
              lineHeight: 1.02,
              letterSpacing: '-0.015em',
              marginTop: '20px',
            }}>
              Tratamentos pensados{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--bronze-deep)' }}>sob medida</em>{' '}
              para o seu sorriso.
            </h2>
          </div>
          <p style={{ color: 'var(--coffee)', maxWidth: '420px', lineHeight: 1.7 }}>
            Quatro especialidades que se conversam — para que o plano certo para você seja
            sempre possível, seja para reabilitar, alinhar, clarear ou redesenhar.
          </p>
        </div>

        {/* Grid 2×2 uniforme */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
        }}>
          {services.map((s) => (
            <div key={s.num} className="service-card reveal" style={{ display: 'flex', flexDirection: 'column' }}>

              {/* Imagem — proporção fixa 4:3 */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '66.66%', /* 4:3 */
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                {/* Número flutuante */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  zIndex: 2,
                  fontFamily: 'var(--font-italiana)',
                  fontSize: '13px',
                  letterSpacing: '0.22em',
                  color: 'var(--ivory)',
                  background: 'rgba(42,31,26,0.45)',
                  padding: '4px 10px',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                }}>
                  {s.num} / {s.label}
                </div>

                {/* Imagem */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('${s.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: s.pos,
                  transition: 'transform 0.6s ease',
                }} className="service-img" />

                {/* Overlay hover */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 45%, rgba(42,31,26,0.55) 100%)',
                }} />
              </div>

              {/* Texto */}
              <div style={{
                borderBottom: '1px solid var(--line)',
                padding: '20px 0 10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '12px',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '26px',
                  fontWeight: 400,
                  lineHeight: 1.15,
                }}>{s.title}</h3>
                <span style={{ fontSize: '18px', color: 'var(--bronze-deep)', flexShrink: 0 }}>→</span>
              </div>
              <p style={{
                color: 'var(--muted)',
                fontSize: '14px',
                marginTop: '12px',
                lineHeight: 1.65,
              }}>{s.desc}</p>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover .service-img {
          transform: scale(1.04);
        }
        @media (max-width: 720px) {
          .service-card { grid-column: 1 / -1 !important; }
          .services-intro { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .services-intro { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
