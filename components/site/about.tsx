'use client'

import Image from 'next/image'
import { HeartHandshake, Puzzle, UserRound } from 'lucide-react'
import { ABOUT_COPY, type DifferentialCopy } from '@/lib/about-i18n'
import { useLanguage } from './language-provider'
import { Reveal } from './reveal'

const DIFFERENTIAL_STYLES: Record<
  DifferentialCopy['id'],
  {
    icon: typeof UserRound
    style: string
    iconStyle: string
    textStyle: string
  }
> = {
  individual: {
    icon: UserRound,
    style: 'bg-brand-gradient text-white',
    iconStyle: 'bg-white/20 text-white',
    textStyle: 'text-white/85',
  },
  flexible: {
    icon: Puzzle,
    style: 'bg-white text-ink border border-border',
    iconStyle: 'bg-gradient-to-br from-indigo-brand to-electric text-white',
    textStyle: 'text-muted-foreground',
  },
  partnership: {
    icon: HeartHandshake,
    style: 'bg-gradient-to-br from-turquoise to-electric text-white',
    iconStyle: 'bg-white/20 text-white',
    textStyle: 'text-white/85',
  },
}

export function About() {
  const { locale } = useLanguage()
  const copy = ABOUT_COPY[locale]

  return (
    <section id="sobre" className="relative overflow-hidden bg-mesh-light py-20 md:py-28">
      <Image
        src="/images/logo-quality-arts-icone.png"
        alt=""
        aria-hidden="true"
        width={648}
        height={523}
        className="pointer-events-none absolute -right-24 -bottom-20 w-[28rem] opacity-[0.05]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rotate-6 rounded-[2.5rem] bg-gradient-to-br from-electric/25 via-turquoise/20 to-indigo-brand/25" />
          <div className="relative rounded-[2rem] border border-white bg-white p-10 shadow-[0_40px_80px_-35px_rgb(0_74_143/0.5)]">
            <Image
              src="/images/logo-quality-arts-vertical.png"
              alt={copy.logoAlt}
              width={844}
              height={841}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-gold-gradient px-5 py-3 font-heading font-extrabold text-ink shadow-xl animate-float">
            {copy.locationBadge}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-electric">
              <span className="size-1.5 rounded-full bg-turquoise" />
              {copy.eyebrow}
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl">
              {copy.titlePrefix}
              <span className="text-gradient-brand">{copy.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              {copy.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {copy.differentials.map((d, i) => {
              const visual = DIFFERENTIAL_STYLES[d.id]
              const Icon = visual.icon
              return (
                <Reveal as="li" key={d.id} delay={150 + i * 100}>
                  <div
                    className={`h-full rounded-2xl p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${visual.style}`}
                  >
                    <span className={`grid size-11 place-items-center rounded-xl ${visual.iconStyle}`}>
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-bold leading-snug">{d.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${visual.textStyle}`}>{d.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
