'use client'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
      <div style={{
        background: 'var(--espresso)',
        color: 'var(--ivory-2)',
        fontSize: '12px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '10px 20px',
        fontWeight: 300,
      }}>
        Campinas <span style={{ color: 'var(--rose-gold)', margin: '0 10px' }}>✦</span> Cambuí{' '}
        <span style={{ color: 'var(--rose-gold)', margin: '0 10px' }}>✦</span> Odontologia estética e contemporânea desde 2011
      </div>

      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250, 246, 241, 0.86)',
        backdropFilter: 'saturate(140%) blur(14px)',
        WebkitBackdropFilter: 'saturate(140%) blur(14px)',
        borderBottom: '1px solid var(--line)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          padding: '18px 48px',
          gap: '32px',
          maxWidth: '1360px',
          margin: '0 auto',
        }}>
          <div className="nav-links-desktop" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            {[
              { href: '#filosofia', label: 'Filosofia' },
              { href: '#equipe', label: 'Equipe' },
              { href: '#especialidades', label: 'Especialidades' },
              { href: '#clinica', label: 'Clínica' },
            ].map(({ href, label }) => (
              <a key={href} href={href} style={{
                color: 'var(--coffee)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.08em',
                padding: '6px 0',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze-deep)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--coffee)')}
              >{label}</a>
            ))}
          </div>

          <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            <Image src="/images/logo-main.png" alt="MyClinic Odonto" width={140} height={42} style={{ height: '42px', width: 'auto' }} />
          </a>

          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px' }}>
            <div className="nav-phone-desktop" style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em' }}>
              +55 19 <strong style={{ color: 'var(--espresso)', fontWeight: 500 }}>99938-2566</strong>
            </div>
            <a href="#agendar" data-scheduling-open className="btn btn-primary" style={{ fontSize: '11px', padding: '12px 20px' }}>
              Agendar
            </a>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-phone-desktop { display: none !important; }
        }
      `}</style>
    </>
  )
}
