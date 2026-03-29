import Navbar              from '@/components/Navbar'
import HeroSection         from '@/components/HeroSection'
import AboutSection        from '@/components/AboutSection'
import AuthoritySection    from '@/components/AuthoritySection'
import InfrastructureSection from '@/components/InfrastructureSection'
import ServicesSection     from '@/components/ServicesSection'
import WhyUsSection        from '@/components/WhyUsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection          from '@/components/CTASection'
import Footer              from '@/components/Footer'
import WhatsAppButton      from '@/components/WhatsAppButton'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AuthoritySection />
        <InfrastructureSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
