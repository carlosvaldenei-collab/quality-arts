import type { Locale } from '@/components/site/language-provider'

export const FOOTER_COPY: Record<
  Locale,
  {
    logoAlt: string
    description: string
    location: string
    navAria: string
    navHeading: string
    navLabelsByHref: Record<string, string>
    portfolioAria: string
    portfolioHeading: string
    connectHeading: string
    whatsappButton: string
    whatsappMessage: string
    rights: (year: number) => string
    floatAria: string
    floatMessage: string
  }
> = {
  pt: {
    logoAlt: 'Quality Arts Soluções Web',
    description:
      'Sites institucionais, catálogos digitais, infraestrutura web e rastreamento inteligente com atendimento próximo e individualizado.',
    location: 'Santa Rita do Sapucaí - MG',
    navAria: 'Navegação rápida',
    navHeading: 'Navegação',
    navLabelsByHref: {
      '#inicio': 'Início',
      '#solucoes': 'Soluções',
      '#sobre': 'Sobre Nós',
      '#portfolio': 'Portfólio',
      '#agendar': 'Agendar Reunião',
      '#faq': 'FAQ',
    },
    portfolioAria: 'Portfólio',
    portfolioHeading: 'Portfólio',
    connectHeading: 'Conecte-se',
    whatsappButton: 'Fale no WhatsApp',
    whatsappMessage: 'Olá, Quality Arts! Vim pelo site.',
    rights: (year) => `© ${year} Quality Arts Soluções Web. Todos os direitos reservados.`,
    floatAria: 'Falar com a Quality Arts no WhatsApp',
    floatMessage: 'Olá, Quality Arts! Vim pelo site e gostaria de falar com vocês.',
  },
  en: {
    logoAlt: 'Quality Arts Web Solutions',
    description:
      'High-performance corporate websites, interactive digital catalogs, full web infrastructure management, and smart analytics tracking with close, personalized support.',
    location: 'Santa Rita do Sapucaí - MG, Brazil',
    navAria: 'Quick navigation',
    navHeading: 'Navigation',
    navLabelsByHref: {
      '#inicio': 'Home',
      '#solucoes': 'Solutions',
      '#sobre': 'About Us',
      '#portfolio': 'Portfolio',
      '#agendar': 'Book a Call',
      '#faq': 'FAQ',
    },
    portfolioAria: 'Portfolio',
    portfolioHeading: 'Portfolio',
    connectHeading: 'Connect',
    whatsappButton: 'Chat on WhatsApp',
    whatsappMessage: 'Hi, Quality Arts! I found you through your website.',
    rights: (year) => `© ${year} Quality Arts Web Solutions. All rights reserved.`,
    floatAria: 'Chat with Quality Arts on WhatsApp',
    floatMessage: 'Hi, Quality Arts! I found your website and would like to talk about a project.',
  },
}