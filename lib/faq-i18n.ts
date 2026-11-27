import type { Locale } from '@/components/site/language-provider'

export interface FaqItemEn {
  q: string
  a: string
}

export const FAQ_COPY: Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    finalCta: {
      title: string
      description: string
      primaryButton: string
      secondaryButton: string
      whatsappMessage: string
    }
  }
> = {
  pt: {
    eyebrow: 'FAQ',
    title: 'Perguntas frequentes',
    description: 'Tire suas dúvidas sobre prazos, domínios, hospedagem, SEO e suporte.',
    finalCta: {
      title: 'Pronto para levar sua empresa a outro nível na web?',
      description:
        'Agende uma conversa gratuita de 30 minutos e descubra como podemos transformar sua presença digital em resultados reais.',
      primaryButton: 'Agendar Diagnóstico Gratuito',
      secondaryButton: 'Chamar no WhatsApp',
      whatsappMessage: 'Olá, Quality Arts! Quero levar minha empresa a outro nível na web.',
    },
  },
  en: {
    eyebrow: 'FAQ',
    title: 'Frequently Asked Questions',
    description: 'Get answers about timelines, domains, hosting, SEO, and ongoing support.',
    finalCta: {
      title: 'Ready to take your business to the next level on the web?',
      description:
        'Book a free 30-minute conversation and discover how we can turn your digital presence into real results.',
      primaryButton: 'Book Free Discovery Call',
      secondaryButton: 'Message on WhatsApp',
      whatsappMessage: 'Hi, Quality Arts! I want to take my business to the next level on the web.',
    },
  },
}

// Traduções em inglês alinhadas à ordem de FAQ_ITEMS em lib/site-data.ts.
// Se você adicionar ou reordenar perguntas em site-data.ts, ajuste a ordem aqui também.
export const FAQ_ITEMS_EN: FaqItemEn[] = [
  {
    q: 'How long does it take to build a website or digital catalog?',
    a: 'Timelines depend on project scope and how quickly content and assets are approved. In general, digital catalogs take around 7 to 12 business days, and corporate websites take 10 to 15 business days.',
  },
  {
    q: 'Do you handle domain registration, hosting, and SSL?',
    a: 'Yes. We manage the technical side end-to-end—including domain setup and DNS configuration, high-availability hosting, SSL certificates, and corporate email configuration.',
  },
  {
    q: 'Does the website include SEO and analytics tracking?',
    a: 'Yes. Every project is built with semantic structure, responsive layouts, fast loading performance, and technical SEO foundations, with support for Google Tag Manager, GA4, and Search Console.',
  },
  {
    q: 'What happens after the website goes live?',
    a: 'We provide ongoing support, monitoring, and continuous improvements so your site stays fast, secure, and aligned with your business growth.',
  },
  {
    q: 'How do we get started?',
    a: 'Just book a 30-minute online discovery call or message us on WhatsApp. We review your current presence, clarify your goals, and recommend the best next step.',
  },
]