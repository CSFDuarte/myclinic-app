import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { IMAGES, WHATSAPP_URL } from '@/lib/constants'

const serviceRows = [
  {
    title: 'Protocolo Dentario (All-on-4)',
    description: 'Reabilitacao completa para pacientes com perda total dos dentes, com carga imediata e foco em qualidade de vida.',
    image: IMAGES.placeholderB,
  },
  {
    title: 'Implantes Dentarios',
    description: 'Planejamento individual, cirurgia segura e acompanhamento continuo para garantir estabilidade e funcionalidade.',
    image: IMAGES.placeholderB,
  },
  {
    title: 'Invisalign e Estetica do Sorriso',
    description: 'Alinhadores transparentes, clareamento e solucoes esteticas para harmonizar o sorriso de forma natural.',
    image: IMAGES.placeholderB,
  },
]

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-bg">
        <section className="max-w-6xl mx-auto px-6 py-20 relative overflow-hidden">
          <Image
            src={IMAGES.ornamentTop}
            alt=""
            aria-hidden
            width={1536}
            height={1249}
            className="absolute -top-24 -right-24 w-[330px] ornament-soft"
          />
          <h1 className="section-title text-center mb-14">Nossos Servicos</h1>

          <div className="space-y-16">
            {serviceRows.map((item, index) => (
              <article
                key={item.title}
                className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <Image src={item.image} alt={item.title} width={683} height={600} className="w-full h-auto rounded-2xl" />
                <div className="bg-brand-bgLight border border-brand-border rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold text-brand-cream mb-3">{item.title}</h2>
                  <p className="text-brand-muted mb-5">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand-bgLight py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold text-brand-cream mb-8 text-center">Perguntas frequentes</h3>
            <div className="space-y-4 text-sm">
              <details className="border border-brand-border bg-brand-bg rounded-xl p-4">
                <summary className="cursor-pointer font-medium text-brand-cream">Implante dentario dura para sempre?</summary>
                <p className="text-brand-muted mt-2">
                  Com indicacao correta e manutencao periodica, os implantes podem ter longa durabilidade.
                </p>
              </details>
              <details className="border border-brand-border bg-brand-bg rounded-xl p-4">
                <summary className="cursor-pointer font-medium text-brand-cream">Como funciona a limpeza do protocolo?</summary>
                <p className="text-brand-muted mt-2">
                  A higienizacao adequada evita placa bacteriana, inflamacoes gengivais e ajuda a preservar os implantes.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="section-title mb-6">Pronto para transformar seu sorriso?</h3>
            <p className="text-brand-muted mb-8">
              Fale com a nossa equipe e receba orientacao sobre o melhor tratamento para o seu caso.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agende uma consulta
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
