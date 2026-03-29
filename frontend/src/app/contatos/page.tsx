import Image from 'next/image'
import { MapPin, Phone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  IMAGES,
  ADDRESS_CAMPINAS,
  ADDRESS_CITY,
  ADDRESS_STATE,
  MAPS_CAMPINAS,
  WHATSAPP_URL,
} from '@/lib/constants'

export default function ContatosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-brand-bg">
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
          <Image
            src={IMAGES.ornamentCircle}
            alt=""
            aria-hidden
            width={300}
            height={289}
            className="absolute right-8 top-8 w-24 ornament-soft"
          />
          <div>
            <h1 className="section-title mb-6">Fale com a MyClinic Odonto</h1>
            <p className="text-brand-muted text-lg">
              Agende pelo WhatsApp e descubra o tratamento ideal para transformar seu sorriso com seguranca.
            </p>
          </div>
          <Image src={IMAGES.placeholderB} alt="Contact" width={683} height={600} className="w-full h-auto rounded-2xl" />
        </section>

        <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-video bg-brand-bgLight border border-brand-border rounded-2xl overflow-hidden">
            <iframe
              title="Mapa da clínica"
              src="https://maps.google.com/maps?q=R.+José+Guatemosin+Nogueira,+26,+Cambuí,+Campinas,+SP&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="bg-brand-bgLight border border-brand-border rounded-2xl p-6">
            <h2 className="section-title text-4xl mb-5">Visite nossa unidade</h2>
            <ul className="space-y-4 text-brand-muted">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="mt-0.5 text-brand-rose" />
                <span>
                  {ADDRESS_CAMPINAS}
                  <br />
                  {ADDRESS_CITY}
                  <br />
                  {ADDRESS_STATE}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-brand-rose" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cream">
                  +55 19 99938-2566
                </a>
              </li>
            </ul>
            <a href={MAPS_CAMPINAS} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6 inline-block">
              Ver no mapa
            </a>
            <p className="text-brand-muted text-sm mt-5">
              Atendimento tambem disponivel em Borda da Mata.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
