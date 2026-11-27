'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { CalendarCheck, ChevronDown, Globe, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, whatsappLink } from '@/lib/site-data'
import { NAVBAR_COPY } from '@/lib/navbar-i18n'
import { useLanguage, type Locale } from './language-provider'
import { WhatsAppIcon } from './whatsapp-icon'

const LOCALE_OPTIONS: { code: Locale; label: string }[] = [
  { code: 'pt', label: 'pt-BR' },
  { code: 'en', label: 'en' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const { locale, setLocale } = useLanguage()
  const copy = NAVBAR_COPY[locale]
  const currentOption = LOCALE_OPTIONS.find((item) => item.code === locale) ?? LOCALE_OPTIONS[0]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onOutsideClick = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', onOutsideClick)
    return () => document.removeEventListener('mousedown', onOutsideClick)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-white/60 bg-white/75 shadow-[0_8px_30px_-12px_rgb(0_74_143/0.25)] backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <nav aria-label="Principal" className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-4 md:h-20 md:px-6">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label={copy.brandAria}>
          <Image
            src="/images/logo-quality-arts.png"
            alt={copy.logoAlt}
            width={1160}
            height={522}
            priority
            className="h-12 w-auto md:h-14"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-royal"
              >
                {copy.labelsByHref[link.href] ?? link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-electric to-turquoise transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div ref={langRef} className="relative flex items-center gap-1.5">
            <Globe className="size-4 text-ink/70" aria-hidden="true" />
            <button
              type="button"
              onClick={() => setLangOpen((prev) => !prev)}
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              aria-label="Selecionar idioma / Select language"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink shadow-xs transition hover:border-royal/40 hover:bg-white"
            >
              <span>{currentOption.label}</span>
              <ChevronDown className={cn('size-3.5 transition-transform', langOpen && 'rotate-180')} aria-hidden="true" />
            </button>

            {langOpen ? (
              <ul
                role="listbox"
                aria-label="Idiomas"
                className="absolute top-full right-0 mt-1.5 min-w-20 overflow-hidden rounded-xl border border-border bg-white py-1 shadow-lg"
              >
                {LOCALE_OPTIONS.map((option) => (
                  <li key={option.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={locale === option.code}
                      onClick={() => {
                        setLocale(option.code)
                        setLangOpen(false)
                      }}
                      className={cn(
                        'flex w-full items-center justify-between px-3 py-1.5 text-left text-xs font-medium transition hover:bg-mist',
                        locale === option.code ? 'bg-mist/70 font-bold text-royal' : 'text-ink',
                      )}
                    >
                      <span>{option.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <a
            href={whatsappLink(copy.whatsappMessage)}
            target="_blank"
            suppressHydrationWarning
            rel="noopener noreferrer"
            aria-label={copy.whatsappAria}
            className="grid size-10 place-items-center rounded-full bg-[#25D366]/10 text-[#128C7E] transition hover:scale-105 hover:bg-[#25D366]/20"
          >
            <WhatsAppIcon className="size-5" />
          </a>

          <a
            href="#agendar"
            className="hidden items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-bold text-ink shadow-[0_10px_25px_-10px_rgb(245_158_11/0.8)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgb(245_158_11/0.9)] sm:inline-flex"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            {copy.ctaLabel}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? copy.closeMenu : copy.openMenu}
            className="grid size-10 place-items-center rounded-full text-royal hover:bg-royal/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border/60 bg-white/95 px-4 pb-5 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-ink hover:bg-mist hover:text-royal"
                >
                  {copy.labelsByHref[link.href] ?? link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#agendar"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3 font-bold text-ink"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            {copy.ctaLabel}
          </a>
        </div>
      ) : null}
    </header>
  )
}