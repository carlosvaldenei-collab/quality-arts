'use client'

import { useState } from 'react'
import { CalendarCheck, Check, Clock, Globe, LayoutGrid, LineChart, Sparkles, Server } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SOLUTIONS, whatsappLink, type MeetingType, type SolutionId } from '@/lib/site-data'
import { Reveal, SectionHeading } from './reveal'
import { WhatsAppIcon } from './whatsapp-icon'

export const SELECT_MEETING_EVENT = 'qa:select-meeting'

const ICONS: Record<SolutionId, typeof Globe> = {
  site: Globe,
  catalogo: LayoutGrid,
  infra: Server,
  rastreamento: LineChart,
}

export function selectMeeting(type: MeetingType) {
  window.dispatchEvent(new CustomEvent<MeetingType>(SELECT_MEETING_EVENT, { detail: type }))
  document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })
}

export function SolutionSimulator() {
  const [activeId, setActiveId] = useState<SolutionId>('site')
  const active = SOLUTIONS.find((s) => s.id === activeId) ?? SOLUTIONS[0]
  const ActiveIcon = ICONS[active.id]

  return (
    <section id="simulador" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Simulador Interativo"
          title={
            <>
              Descubra a <span className="text-gradient-brand">Solução Ideal</span>
            </>
          }
          description="Selecione o que sua empresa precisa hoje e veja na hora o que está incluso, os benefícios e o prazo médio."
        />

        <Reveal delay={100} className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div role="tablist" aria-label="Escolha uma solução" aria-orientation="vertical" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {SOLUTIONS.map((s) => {
              const Icon = ICONS[s.id]
              const selected = s.id === activeId
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={selected}
                  aria-controls="solution-panel"
                  onClick={() => setActiveId(s.id)}
                  className={cn(
                    'group flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-300',
                    selected
                      ? 'border-transparent bg-brand-gradient text-white shadow-[0_20px_40px_-20px_rgb(0_74_143/0.8)]'
                      : 'border-border bg-mist/60 text-ink hover:-translate-y-0.5 hover:border-electric/40 hover:bg-white',
                  )}
                >
                  <span
                    className={cn(
                      'grid size-11 shrink-0 place-items-center rounded-xl transition-colors',
                      selected ? 'bg-white/20 text-white' : `bg-gradient-to-br ${s.accent} text-white`,
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-heading font-bold leading-snug">{s.label}</span>
                </button>
              )
            })}
          </div>

          <div
            id="solution-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="relative overflow-hidden rounded-3xl border border-border bg-mesh-light p-6 md:p-10"
          >
            <div
              key={active.id}
              className="relative animate-in fade-in slide-in-from-bottom-3 duration-500"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className={cn('grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg', active.accent)}>
                    <ActiveIcon className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl font-extrabold text-ink md:text-3xl">{active.title}</h3>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-2 text-sm font-bold text-[#92400e]">
                  <Clock className="size-4" aria-hidden="true" />
                  Prazo médio: {active.deadline}
                </span>
              </div>
              <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{active.description}</p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-electric">O que está incluso</h4>
                  <ul className="mt-4 grid gap-3">
                    {active.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-turquoise/15 text-turquoise">
                          <Check className="size-3.5" aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-brand-gradient p-5 text-white shadow-sm">
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white/80">Benefícios para o negócio</h4>
                  <ul className="mt-4 grid gap-3">
                    {active.benefits.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Sparkles className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => selectMeeting(active.meetingType)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 font-bold text-ink shadow-[0_14px_30px_-14px_rgb(245_158_11/0.9)] transition hover:-translate-y-0.5"
                >
                  <CalendarCheck className="size-5" aria-hidden="true" />
                  Agendar esta Solução no Calendário
                </button>
                <a
                  href={whatsappLink(
                    `Olá, Quality Arts! Tenho interesse na solução "${active.title}" e gostaria de mais informações.`,
                  )}
                  target="_blank"
                  suppressHydrationWarning
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1ebe5b]"
                >
                  <WhatsAppIcon className="size-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
