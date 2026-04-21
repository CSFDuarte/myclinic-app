import Navbar                from '@/components/Navbar'
import HeroSection            from '@/components/HeroSection'
import MarqueeSection         from '@/components/MarqueeSection'
import AboutSection           from '@/components/AboutSection'
import AuthoritySection       from '@/components/AuthoritySection'
import ServicesSection        from '@/components/ServicesSection'
import ProcessSection         from '@/components/ProcessSection'
import InfrastructureSection  from '@/components/InfrastructureSection'
import TestimonialsSection    from '@/components/TestimonialsSection'
import CTASection             from '@/components/CTASection'
import Footer                 from '@/components/Footer'
import WhatsAppButton         from '@/components/WhatsAppButton'
import RevealScript           from '@/components/RevealScript'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <AuthoritySection />
        <ServicesSection />
        <ProcessSection />
        <InfrastructureSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <RevealScript />
    </>
  )
}
