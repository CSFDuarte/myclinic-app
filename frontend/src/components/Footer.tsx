'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--ivory)',
      padding: '100px 0 40px',
      borderTop: '1px solid var(--line)',
    }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 48px' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '60px',
          marginBottom: '80px',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <Image src="/images/logo-main.png" alt="MyClinic Odonto" width={140} height={90} style={{ height: '90px', width: 'auto' }} />
            </div>
            <p style={{ color: 'var(--coffee)', maxWidth: '320px', fontSize: '14px', lineHeight: 1.7 }}>
              Clínica odontológica boutique em Campinas, especializada em Implantodontia, Invisalign e Estética do Sorriso.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 style={{
              fontSize: '11px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--bronze-deep)',
              marginBottom: '24px',
              fontWeight: 500,
            }}>Navegação</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { href: '#filosofia', label: 'Filosofia' },
                { href: '#equipe', label: 'Equipe' },
                { href: '#especialidades', label: 'Especialidades' },
                { href: '#clinica', label: 'Clínica' },
              ].map(({ href, label }) => (
                <li key={href} style={{ marginBottom: '12px' }}>
                  <a href={href} style={{ color: 'var(--coffee)', textDecoration: 'none', fontSize: '14px' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--bronze-deep)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--coffee)')}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h5 style={{
              fontSize: '11px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--bronze-deep)',
              marginBottom: '24px',
              fontWeight: 500,
            }}>Especialidades</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Protocolo All-on-4', 'Implantes Dentários', 'Invisalign', 'Estética do Sorriso'].map(item => (
                <li key={item} style={{ marginBottom: '12px', color: 'var(--coffee)', fontSize: '14px' }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{
              fontSize: '11px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--bronze-deep)',
              marginBottom: '24px',
              fontWeight: 500,
            }}>Contato</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'R. José Guatemosin Nogueira, 26',
                'Cambuí, Campinas — SP',
                '13025-120',
              ].map(item => (
                <li key={item} style={{ marginBottom: '12px', color: 'var(--coffee)', fontSize: '14px' }}>{item}</li>
              ))}
              <li style={{ marginTop: '14px', color: 'var(--espresso)', fontSize: '14px', fontWeight: 600 }}>
                +55 19 99938-2566
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '30px',
          borderTop: '1px solid var(--line)',
          fontSize: '12px',
          color: 'var(--muted)',
          letterSpacing: '0.1em',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>© 2026 MyClinic Odonto · CRO-SP — Todos os direitos reservados</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[
              { href: 'https://instagram.com/myclinicodonto', label: 'IG' },
              { href: 'https://facebook.com/myclinicodonto', label: 'FB' },
              { href: 'https://wa.me/5519999382566', label: 'WA' },
            ].map(({ href, label }) => (
              <a key={label} href={href} aria-label={label} style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid var(--line-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--coffee)',
                fontSize: '13px',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--espresso)'; e.currentTarget.style.color = 'var(--ivory)'; e.currentTarget.style.borderColor = 'var(--espresso)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--coffee)'; e.currentTarget.style.borderColor = 'var(--line-strong)' }}
              >{label}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
