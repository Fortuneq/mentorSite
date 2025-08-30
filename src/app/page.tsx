import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Mentor from '@/components/Mentor'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Services />
      <Benefits />
      <Mentor />
      <Pricing />
      <Testimonials />
      <CTA />
    </main>
  )
}
