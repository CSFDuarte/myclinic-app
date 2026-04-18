import Image from 'next/image'
import { IMAGES, WHATSAPP_URL } from '@/lib/constants'

export default function InfrastructureSection() {
  return (
    <section className="bg-brand-bgLight py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <Image src={IMAGES.clinic1} alt="Sala de espera da clínica" width={800} height={800} className="w-full h-full aspect-square object-cover rounded-2xl" />
          <Image src={IMAGES.clinic2} alt="Consultório odontológico" width={800} height={800} className="w-full h-full aspect-square object-cover rounded-2xl" />
          <Image src={IMAGES.clinic3} alt="Ambiente interno da clínica" width={800} height={800} className="w-full h-full aspect-square object-cover rounded-2xl" />
          <Image src={IMAGES.clinic4} alt="Instrumentos odontológicos" width={800} height={800} className="w-full h-full aspect-square object-cover rounded-2xl" />
        </div>

        <div>
          <h2 className="section-title mb-6">Estrutura moderna no Cambuí e atendimento humanizado</h2>
          <p className="text-brand-muted font-sans text-lg leading-relaxed mb-8">
            A unidade principal fica na Rua José Guatemosin Nogueira, 26, no Cambuí em Campinas. O espaço
            foi planejado para oferecer conforto, acolhimento e segurança em cada etapa do tratamento.
          </p>
          <p className="text-brand-muted font-sans text-base leading-relaxed mb-8">
            Também atendemos em Borda da Mata, ampliando o acesso para quem busca implantes, Invisalign,
            estética do sorriso e protocolos de carga imediata.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Quero agendar minha avaliação
          </a>
        </div>
      </div>
    </section>
  )
}
