import Image from 'next/image'
import { Globe, LayoutGrid, LineChart, Server } from 'lucide-react'
import { Reveal, SectionHeading } from './reveal'

const services = [
  {
    icon: Globe,
    title: 'Criação de Sites Institucionais',
    text: 'Design exclusivo, responsivo, ultra-rápido e otimizado para ranquear no Google.',
    tags: ['Responsivo', 'SEO', 'Alta performance'],
    gradient: 'from-electric to-turquoise',
    glow: 'group-hover:shadow-[0_30px_60px_-25px_rgb(2_132_199/0.7)]',
  },
  {
    icon: LayoutGrid,
    title: 'Catálogos Digitais Interativos',
    text: 'Exposição moderna de produtos e linhas comerciais para acelerar vendas B2B e B2C.',
    tags: ['B2B & B2C', 'Pedidos via WhatsApp'],
    gradient: 'from-indigo-brand to-electric',
    glow: 'group-hover:shadow-[0_30px_60px_-25px_rgb(79_70_229/0.7)]',
  },
  {
    icon: Server,
    title: 'Infraestrutura, Domínios e Hospedagem',
    text: 'Gestão técnica ponta a ponta: Registro.br, configuração de DNS, certificados SSL, e-mails profissionais e servidores de alta disponibilidade.',
    tags: ['Registro.br', 'DNS', 'SSL', 'E-mail'],
    gradient: 'from-royal to-electric',
    glow: 'group-hover:shadow-[0_30px_60px_-25px_rgb(0_74_143/0.7)]',
  },
  {
    icon: LineChart,
    title: 'Rastreamento e Inteligência de Conversão',
    text: 'Implementação de Google Tag Manager, Google Analytics, Search Console e otimização contínua de performance.',
    tags: ['GTM', 'GA4', 'Search Console'],
    gradient: 'from-turquoise to-indigo-brand',
    glow: 'group-hover:shadow-[0_30px_60px_-25px_rgb(6_182_212/0.7)]',
  },
]

export function Services() {
  return (
    <section id="solucoes" className="relative overflow-hidden bg-brand-gradient py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 right-10 size-96 rounded-full bg-turquoise/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Nossas Soluções"
          title="Tudo o que sua empresa precisa para crescer na web"
          description="Da criação do site à infraestrutura e ao rastreamento de cada conversão — uma única parceira cuidando de tudo."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100}>
              <article
                className={`group relative h-full overflow-hidden rounded-3xl bg-white p-6 transition duration-300 hover:-translate-y-2 ${s.glow}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${s.gradient} transition-all duration-300 group-hover:h-2`}
                />
                <Image
                  src="/images/logo-quality-arts-icone.png"
                  alt=""
                  aria-hidden="true"
                  width={648}
                  height={523}
                  className="pointer-events-none absolute -right-6 -bottom-6 w-28 opacity-[0.06] transition-opacity group-hover:opacity-[0.12]"
                />
                <span
                  className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${s.gradient}`}
                >
                  <s.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-extrabold leading-snug text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Entregas">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-royal">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
