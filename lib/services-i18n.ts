import type { Locale } from '@/components/site/language-provider'

export interface ServiceItemCopy {
  id: 'websites' | 'catalogs' | 'infrastructure' | 'tracking'
  title: string
  text: string
  tags: string[]
}

export const SERVICES_COPY: Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    deliverablesAria: string
    items: ServiceItemCopy[]
  }
> = {
  pt: {
    eyebrow: 'Nossas Soluções',
    title: 'Tudo o que sua empresa precisa para crescer na web',
    description:
      'Da criação do site à infraestrutura e ao rastreamento de cada conversão — uma única parceira cuidando de tudo.',
    deliverablesAria: 'Entregas',
    items: [
      {
        id: 'websites',
        title: 'Criação de Sites Institucionais',
        text: 'Design exclusivo, responsivo, ultra-rápido e otimizado para ranquear no Google.',
        tags: ['Responsivo', 'SEO', 'Alta performance'],
      },
      {
        id: 'catalogs',
        title: 'Catálogos Digitais Interativos',
        text: 'Exposição moderna de produtos e linhas comerciais para acelerar vendas B2B e B2C.',
        tags: ['B2B & B2C', 'Pedidos via WhatsApp'],
      },
      {
        id: 'infrastructure',
        title: 'Infraestrutura, Domínios e Hospedagem',
        text: 'Gestão técnica ponta a ponta: Registro.br, configuração de DNS, certificados SSL, e-mails profissionais e servidores de alta disponibilidade.',
        tags: ['Registro.br', 'DNS', 'SSL', 'E-mail'],
      },
      {
        id: 'tracking',
        title: 'Rastreamento e Inteligência de Conversão',
        text: 'Implementação de Google Tag Manager, Google Analytics, Search Console e otimização contínua de performance.',
        tags: ['GTM', 'GA4', 'Search Console'],
      },
    ],
  },
  en: {
    eyebrow: 'Our Solutions',
    title: 'Everything your business needs to grow on the web',
    description:
      'From website creation to infrastructure and conversion tracking — a single partner taking care of everything.',
    deliverablesAria: 'Deliverables',
    items: [
      {
        id: 'websites',
        title: 'Corporate Website Development',
        text: 'Exclusive, responsive, ultra-fast design engineered to rank on Google.',
        tags: ['Responsive', 'SEO', 'High Performance'],
      },
      {
        id: 'catalogs',
        title: 'Interactive Digital Catalogs',
        text: 'Modern showcase of products and commercial lines to accelerate B2B and B2C sales.',
        tags: ['B2B & B2C', 'WhatsApp Orders'],
      },
      {
        id: 'infrastructure',
        title: 'Infrastructure, Domains & Hosting',
        text: 'End-to-end technical management: domain registration, DNS setup, SSL certificates, corporate emails, and high-availability servers.',
        tags: ['Domains', 'DNS', 'SSL', 'Email'],
      },
      {
        id: 'tracking',
        title: 'Tracking & Conversion Intelligence',
        text: 'Implementation of Google Tag Manager, Google Analytics, Search Console, and continuous performance optimization.',
        tags: ['GTM', 'GA4', 'Search Console'],
      },
    ],
  },
}