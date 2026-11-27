'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PORTFOLIO, PORTFOLIO_CATEGORIES, type PortfolioItem } from '@/lib/site-data'
import { PORTFOLIO_COPY, getPortfolioItemEn, translateTerm } from '@/lib/portfolio-i18n'
import { useLanguage, type Locale } from './language-provider'
import { Reveal, SectionHeading } from './reveal'

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof PORTFOLIO_CATEGORIES)[number]>('Todos')
  const { locale } = useLanguage()
  const copy = PORTFOLIO_COPY[locale]

  const items = filter === 'Todos' ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={
            <>
              {copy.titlePrefix}
              <span className="text-gradient-brand">{copy.titleHighlight}</span>
            </>
          }
          description={copy.description}
        />

        <Reveal delay={100}>
          <div role="group" aria-label={copy.filterGroupAria} className="mt-10 flex flex-wrap justify-center gap-2">
            {PORTFOLIO_CATEGORIES.map((c) => {
              const count = c === 'Todos' ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.category === c).length
              const active = c === filter
              const label = c === 'Todos' ? copy.allLabel : translateTerm(c, locale)
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(c)}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all',
                    active
                      ? 'bg-brand-gradient text-white shadow-[0_10px_25px_-12px_rgb(0_74_143/0.9)]'
                      : 'bg-mist text-royal hover:bg-electric/10',
                  )}
                >
                  {label}
                  <span
                    className={cn(
                      'grid min-w-5 place-items-center rounded-full px-1.5 text-xs',
                      active ? 'bg-white/25' : 'bg-white text-royal',
                    )}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {items.map((item) => (
            <li key={`${item.name}-${locale}`} className="animate-in fade-in zoom-in-95 duration-500">
              <PortfolioCard item={item} locale={locale} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function PortfolioCard({ item, locale }: { item: PortfolioItem; locale: Locale }) {
  const copy = PORTFOLIO_COPY[locale]
  const enItem = locale === 'en' ? getPortfolioItemEn(item) : undefined

  const categoryText =
    locale === 'en'
      ? (enItem?.category ?? translateTerm(item.category, locale))
      : item.category
  const segmentText =
    locale === 'en'
      ? (enItem?.segment ?? translateTerm(item.segment, locale))
      : item.segment
  const descriptionText =
    locale === 'en'
      ? (enItem?.description ?? item.description)
      : item.description

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition duration-300 hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-[0_30px_60px_-30px_rgb(0_74_143/0.55)]">
      <div className={cn('relative aspect-[16/10] overflow-hidden bg-gradient-to-br p-5', item.gradient)}>
        <div className="absolute -top-10 -right-10 size-40 rounded-full bg-white/15 blur-2xl transition-transform duration-500 group-hover:scale-150" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-white/95 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]">
          <div className="flex items-center gap-1.5 border-b border-border/70 px-3 py-2">
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
            <span className="ml-2 flex items-center gap-1 truncate text-[10px] text-muted-foreground">
              <Lock className="size-2.5 text-emerald-600" aria-hidden="true" />
              {item.domain}
            </span>
          </div>
          <div className="relative flex-1 overflow-hidden bg-mist">
            <Image
              src={item.image}
              alt={copy.screenshotAlt(item.name)}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-electric/10 px-2.5 py-1 text-xs font-semibold text-royal">{categoryText}</span>
          <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-semibold text-[#92400e]">{segmentText}</span>
        </div>
        <h3 className="mt-4 text-xl font-extrabold text-ink">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{descriptionText}</p>
        <a
          href={item.url}
          target="_blank"
          suppressHydrationWarning
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-sm font-bold text-white transition hover:bg-electric"
        >
          {copy.visitButton}
          <span className="sr-only">{copy.visitSrOnly(item.name)}</span>
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}