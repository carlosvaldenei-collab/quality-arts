import type { Locale } from '@/components/site/language-provider'

export interface ProcessStepEn {
  title: string
  description: string
}

export const PROCESS_COPY: Record<
  Locale,
  {
    eyebrow: string
    title: string
    description: string
    stepIndicator: (current: number, total: number) => string
    previousButton: string
    nextButton: string
  }
> = {
  pt: {
    eyebrow: 'Como Trabalhamos',
    title: 'Um processo claro, do briefing ao site no ar',
    description: 'Clique em cada etapa para ver o que acontece em cada fase do seu projeto.',
    stepIndicator: (current, total) => `Etapa ${current} de ${total}`,
    previousButton: 'Anterior',
    nextButton: 'Próxima etapa',
  },
  en: {
    eyebrow: 'How We Work',
    title: 'A clear process, from discovery to launch',
    description: 'Click each step to see what happens during every stage of your project.',
    stepIndicator: (current, total) => `Step ${current} of ${total}`,
    previousButton: 'Previous',
    nextButton: 'Next step',
  },
}

// Traduções em inglês alinhadas à ordem de PROCESS_STEPS em lib/site-data.ts.
// Caso adicione ou reordene etapas em site-data.ts, ajuste a ordem aqui também.
export const PROCESS_STEPS_EN: ProcessStepEn[] = [
  {
    title: 'Discovery & Briefing',
    description:
      'We align on your business goals, target audience, features, content needs, and schedule so the project starts with complete clarity.',
  },
  {
    title: 'Structure & UI Design',
    description:
      'We map out page hierarchy, messaging, and visual design tailored to your brand identity and mobile experience.',
  },
  {
    title: 'Development & Tracking',
    description:
      'We build fast, responsive pages with technical SEO foundations, performance optimization, and analytics/conversion tracking.',
  },
  {
    title: 'Launch & Ongoing Support',
    description:
      'After final validation and domain/DNS/SSL setup, we take your site live and remain available for updates and continuous care.',
  },
]