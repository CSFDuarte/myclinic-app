import { WHATSAPP_URL } from '@/lib/constants'

export default function CTASection() {
  return (
    <section className="bg-brand-bg py-24 px-6 relative overflow-hidden">
      {/* Linha decorativa horizontal */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-brand-roseGold/10" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <p className="section-subtitle">Dê o primeiro passo</p>
        <h2 className="section-title mb-6">
          Conquiste seu sorriso<br />
          <span className="text-brand-roseGold">dos sonhos</span>
        </h2>
        <p className="text-brand-muted font-sans text-base leading-relaxed mb-10">
          É cuidado, transformação e o reencontro com a sua melhor versão.
          Essa é a experiência que a MyClinic proporciona. Venha nos conhecer e
          descubra como é ter um Protocolo padrão ouro.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base px-12 py-4"
        >
          Agende uma Consulta
        </a>
      </div>
    </section>
  )
}
