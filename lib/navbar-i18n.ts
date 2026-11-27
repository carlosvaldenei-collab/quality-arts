import type { Locale } from '@/components/site/language-provider'

export const NAVBAR_COPY: Record<
  Locale,
  {
    brandAria: string
    logoAlt: string
    whatsappAria: string
    whatsappMessage: string
    ctaLabel: string
    openMenu: string
    closeMenu: string
    labelsByHref: Record<string, string>
  }
> = {
  pt: {
    brandAria: 'Quality Arts Soluções Web - início',
    logoAlt: 'Quality Arts Soluções Web',
    whatsappAria: 'Falar no WhatsApp',
    whatsappMessage: 'Olá, Quality Arts! Vim pelo site e gostaria de conversar sobre um projeto.',
    ctaLabel: 'Agendar Diagnóstico',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    labelsByHref: {
      '#inicio': 'Início',
      '#solucoes': 'Soluções',
      '#sobre': 'Sobre Nós',
      '#portfolio': 'Portfólio',
      '#agendar': 'Agendar Reunião',
      '#faq': 'FAQ',
    },
  },
  en: {
    brandAria: 'Quality Arts Web Solutions - home',
    logoAlt: 'Quality Arts Web Solutions',
    whatsappAria: 'Chat on WhatsApp',
    whatsappMessage: 'Hi, Quality Arts! I found your website and would like to discuss a project.',
    ctaLabel: 'Book Diagnosis',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    labelsByHref: {
      '#inicio': 'Home',
      '#solucoes': 'Solutions',
      '#sobre': 'About Us',
      '#portfolio': 'Portfolio',
      '#agendar': 'Book a Call',
      '#faq': 'FAQ',
    },
  },
}