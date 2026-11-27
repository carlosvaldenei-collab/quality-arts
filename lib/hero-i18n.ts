import type { Locale } from '@/components/site/language-provider'

export const HERO_COPY: Record<
  Locale,
  {
    badge: string
    titlePrefix: string
    titleHighlight: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    metrics: {
      performance: string
      liveClients: string
      responsive: string
    }
    dashboard: {
      ariaLabel: string
      domainPreview: string
      visitsLabel: string
      seoPill: string
      analyticsPill: string
      speedLabel: string
      sslBadge: string
      conversionsLabel: string
    }
  }
> = {
  pt: {
    badge: 'Agência Digital em Santa Rita do Sapucaí - MG',
    titlePrefix: 'Transformamos a presença digital da sua empresa em ',
    titleHighlight: 'resultados sólidos e mensuráveis.',
    subtitle:
      'Criação de sites institucionais de alta performance, catálogos digitais interativos, gestão completa de infraestrutura web e rastreamento inteligente com atendimento próximo e individualizado.',
    primaryCta: 'Agendar Reunião Online',
    secondaryCta: 'Explorar Portfólio',
    metrics: {
      performance: 'Performance',
      liveClients: 'Clientes no ar',
      responsive: 'Responsivo',
    },
    dashboard: {
      ariaLabel: 'Painel ilustrativo de métricas de performance',
      domainPreview: 'https://suaempresa.com.br',
      visitsLabel: 'Visitas este mês',
      seoPill: 'SEO Otimizado',
      analyticsPill: 'GA4 + Tag Manager',
      speedLabel: 'Velocidade',
      sslBadge: 'SSL Ativo',
      conversionsLabel: 'Conversões Rastreadas',
    },
  },
  en: {
    badge: 'Digital Agency in Santa Rita do Sapucaí - MG, Brazil',
    titlePrefix: "We turn your company's digital presence into ",
    titleHighlight: 'solid, measurable results.',
    subtitle:
      'High-performance corporate websites, interactive digital catalogs, full web infrastructure management, and smart analytics tracking with close, personalized support.',
    primaryCta: 'Book an Online Meeting',
    secondaryCta: 'Explore Portfolio',
    metrics: {
      performance: 'Performance',
      liveClients: 'Live Clients',
      responsive: 'Responsive',
    },
    dashboard: {
      ariaLabel: 'Illustrative performance metrics dashboard',
      domainPreview: 'https://yourcompany.com',
      visitsLabel: 'Visits this month',
      seoPill: 'Optimized SEO',
      analyticsPill: 'GA4 + Tag Manager',
      speedLabel: 'Speed',
      sslBadge: 'SSL Active',
      conversionsLabel: 'Tracked Conversions',
    },
  },
}