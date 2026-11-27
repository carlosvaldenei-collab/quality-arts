import type { Locale } from '@/components/site/language-provider'

export interface PortfolioItemEn {
  category: string
  segment: string
  description: string
}

export const PORTFOLIO_COPY: Record<
  Locale,
  {
    eyebrow: string
    titlePrefix: string
    titleHighlight: string
    description: string
    filterGroupAria: string
    allLabel: string
    screenshotAlt: (name: string) => string
    visitButton: string
    visitSrOnly: (name: string) => string
  }
> = {
  pt: {
    eyebrow: 'Portfólio',
    titlePrefix: 'Empresas que confiam na ',
    titleHighlight: 'Quality Arts',
    description: 'Projetos reais, no ar e gerando resultados para negócios de diferentes segmentos.',
    filterGroupAria: 'Filtrar portfólio por categoria',
    allLabel: 'Todos',
    screenshotAlt: (name) => `Captura de tela da página inicial do site ${name}`,
    visitButton: 'Visitar Site',
    visitSrOnly: (name) => `de ${name} (abre em nova aba)`,
  },
  en: {
    eyebrow: 'Portfolio',
    titlePrefix: 'Companies that trust ',
    titleHighlight: 'Quality Arts',
    description: 'Live, real-world projects generating measurable results across different industries.',
    filterGroupAria: 'Filter portfolio by category',
    allLabel: 'All',
    screenshotAlt: (name) => `Homepage screenshot of ${name}`,
    visitButton: 'Visit Website',
    visitSrOnly: (name) => `for ${name} (opens in a new tab)`,
  },
}

const CATEGORY_EN: Record<string, string> = {
  Todos: 'All',
  'Site Institucional': 'Corporate Website',
  'Sites Institucionais': 'Corporate Websites',
  'Catálogo Digital': 'Digital Catalog',
  'Catálogos Digitais': 'Digital Catalogs',
  'Landing Page': 'Landing Page',
  Portal: 'Portal',
}

export function translateCategory(category: string, locale: Locale): string {
  if (locale === 'pt') return category
  return CATEGORY_EN[category] ?? category
}

// Mapeia a URL de cada projeto em PORTFOLIO para sua tradução em inglês.
// Caso adicione um novo projeto em site-data.ts, basta incluir a URL dele aqui.
export const PORTFOLIO_ITEMS_EN: Record<string, PortfolioItemEn> = {
  'https://www.amocorretora.com': {
    category: 'Corporate Website',
    segment: 'Insurance Brokerage',
    description:
      'Institutional presence designed to communicate trust, insurance lines, and direct contact channels.',
  },
  'https://www.mazevedoadv.com.br': {
    category: 'Corporate Website',
    segment: 'Law Firm',
    description:
      'Clean, authoritative website presenting practice areas, legal expertise, and client consultation channels.',
  },
  'https://www.giovanagomespsi.com.br': {
    category: 'Corporate Website',
    segment: 'Psychology & Care',
    description:
      'Welcoming, accessible web presence focused on clarity, credibility, and appointment scheduling.',
  },
  'https://www.grupoalpha.srv.br': {
    category: 'Corporate Website',
    segment: 'Corporate & Advisory',
    description:
      'Structured corporate website highlighting service divisions, operational credibility, and direct inquiries.',
  },
  'https://www.zaninimov.com.br': {
    category: 'Digital Catalog',
    segment: 'Real Estate',
    description:
      'Property showcase structured for clear presentation, mobile browsing, and fast lead generation.',
  },
  'https://www.reimarkcamisetas.com.br': {
    category: 'Digital Catalog',
    segment: 'Apparel & Manufacturing',
    description:
      'Digital product catalog tailored to present collections, specs, and direct sales inquiries.',
  },
  'https://www.alcasrs.com.br': {
    category: 'Corporate Website',
    segment: 'Regional Business',
    description:
      'Fast, responsive website built to strengthen local visibility and streamline customer contact.',
  },
}