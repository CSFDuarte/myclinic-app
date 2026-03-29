import Image from 'next/image'
import { IMAGES, WHATSAPP_URL, MAPS_CAMPINAS } from '@/lib/constants'

export default function InfrastructureSection() {
  return (
    <section className="bg-brand-bg py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Galeria de fotos - mosaico */}
        <div className="grid grid-cols-2 gap-3">
          {/* Imagem grande à esquerda */}
          <div className="relative col-span-1 row-span-2 aspect-[3/4] overflow-hidden">
            <Image
              src={IMAGES.fotoClinica}
              alt="Fachada da MyClinic Odonto"
              fill
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Imagem direita topo */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={IMAGES.heroBackground}
              alt="Entrada da MyClinic Odonto"
              fill
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Imagem direita baixo */}
          <div className="relative aspect-square overflow-hidden bg-brand-bgLight flex items-center justify-center">
            <Image
              src={IMAGES.logoIcon}
              alt="Logo MyClinic"
              width={120}
              height={120}
              className="w-24 h-24 object-contain opacity-60"
            />
          </div>
        </div>

        {/* Texto */}
        <div>
          <p className="section-subtitle">Estrutura e Localização</p>
          <h2 className="section-title mb-6">
            Fale um pouco da<br />
            <span className="text-brand-roseGold">infraestrutura e localização</span>
          </h2>
          <p className="text-brand-muted font-sans text-base leading-relaxed mb-4">
            Nossa clínica está situada no coração do Cambuí, bairro nobre de Campinas — SP.
            Um ambiente moderno, acolhedor e projetado para proporcionar a melhor experiência
            durante o seu tratamento.
          </p>
          <p className="text-brand-muted font-sans text-base leading-relaxed mb-10">
            Contamos também com uma unidade em Borda da Mata para atender mais pacientes
            que buscam transformar o seu sorriso com excelência e qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar Consulta
            </a>
            <a href={MAPS_CAMPINAS} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Ver no Mapa
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
