import { WHATSAPP_URL } from '@/lib/constants'

const services = [
  {
    icon: '🦷',
    title: 'Protocolo All-on-4',
    description:
      'Reabilitação completa da boca com carga imediata — saia com um sorriso novo em apenas um dia. O protocolo padrão ouro que devolve qualidade de vida.',
  },
  {
    icon: '✦',
    title: 'Invisalign',
    description:
      'Alinhadores transparentes de última geração para corrigir o posicionamento dos dentes com conforto e discrição. Sem bráquetes, sem limitações.',
  },
  {
    icon: '⬡',
    title: 'Estética do Sorriso',
    description:
      'Clareamento dental, harmonização e transformação do sorriso com técnicas contemporâneas. Conquiste o sorriso dos seus sonhos.',
  },
  {
    icon: '◎',
    title: 'Implantes Dentários',
    description:
      'Implantes convencionais realizados com os melhores materiais do mercado. Durabilidade, estética e funcionalidade para toda a vida.',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-brand-bgLight py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">O que oferecemos</p>
          <h2 className="section-title">
            Conheça nossas <span className="text-brand-roseGold">especialidades</span>
          </h2>
          <p className="text-brand-muted font-sans text-sm mt-4 max-w-xl mx-auto">
            Tratamentos de alta complexidade com tecnologia e cuidado humanizado.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-brand-bg p-8 flex flex-col group hover:bg-brand-roseGold/10 transition-colors duration-300"
            >
              {/* Ícone / imagem placeholder */}
              <div className="w-full aspect-video mb-6 bg-brand-bgLight flex items-center justify-center text-4xl">
                {svc.icon}
              </div>

              <h3 className="font-serif text-xl text-brand-cream mb-3 group-hover:text-brand-roseGold transition-colors">
                {svc.title}
              </h3>
              <p className="text-brand-muted font-sans text-sm leading-relaxed mb-6 flex-1">
                {svc.description}
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center btn-primary text-xs py-2.5 px-4"
              >
                Agendar Consulta
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
