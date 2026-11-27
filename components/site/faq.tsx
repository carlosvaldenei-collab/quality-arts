'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CalendarCheck, Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FAQ_ITEMS, whatsappLink } from '@/lib/site-data'
import { FAQ_COPY, FAQ_ITEMS_EN } from '@/lib/faq-i18n'
import { useLanguage } from './language-provider'
import { Reveal, SectionHeading } from './reveal'
import { WhatsAppIcon } from './whatsapp-icon'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const { locale } = useLanguage()
  const copy = FAQ_COPY[locale]

  const items = FAQ_ITEMS.map((item, idx) =>
    locale === 'en' && FAQ_ITEMS_EN[idx] ? FAQ_ITEMS_EN[idx] : item,
  )

  return (
    <section id="faq" className="bg-mesh-light py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />
        <Reveal delay={100} className="mt-12 grid gap-3">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={`${item.q}-${i}`}
                className={cn(
                  'rounded-2xl border bg-white transition-all duration-300',
                  isOpen ? 'border-electric/40 shadow-[0_20px_40px_-25px_rgb(0_74_143/0.5)]' : 'border-border',
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-heading font-bold text-ink"
                  >
                    {item.q}
                    <span
                      className={cn(
                        'grid size-8 shrink-0 place-items-center rounded-full transition-colors',
                        isOpen ? 'bg-brand-gradient text-white' : 'bg-mist text-royal',
                      )}
                    >
                      {isOpen ? <Minus className="size-4" aria-hidden="true" /> : <Plus className="size-4" aria-hidden="true" />}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={cn(
                    'grid transition-all duration-300',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

export function FinalCta() {
  const { locale } = useLanguage()
  const cta = FAQ_COPY[locale].finalCta

  return (
    <section className="px-4 py-20 md:px-6">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-gradient px-6 py-16 text-center text-white md:px-16">
        <Image
          src="/images/logo-quality-arts-icone.png"
          alt=""
          aria-hidden="true"
          width={648}
          height={523}
          className="pointer-events-none absolute -top-10 -left-10 w-72 opacity-10 brightness-0 invert"
        />
        <div className="pointer-events-none absolute -right-16 -bottom-24 size-80 rounded-full bg-turquoise/40 blur-3xl" />
        <div className="pointer-events-none absolute top-8 right-12 size-5 rotate-12 rounded-md bg-gold animate-float" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            {cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-white/85">
            {cta.description}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#agendar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-4 font-bold text-ink shadow-xl transition hover:-translate-y-0.5"
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              {cta.primaryButton}
            </a>
            <a
              href={whatsappLink(cta.whatsappMessage)}
              target="_blank"
              suppressHydrationWarning
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              <WhatsAppIcon className="size-5 shrink-0" />
              {cta.secondaryButton}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}