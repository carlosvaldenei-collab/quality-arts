import type { Locale } from '@/components/site/language-provider'

export interface PortfolioItemEn {
  category?: string
  segment?: string
  description?: string
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

const TERM_EN: Record<string, string> = {
  // Categorias e filtros
  todos: 'All',
  'site institucional': 'Corporate Website',
  'sites institucionais': 'Corporate Websites',
  'catálogo digital': 'Digital Catalog',
  'catalogo digital': 'Digital Catalog',
  'catálogos digitais': 'Digital Catalogs',
  'catalogos digitais': 'Digital Catalogs',
  'landing page': 'Landing Page',
  portal: 'Portal',
  'corporativo & indústria': 'Corporate & Industry',
  'corporativo & industria': 'Corporate & Industry',
  'serviços & consultoria': 'Services & Consulting',
  'servicos & consultoria': 'Services & Consulting',
  'saúde & bem-estar': 'Health & Wellness',
  'saude & bem-estar': 'Health & Wellness',
  'comércio & produtos': 'Commerce & Products',
  'comercio & produtos': 'Commerce & Products',

  // Segmentos
  contabilidade: 'Accounting',
  contábil: 'Accounting',
  contabil: 'Accounting',
  consultoria: 'Consulting',
  'consultoria estratégica': 'Strategic Consulting',
  'consultoria estrategica': 'Strategic Consulting',
  indústria: 'Industry',
  industria: 'Industry',
  serviços: 'Services',
  servicos: 'Services',
  seguros: 'Insurance',
  'corretora de seguros': 'Insurance Brokerage',
  advocacia: 'Law Firm',
  jurídico: 'Legal',
  juridico: 'Legal',
  psicologia: 'Psychology',
  saúde: 'Health',
  saude: 'Health',
  'bem-estar': 'Wellness',
  imobiliária: 'Real Estate',
  imobiliaria: 'Real Estate',
  vestuário: 'Apparel',
  vestuario: 'Apparel',
  confecção: 'Apparel Manufacturing',
  confeccao: 'Apparel Manufacturing',
  varejo: 'Retail',
  comércio: 'Commerce',
  comercio: 'Commerce',
}

function normalizeKey(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export function translateTerm(term: string, locale: Locale): string {
  if (locale === 'pt') return term
  const normalized = normalizeKey(term)
  return TERM_EN[normalized] ?? term
}

// Traduções por URL, domínio ou nome do projeto para inglês
const ITEMS_BY_KEY_EN: Record<string, PortfolioItemEn> = {
  'valoraconecta.com.br': {
    category: 'Services & Consulting',
    segment: 'Accounting',
    description:
      'Business and accounting solutions website connecting financial clarity, advisory services, and direct client contact.',
  },
  'valora conecta': {
    category: 'Services & Consulting',
    segment: 'Accounting',
    description:
      'Business and accounting solutions website connecting financial clarity, advisory services, and direct client contact.',
  },
  'bluestarconsulting.com.br': {
    category: 'Services & Consulting',
    segment: 'Consulting',
    description:
      'Strategic consulting website highlighting tailored advisory solutions, procurement/logistics expertise, and direct contact.',
  },
  'blue star consulting': {
    category: 'Services & Consulting',
    segment: 'Consulting',
    description:
      'Strategic consulting website highlighting tailored advisory solutions, procurement/logistics expertise, and direct contact.',
  },
  'alcasrs.com.br': {
    category: 'Corporate & Industry',
    segment: 'Industry',
    description:
      'Institutional presence structured with clear navigation, publications, and direct communication channels.',
  },
  alca: {
    category: 'Corporate & Industry',
    segment: 'Industry',
    description:
      'Institutional presence structured with clear navigation, publications, and direct communication channels.',
  },
  'grupoalpha.srv.br': {
    category: 'Services & Consulting',
    segment: 'Services',
    description:
      'Corporate website highlighting advisory and accounting/HR services, credibility, and direct client contact.',
  },
  'grupo alpha': {
    category: 'Services & Consulting',
    segment: 'Services',
    description:
      'Corporate website highlighting advisory and accounting/HR services, credibility, and direct client contact.',
  },
  'amocorretora.com': {
    category: 'Services & Consulting',
    segment: 'Insurance',
    description:
      'Website tailored to present personal and business insurance lines with fast, direct quote channels.',
  },
  'amo corretora': {
    category: 'Services & Consulting',
    segment: 'Insurance',
    description:
      'Website tailored to present personal and business insurance lines with fast, direct quote channels.',
  },
  'mazevedoadv.com.br': {
    category: 'Services & Consulting',
    segment: 'Legal',
    description:
      'Clean, authoritative website presenting practice areas, legal expertise, and client consultation channels.',
  },
  'giovanagomespsi.com.br': {
    category: 'Health & Wellness',
    segment: 'Psychology',
    description:
      'Welcoming, accessible web presence focused on clarity, credibility, and appointment scheduling.',
  },
  'zaninimov.com.br': {
    category: 'Commerce & Products',
    segment: 'Real Estate',
    description:
      'Property showcase structured for clear presentation, mobile browsing, and fast lead generation.',
  },
  'reimarkcamisetas.com.br': {
    category: 'Commerce & Products',
    segment: 'Apparel',
    description:
      'Digital product catalog tailored to present collections, specs, and direct sales inquiries.',
  },
}

export function getPortfolioItemEn(params: {
  url: string
  domain: string
  name: string
}): PortfolioItemEn | undefined {
  const candidates = [
    params.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
    params.domain.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
    params.name,
  ]

  for (const raw of candidates) {
    const clean = normalizeKey(raw)
    if (ITEMS_BY_KEY_EN[clean]) {
      return ITEMS_BY_KEY_EN[clean]
    }
  }
  return undefined
}