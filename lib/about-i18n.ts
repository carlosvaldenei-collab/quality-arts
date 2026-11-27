import type { Locale } from '@/components/site/language-provider'

export interface DifferentialCopy {
  id: 'individual' | 'flexible' | 'partnership'
  title: string
  text: string
}

export const ABOUT_COPY: Record<
  Locale,
  {
    logoAlt: string
    locationBadge: string
    eyebrow: string
    titlePrefix: string
    titleHighlight: string
    paragraphs: [string, string]
    differentials: DifferentialCopy[]
  }
> = {
  pt: {
    logoAlt: 'Logomarca vertical Quality Arts Soluções Web',
    locationBadge: 'Santa Rita do Sapucaí - MG',
    eyebrow: 'Nossa Essência',
    titlePrefix: 'Nosso Foco é Você e o ',
    titleHighlight: 'Seu Sucesso na Web.',
    paragraphs: [
      'Acreditamos que desenvolver relacionamentos pessoais com nossos clientes é crucial para criar uma solução adequada através dos nossos serviços de comunicação. Orgulhamo-nos da nossa capacidade de oferecer a atenção individual que merecem. Quanto mais conhecemos sobre você e sua empresa, melhor podemos ajudá-lo a atingir seus objetivos.',
      'Na Quality Arts nosso foco está em você: nossa equipe adora o que faz e prospera aprendendo mais sobre seus negócios, atividades e necessidades na WEB para liderar sua empresa rumo ao sucesso sólido.',
    ],
    differentials: [
      {
        id: 'individual',
        title: 'Atendimento Individualizado',
        text: 'Você fala direto com quem desenvolve. Conhecemos sua empresa a fundo para criar a solução certa.',
      },
      {
        id: 'flexible',
        title: 'Soluções Flexíveis Sob Medida',
        text: 'Nada de pacotes engessados: cada projeto é desenhado conforme o momento e o orçamento do seu negócio.',
      },
      {
        id: 'partnership',
        title: 'Parceria e Suporte Contínuo',
        text: 'Seguimos juntos depois da entrega, com suporte, monitoramento e evolução constante da sua presença web.',
      },
    ],
  },
  en: {
    logoAlt: 'Vertical logo for Quality Arts Web Solutions',
    locationBadge: 'Santa Rita do Sapucaí - MG, Brazil',
    eyebrow: 'Our Core',
    titlePrefix: 'Our Focus is You and ',
    titleHighlight: 'Your Success on the Web.',
    paragraphs: [
      'We believe that building personal relationships with our clients is essential to crafting the right solution through our digital and communication services. We take pride in offering the individual attention you deserve—the more we understand your company and goals, the better we can help you achieve them.',
      'At Quality Arts, our focus is on you: we love what we do and thrive on learning about your business, operations, and web needs to guide your company toward lasting, measurable growth.',
    ],
    differentials: [
      {
        id: 'individual',
        title: 'Personalized Attention',
        text: 'You speak directly with the builder. We get to know your business inside out to craft the right solution.',
      },
      {
        id: 'flexible',
        title: 'Flexible Tailored Solutions',
        text: 'No rigid packages: every project is scoped around your business stage, priorities, and budget.',
      },
      {
        id: 'partnership',
        title: 'Ongoing Partnership & Support',
        text: 'We stay alongside you after launch with reliable support, monitoring, and continuous web evolution.',
      },
    ],
  },
}