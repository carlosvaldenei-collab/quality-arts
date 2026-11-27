export const WHATSAPP_NUMBER = '5535999503338'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#agendar', label: 'Agendar Reunião' },
  { href: '#faq', label: 'FAQ' },
] as const

export type SolutionId = 'site' | 'catalogo' | 'infra' | 'rastreamento'

export type Solution = {
  id: SolutionId
  label: string
  short: string
  title: string
  description: string
  includes: string[]
  benefits: string[]
  deadline: string
  meetingType: MeetingType
  accent: string
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'site',
    label: 'Site Institucional / Landing Page',
    short: 'Sites',
    title: 'Site Institucional & Landing Page',
    description:
      'Design exclusivo, responsivo, ultra-rápido e otimizado para ranquear no Google e converter visitantes em clientes.',
    includes: [
      'Layout exclusivo alinhado à sua marca',
      'Versão 100% responsiva (mobile, tablet e desktop)',
      'SEO técnico on-page e metatags',
      'Formulários e integração com WhatsApp',
      'Painel para atualização de conteúdo',
    ],
    benefits: [
      'Mais credibilidade e autoridade para a marca',
      'Geração de contatos qualificados 24h por dia',
      'Pontuação alta de performance no Google',
    ],
    deadline: '15 a 30 dias',
    meetingType: 'novo-site',
    accent: 'from-electric to-turquoise',
  },
  {
    id: 'catalogo',
    label: 'Catálogo Digital Interativo',
    short: 'Catálogos',
    title: 'Catálogo Digital Interativo',
    description:
      'Exposição moderna de produtos e linhas comerciais para acelerar vendas B2B e B2C, com pedidos direto no WhatsApp.',
    includes: [
      'Vitrine de produtos com filtros e busca',
      'Fichas técnicas, variações e galerias',
      'Botão de orçamento/pedido via WhatsApp',
      'Gestão simples de produtos e categorias',
      'Compartilhamento por link e QR Code',
    ],
    benefits: [
      'Representantes e clientes sempre com o catálogo atualizado',
      'Fim dos PDFs pesados e desatualizados',
      'Ciclo de venda mais curto e organizado',
    ],
    deadline: '20 a 40 dias',
    meetingType: 'catalogo',
    accent: 'from-indigo-brand to-electric',
  },
  {
    id: 'infra',
    label: 'Domínios, Hospedagem e SSL',
    short: 'Infraestrutura',
    title: 'Domínios, Hospedagem e SSL',
    description:
      'Gestão técnica ponta a ponta: Registro.br, configuração de DNS, certificados SSL, e-mails profissionais e servidores de alta disponibilidade.',
    includes: [
      'Registro e renovação de domínios (.com.br / .com)',
      'Configuração completa de DNS',
      'Certificado SSL (cadeado de segurança)',
      'E-mails profissionais com o seu domínio',
      'Hospedagem rápida com monitoramento',
    ],
    benefits: [
      'Zero dor de cabeça com questões técnicas',
      'Site seguro e sempre no ar',
      'Comunicação profissional com @suaempresa',
    ],
    deadline: '1 a 5 dias',
    meetingType: 'infraestrutura',
    accent: 'from-royal to-electric',
  },
  {
    id: 'rastreamento',
    label: 'Rastreamento e SEO',
    short: 'Rastreamento',
    title: 'Rastreamento e SEO (Tag Manager & Analytics)',
    description:
      'Implementação de Google Tag Manager, Google Analytics, Search Console e otimização contínua para decisões guiadas por dados.',
    includes: [
      'Configuração do Google Tag Manager',
      'Google Analytics 4 com eventos de conversão',
      'Google Search Console e sitemap',
      'Rastreamento de cliques no WhatsApp e formulários',
      'Relatórios de performance e melhorias',
    ],
    benefits: [
      'Saiba exatamente de onde vêm seus clientes',
      'Investimento em anúncios com mais retorno',
      'Melhor posicionamento orgânico no Google',
    ],
    deadline: '5 a 10 dias',
    meetingType: 'consultoria',
    accent: 'from-turquoise to-indigo-brand',
  },
]

