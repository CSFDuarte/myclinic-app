import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicosContent from '@/components/ServicosContent'
import { IMAGES, WHATSAPP_URL } from '@/lib/constants'

interface Props {
  searchParams: { q?: string }
}

export default function ServicosPage({ searchParams }: Props) {
  const initialQuery = searchParams.q ?? ''

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
          <h1 className="section-title text-center mb-4">Nossos Serviços</h1>
          <p className="text-center text-brand-muted mb-12 max-w-md mx-auto text-sm">
            Encontre o tratamento ideal para o seu sorriso.
          </p>

          <ServicosContent initialQuery={initialQuery} />
        </section>

        <section className="bg-brand-bgLight py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold text-brand-cream mb-8 text-center">
              Perguntas frequentes
            </h3>
            <div className="space-y-4 text-sm">
              <details className="border border-brand-border bg-brand-bg rounded-xl p-4">
                <summary className="cursor-pointer font-medium text-brand-cream">
                  Implante dentário dura para sempre?
                </summary>
                <p className="text-brand-muted mt-2">
                  Com indicação correta e manutenção periódica, os implantes podem ter longa durabilidade.
                </p>
              </details>
              <details className="border border-brand-border bg-brand-bg rounded-xl p-4">
                <summary className="cursor-pointer font-medium text-brand-cream">
                  Como funciona a limpeza do protocolo?
                </summary>
                <p className="text-brand-muted mt-2">
                  A higienização adequada evita placa bacteriana, inflamações gengivais e ajuda a preservar os implantes.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="section-title mb-6">Pronto para transformar seu sorriso?</h3>
            <p className="text-brand-muted mb-8">
              Fale com a nossa equipe e receba orientação sobre o melhor tratamento para o seu caso.
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
