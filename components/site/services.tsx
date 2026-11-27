'use client'

import Image from 'next/image'
import { Globe, LayoutGrid, LineChart, Server } from 'lucide-react'
import { SERVICES_COPY, type ServiceItemCopy } from '@/lib/services-i18n'
import { useLanguage } from './language-provider'
import { Reveal, SectionHeading } from './reveal'

const SERVICE_STYLES: Record<
  ServiceItemCopy['id'],
  {
    icon: typeof Globe
    gradient: string
    glow: string
  }
> = {
  websites: {
    icon: Globe,
    gradient: 'from-electric to-turquoise',
    glow: 'group-hover:shadow-[0_30px_60px_-25px_rgb(2_132_199/0.7)]',
  },
  catalogs: {
    icon: LayoutGrid,
    gradient: 'from-indigo-brand to-electric',
    glow: 'group-hover:shadow-[0_30px_60px_-25px_rgb(79_70_229/0.7)]',
  },
  infrastructure: {
    icon: Server,
    gradient: 'from-royal to-electric',
    glow: 'group-hover:shadow-[0_30px_60px_-25px_rgb(0_74_143/0.7)]',
  },
  tracking: {
    icon: LineChart,
    gradient: 'from-turquoise to-indigo-brand',
    glow: 'group-hover:shadow-[0_30px_60px_-25px_rgb(6_182_212/0.7)]',
  },
}

export function Services() {
  const { locale } = useLanguage()
  const copy = SERVICES_COPY[locale]

  return (
    <section id="solucoes" className="relative overflow-hidden bg-brand-gradient py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 right-10 size-96 rounded-full bg-turquoise/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          tone="dark"
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.items.map((s, i) => {
            const visual = SERVICE_STYLES[s.id]
            const Icon = visual.icon
            return (
              <Reveal as="li" key={s.id} delay={i * 100}>
                <article
                  className={`group relative h-full overflow-hidden rounded-3xl bg-white p-6 transition duration-300 hover:-translate-y-2 ${visual.glow}`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${visual.gradient} transition-all duration-300 group-hover:h-2`}
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
                    className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${visual.gradient}`}
                  >
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-extrabold leading-snug text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={copy.deliverablesAria}>
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-royal">
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