export type MeetingType = 'novo-site' | 'catalogo' | 'infraestrutura' | 'consultoria'

export const MEETING_TYPES: { id: MeetingType; label: string }[] = [
  { id: 'novo-site', label: 'Novo Site' },
  { id: 'catalogo', label: 'Catálogo Digital' },
  { id: 'infraestrutura', label: 'Infra & Domínio' },
  { id: 'consultoria', label: 'Consultoria Web' },
]

export type PortfolioCategory =
  | 'Corporativo & Indústria'
  | 'Serviços & Consultoria'
  | 'Saúde & Bem-Estar'
  | 'Comércio & Produtos'

export const PORTFOLIO_CATEGORIES: ('Todos' | PortfolioCategory)[] = [
  'Todos',
  'Corporativo & Indústria',
  'Serviços & Consultoria',
  'Saúde & Bem-Estar',
  'Comércio & Produtos',
]

export type PortfolioItem = {
  name: string
  url: string
  domain: string
  category: PortfolioCategory
  segment: string
  description: string
  gradient: string
  image: string
}

export const PORTFOLIO: PortfolioItem[] = [
  {
    name: 'ALCA',
    url: 'https://alcasrs.com.br',
    domain: 'alcasrs.com.br',
    category: 'Corporativo & Indústria',
    segment: 'Indústria',
    description: 'Site institucional corporativo com apresentação de soluções, estrutura e canais de contato.',
    gradient: 'from-royal via-electric to-turquoise',
    image: '/images/portfolio/alca.webp',
  },
  {
    name: 'Grupo Alpha',
    url: 'https://grupoalpha.srv.br',
    domain: 'grupoalpha.srv.br',
    category: 'Serviços & Consultoria',
    segment: 'Serviços',
    description: 'Presença digital para grupo de serviços, com portfólio de atuação e captação de leads.',
    gradient: 'from-indigo-brand via-royal to-electric',
    image: '/images/portfolio/grupo-alpha.webp',
  },
  {
    name: 'Amo Corretora',
    url: 'https://amocorretora.com',
    domain: 'amocorretora.com',
    category: 'Serviços & Consultoria',
    segment: 'Seguros',
    description: 'Site para corretora de seguros com foco em cotações rápidas e atendimento via WhatsApp.',
    gradient: 'from-electric via-turquoise to-indigo-brand',
    image: '/images/portfolio/amo.webp',
  },
  {
    name: 'Valora Conecta',
    url: 'https://valoraconecta.com.br',
    domain: 'valoraconecta.com.br',
    category: 'Serviços & Consultoria',
    segment: 'Contabilidade',
    description: 'Soluções Empresariais e Contábeis',
    gradient: 'from-royal-deep via-royal to-turquoise',
    image: '/images/portfolio/valora.webp',
  },
  {
    name: 'Blue Star Consulting',
    url: 'https://bluestarconsulting.com.br',
    domain: 'bluestarconsulting.com.br',
    category: 'Serviços & Consultoria',
    segment: 'Consultoria',
    description: 'Consultoria Estratégica',
    gradient: 'from-royal via-electric to-gold',
    image: '/images/portfolio/blue-star.webp',
  },
  {
    name: 'Mauro Azevedo Advocacia',
    url: 'https://mazevedoadv.com.br',
    domain: 'mazevedoadv.com.br',
    category: 'Serviços & Consultoria',
    segment: 'Jurídico',
    description: 'Site institucional sóbrio e elegante para escritório de advocacia e áreas de atuação.',
    gradient: 'from-royal-deep via-royal to-indigo-brand',
    image: '/images/portfolio/mazevedo.webp',
  },
  {
    name: 'Giovana Gomes Psicologia',
    url: 'https://giovanagomespsi.com.br',
    domain: 'giovanagomespsi.com.br',
    category: 'Saúde & Bem-Estar',
    segment: 'Psicologia',
    description: 'Site acolhedor para consultório de psicologia, com agendamento e conteúdo informativo.',
    gradient: 'from-turquoise via-electric to-indigo-brand',
    image: '/images/portfolio/giovana.webp',
  },
  {
    name: 'Zanini Móveis',
    url: 'https://zaninimov.com.br',
    domain: 'zaninimov.com.br',
    category: 'Comércio & Produtos',
    segment: 'Móveis e Decoração',
    description: 'Vitrine digital de móveis e decoração com galerias de ambientes e pedidos de orçamento.',
    gradient: 'from-gold via-electric to-royal',
    image: '/images/portfolio/zanin.webp',
  },
  {
    name: 'Reimark Camisetas',
    url: 'https://reimarkcamisetas.com.br',
    domain: 'reimarkcamisetas.com.br',
    category: 'Comércio & Produtos',
    segment: 'Confecção e Personalizados',
    description: 'Catálogo de camisetas e personalizados com linhas de produtos e contato comercial direto.',
    gradient: 'from-indigo-brand via-electric to-gold',
    image: '/images/portfolio/reimark.webp',
  },
]

