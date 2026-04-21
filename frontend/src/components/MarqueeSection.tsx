export default function MarqueeSection() {
  const items = [
    'Protocolo All-on-4',
    'Implantes com carga imediata',
    'Invisalign Diamond',
    'Lentes de contato',
    'Clareamento a laser',
    'Reabilitação oral',
  ]
  const doubled = [...items, ...items]

  return (
    <section aria-hidden="true" style={{
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      overflow: 'hidden',
      padding: '22px 0',
      background: 'var(--ivory-2)',
    }}>
      <div className="marquee-track" style={{
        display: 'flex',
        gap: '72px',
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-cormorant)',
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: '22px',
        color: 'var(--coffee)',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '72px' }}>
            <span style={{ color: 'var(--bronze)', fontStyle: 'normal' }}>✦</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
