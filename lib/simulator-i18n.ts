import type { Locale } from '@/components/site/language-provider'
import type { SolutionId } from '@/lib/site-data'

export interface SolutionTranslation {
  label: string
  title: string
  deadline: string
  description: string
  includes: string[]
  benefits: string[]
}

export const SIMULATOR_COPY: Record<
  Locale,
  {
    eyebrow: string
    titlePrefix: string
    titleHighlight: string
    description: string
    tablistAria: string
    deadlinePrefix: string
    includesHeading: string
    benefitsHeading: string
    bookButton: string
    whatsappButton: string
    whatsappMessage: (title: string) => string
  }
> = {
  pt: {
    eyebrow: 'Simulador Interativo',
    titlePrefix: 'Descubra a ',
    titleHighlight: 'Solução Ideal',
    description:
      'Selecione o que sua empresa precisa hoje e veja na hora o que está incluso, os benefícios e o prazo médio.',
    tablistAria: 'Escolha uma solução',
    deadlinePrefix: 'Prazo médio:',
    includesHeading: 'O que está incluso',
    benefitsHeading: 'Benefícios para o negócio',
    bookButton: 'Agendar esta Solução no Calendário',
    whatsappButton: 'Falar no WhatsApp',
    whatsappMessage: (title) =>
      `Olá, Quality Arts! Tenho interesse na solução "${title}" e gostaria de mais informações.`,
  },
  en: {
    eyebrow: 'Interactive Simulator',
    titlePrefix: 'Discover the ',
    titleHighlight: 'Ideal Solution',
    description:
      'Select what your business needs today and immediately see what is included, the key benefits, and the average turnaround time.',
    tablistAria: 'Choose a solution',
    deadlinePrefix: 'Average timeline:',
    includesHeading: "What's included",
    benefitsHeading: 'Business benefits',
    bookButton: 'Schedule this Solution on Calendar',
    whatsappButton: 'Chat on WhatsApp',
    whatsappMessage: (title) =>
      `Hi, Quality Arts! I'm interested in the "${title}" solution and would like more information.`,
  },
}

export const SOLUTIONS_EN: Record<SolutionId, SolutionTranslation> = {
  site: {
    label: 'High-Performance Corporate Website',
    title: 'High-Performance Corporate Website',
    deadline: '10 to 15 business days',
    description:
      'A custom, fast, responsive institutional website engineered to convey authority, rank on Google, and turn visitors into qualified leads.',
    includes: [
      'Exclusive UI/UX design aligned with your brand identity',
      'Mobile-first responsive layout optimized for Google PageSpeed',
      'Technical on-page SEO, clean URLs, and semantic structure',
      'Direct WhatsApp integration, lead forms, and contact links',
    ],
    benefits: [
      'Stronger brand credibility and professional positioning',
      'Higher organic visibility on Google search results',
      'Fast loading speeds that reduce bounce rates on mobile',
    ],
  },
  catalogo: {
    label: 'Interactive Digital Catalog',
    title: 'Interactive Digital Catalog',
    deadline: '7 to 12 business days',
    description:
      'A modern, searchable product or service showcase where customers filter items, view specifications, and request quotes directly via WhatsApp.',
    includes: [
      'Category filters, instant search, and detailed product cards',
      'One-click WhatsApp quote/order button per product',
      'Easy catalog updates and mobile-friendly browsing',
      'Shareable direct links for social media and sales teams',
    ],
    benefits: [
      'Faster sales conversations with pre-qualified product inquiries',
      'Always up-to-date portfolio without reprinting PDFs',
      'Better customer browsing experience on smartphones',
    ],
  },
  infra: {
    label: 'Domain, Hosting & SSL Infrastructure',
    title: 'Domain, Hosting & SSL Infrastructure',
    deadline: '1 to 3 business days',
    description:
      'Complete setup, migration, and ongoing management of your domain, high-speed hosting, SSL security certificate, and professional corporate emails.',
    includes: [
      'Domain registration and DNS configuration (.com.br / .com)',
      'Managed high-availability cloud/web hosting',
      'Active HTTPS/SSL security certificate and automated backups',
      'Professional corporate email accounts setup and support',
    ],
    benefits: [
      'Zero technical headaches with DNS, renewals, or server downtime',
      'Browser security padlock that builds visitor trust',
      'Dedicated technical support whenever your team needs adjustments',
    ],
  },
  rastreamento: {
    label: 'Smart Analytics & Conversion Tracking',
    title: 'Smart Analytics & Conversion Tracking',
    deadline: '2 to 4 business days',
    description:
      'Accurate data instrumentation using Google Tag Manager, GA4, and ad pixels so you know exactly which channels and clicks generate real leads.',
    includes: [
      'Google Tag Manager (GTM) container setup and governance',
      'Google Analytics 4 (GA4) with custom conversion events',
      'WhatsApp click, form submission, and CTA button tracking',
      'Meta Pixel and Google Ads conversion tag integration',
    ],
    benefits: [
      'Clear visibility into marketing ROI and lead sources',
      'Smarter ad campaign optimization backed by real conversion data',
      'Data-driven decisions instead of guesswork',
    ],
  },
}