export const PROCESS_STEPS = [
  {
    title: 'Imersão e Briefing',
    description:
      'Conhecemos você, sua empresa, seu público e seus objetivos. É aqui que nasce a estratégia certa para o seu negócio.',
  },
  {
    title: 'Design e Prototipação',
    description:
      'Criamos o layout exclusivo e o protótipo navegável para você aprovar cada detalhe antes do desenvolvimento.',
  },
  {
    title: 'Desenvolvimento, SEO e Tag Manager',
    description:
      'Codificamos com foco em velocidade, SEO técnico e rastreamento completo de conversões via Google Tag Manager.',
  },
  {
    title: 'Publicação, SSL e Suporte Contínuo',
    description:
      'Colocamos no ar com domínio, SSL e hospedagem configurados, e seguimos ao seu lado com suporte e melhorias.',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'Quanto tempo leva para desenvolver um site?',
    a: 'Um site institucional ou landing page leva em média de 15 a 30 dias. Catálogos digitais ficam entre 20 e 40 dias. O prazo final depende do volume de conteúdo e da agilidade nas aprovações — tudo é alinhado no briefing.',
  },
  {
    q: 'Vocês registram o domínio .com.br ou .com para mim?',
    a: 'Sim. Fazemos o registro no Registro.br (.com.br) ou em registradores internacionais (.com), sempre em nome da sua empresa, garantindo que o domínio seja 100% seu. Também cuidamos da configuração de DNS.',
  },
  {
    q: 'A hospedagem e o certificado SSL estão inclusos?',
    a: 'Oferecemos hospedagem de alta disponibilidade com certificado SSL (o cadeado de segurança) e e-mails profissionais. Montamos o pacote ideal de acordo com o tamanho e a necessidade do seu projeto.',
  },
  {
    q: 'O site já vem otimizado para o Google (SEO)?',
    a: 'Sim. Todos os projetos são entregues com SEO técnico on-page, metatags, sitemap, performance otimizada e integração com Google Search Console. Também configuramos Google Analytics e Tag Manager para medir resultados.',
  },
  {
    q: 'Como funciona o suporte depois da entrega?',
    a: 'Não desaparecemos após a publicação. Oferecemos suporte contínuo para ajustes, atualizações, monitoramento e evolução do site, com atendimento próximo e individualizado — inclusive pelo WhatsApp.',
  },
  {
    q: 'Atendem apenas empresas de Santa Rita do Sapucaí?',
    a: 'Estamos em Santa Rita do Sapucaí - MG, mas atendemos empresas de todo o Brasil com reuniões online via Google Meet. Para clientes da região, também podemos marcar encontros presenciais.',
  },
]
