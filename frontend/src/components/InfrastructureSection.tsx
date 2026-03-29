import Image from 'next/image'
import { IMAGES, WHATSAPP_URL } from '@/lib/constants'

export default function InfrastructureSection() {
  return (
    <section className="bg-brand-bgLight py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <Image src={IMAGES.placeholderB} alt="Clínica" width={683} height={600} className="w-full h-auto" />
          <Image src={IMAGES.placeholderB} alt="Clínica" width={683} height={600} className="w-full h-auto" />
          <Image src={IMAGES.placeholderB} alt="Clínica" width={683} height={600} className="w-full h-auto" />
          <Image src={IMAGES.placeholderB} alt="Clínica" width={683} height={600} className="w-full h-auto" />
        </div>

        <div>
          <h2 className="section-title mb-6">Estrutura moderna no Cambui e atendimento humanizado</h2>
          <p className="text-brand-muted font-sans text-lg leading-relaxed mb-8">
            A unidade principal fica na Rua Jose Guatemosin Nogueira, 26, no Cambui em Campinas. O espaco
            foi planejado para oferecer conforto, acolhimento e seguranca em cada etapa do tratamento.
          </p>
          <p className="text-brand-muted font-sans text-base leading-relaxed mb-8">
            Tambem atendemos em Borda da Mata, ampliando o acesso para quem busca implantes, Invisalign,
            estetica do sorriso e protocolos de carga imediata.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Quero agendar minha avaliacao
          </a>
        </div>
      </div>
    </section>
  )
}
