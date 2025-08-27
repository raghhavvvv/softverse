import Navigation from '../components/Navigation'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ServicesSection from '../components/ServicesSection'
import CoreServicesSection from '../components/CoreServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import SellersGalaxySection from '../components/SellersGalaxySection'
import InsightsSection from '../components/InsightsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CoreServicesSection />
      <TestimonialsSection />
      <SellersGalaxySection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
