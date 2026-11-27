'use client'

import { useState } from 'react'
import { Code2, PenTool, Rocket, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PROCESS_STEPS } from '@/lib/site-data'
import { PROCESS_COPY, PROCESS_STEPS_EN } from '@/lib/process-i18n'
import { useLanguage } from './language-provider'
import { Reveal, SectionHeading } from './reveal'

const ICONS = [Search, PenTool, Code2, Rocket]

export function Process() {
  const [active, setActive] = useState(0)
  const { locale } = useLanguage()
  const copy = PROCESS_COPY[locale]

  const steps = PROCESS_STEPS.map((step, idx) =>
    locale === 'en' && PROCESS_STEPS_EN[idx] ? PROCESS_STEPS_EN[idx] : step,
  )

  const progress = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 0
  const currentStep = steps[active] ?? steps[0]

  return (
    <section id="como-trabalhamos" className="relative overflow-hidden bg-mesh-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <Reveal delay={100} className="mt-14">
          <div className="relative">
            <div className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-1 rounded-full bg-border md:block" aria-hidden="true">
              <div
                className="h-full rounded-full bg-gradient-to-r from-royal via-electric to-turquoise transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <ol className="relative grid gap-4 md:grid-cols-4">
              {steps.map((step, i) => {
                const Icon = ICONS[i % ICONS.length]
                const isActive = i === active
                const done = i < active
                return (
                  <li key={`${step.title}-${i}`}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={isActive ? 'step' : undefined}
                      className="group flex w-full items-center gap-4 text-left md:flex-col md:text-center"
                    >
                      <span
                        className={cn(
                          'relative grid size-14 shrink-0 place-items-center rounded-2xl border-2 transition-all duration-300',
                          isActive
                            ? 'scale-110 border-transparent bg-brand-gradient text-white shadow-[0_15px_30px_-12px_rgb(0_74_143/0.8)]'
                            : done
                              ? 'border-turquoise bg-white text-turquoise'
                              : 'border-border bg-white text-muted-foreground group-hover:border-electric group-hover:text-electric',
                        )}
                      >
                        <Icon className="size-6" aria-hidden="true" />
                        <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-gold text-xs font-extrabold text-ink">
                          {i + 1}
                        </span>
                      </span>
                      <span
                        className={cn(
                          'font-heading font-bold leading-snug transition-colors',
                          isActive ? 'text-royal' : 'text-ink/70 group-hover:text-ink',
                        )}
                      >
                        {step.title}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>

          <div
            key={`${active}-${locale}`}
            className="mt-10 animate-in fade-in slide-in-from-bottom-2 rounded-3xl border border-white bg-white p-6 shadow-[0_30px_60px_-35px_rgb(0_74_143/0.5)] duration-500 md:p-8"
            aria-live="polite"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-electric">
              {copy.stepIndicator(active + 1, steps.length)}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold text-ink">{currentStep.title}</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{currentStep.description}</p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setActive((v) => Math.max(0, v - 1))}
                disabled={active === 0}
                className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-royal transition hover:bg-mist disabled:opacity-40"
              >
                {copy.previousButton}
              </button>
              <button
                type="button"
                onClick={() => setActive((v) => Math.min(steps.length - 1, v + 1))}
                disabled={active === steps.length - 1}
                className="rounded-full bg-royal px-5 py-2 text-sm font-semibold text-white transition hover:bg-electric disabled:opacity-40"
              >
                {copy.nextButton}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}