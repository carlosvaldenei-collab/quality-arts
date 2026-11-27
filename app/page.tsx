import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
// app/page.tsx
import { Hero } from '@/components/site/hero';
import { Services } from '@/components/site/services';
import { Portfolio } from '@/components/site/portfolio';
// ... outras importações ...

// Adiciona esta linha aqui:
import { PageSpeedProof } from '@/components/site/pagespeed-proof';

// ... Resto do ficheiro ...
import { SolutionSimulator } from '@/components/site/solution-simulator'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { Portfolio } from '@/components/site/portfolio'
// app/page.tsx
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Portfolio />

      {/* Cola o componente aqui, entre o portfólio e o footer/cta */}
      <PageSpeedProof />

      <ContactForm /> {/* Ou componente de agendamento */}
      <Footer />
    </main>
  );
}
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
