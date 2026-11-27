'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CalendarCheck, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, whatsappLink } from '@/lib/site-data'
import { WhatsAppIcon } from './whatsapp-icon'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
      <nav aria-label="Principal" className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="Quality Arts Soluções Web - início">
          <Image
            src="/images/logo-quality-arts.png"
            alt="Quality Arts Soluções Web"
            width={1160}
            height={522}
            priority
            className="h-10 w-auto md:h-11"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-royal"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-electric to-turquoise transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink('Olá, Quality Arts! Vim pelo site e gostaria de conversar sobre um projeto.')}
            target="_blank"
            suppressHydrationWarning
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="grid size-10 place-items-center rounded-full bg-[#25D366]/10 text-[#128C7E] transition hover:scale-105 hover:bg-[#25D366]/20"
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <a
            href="#agendar"
            className="hidden items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-bold text-ink shadow-[0_10px_25px_-10px_rgb(245_158_11/0.8)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgb(245_158_11/0.9)] sm:inline-flex"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            Agendar Diagnóstico
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid size-10 place-items-center rounded-full text-royal hover:bg-royal/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border/60 px-4 pb-5 lg:hidden">
          <ul className="flex flex-col pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-ink hover:bg-mist hover:text-royal"
                >
                  {link.label}
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
            Agendar Diagnóstico
          </a>
        </div>
      ) : null}
    </header>
  )
}
