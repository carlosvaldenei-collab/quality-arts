import type { Locale } from '@/components/site/language-provider'

export type MetricId = 'performance' | 'accessibility' | 'best-practices' | 'seo'

export const PAGESPEED_COPY: Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    reportLink: string
    mobileHeading: string
    desktopHeading: string
    agenticBadge: string
    metrics: Record<MetricId, string>
    footnote: string
  }
> = {
  pt: {
    eyebrow: 'Auditoria Técnica Oficial • Google PageSpeed Insights',
    title: 'Velocidade e SEO comprovados em laboratório',
    description:
      'Não prometemos apenas, nós provamos. O próprio Google valida a performance, acessibilidade e SEO do nosso site.',
    reportLink: 'Ver relatório completo no PageSpeed',
    mobileHeading: 'Dispositivos Móveis (Celular)',
    desktopHeading: 'Computador (Desktop)',
    agenticBadge: 'Navegação Agêntica: 2/2',
    metrics: {
      performance: 'Desempenho',
      accessibility: 'Acessibilidade',
      'best-practices': 'Práticas recomendadas',
      seo: 'SEO',
    },
    footnote: 'Resultados baseados na auditoria realizada para a URL principal em 27/11/2026.',
  },
  en: {
    eyebrow: 'Official Technical Audit • Google PageSpeed Insights',
    title: 'Lab-proven speed and technical SEO',
    description:
      "We don't just promise it—we prove it. Google itself validates the performance, accessibility, and SEO of our website.",
    reportLink: 'View full report on PageSpeed',
    mobileHeading: 'Mobile Devices',
    desktopHeading: 'Desktop',
    agenticBadge: 'Agentic Browsing: 2/2',
    metrics: {
      performance: 'Performance',
      accessibility: 'Accessibility',
      'best-practices': 'Best Practices',
      seo: 'SEO',
    },
    footnote: 'Results based on the official audit performed for the main URL on Nov 27, 2026.',
  },
}