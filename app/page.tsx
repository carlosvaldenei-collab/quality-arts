import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { SolutionSimulator } from '@/components/site/solution-simulator'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { Portfolio } from '@/components/site/portfolio'
import { Process } from '@/components/site/process'
import { Booking } from '@/components/site/booking'
import { Faq, FinalCta } from '@/components/site/faq'
import { Footer, WhatsAppFloat } from '@/components/site/footer'

export default function Page() {
  const bookingUrl = process.env.GOOGLE_CALENDAR_BOOKING_URL || undefined

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SolutionSimulator />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Booking bookingUrl={bookingUrl} />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
