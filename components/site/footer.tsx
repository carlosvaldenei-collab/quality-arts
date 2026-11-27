import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { NAV_LINKS, PORTFOLIO, whatsappLink } from '@/lib/site-data'
import { WhatsAppIcon } from './whatsapp-icon'

function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function Facebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14 8.5V6.8c0-.8.5-1 1-1h2.6V2h-3.6C10.6 2 10 4.5 10 6.2v2.3H7.5V12H10v10h4V12h3l.5-3.5H14z" />
    </svg>
  )
}

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/qualityarts10',
    icon: Instagram,
    className:
      'bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] shadow-[0_8px_20px_-8px_rgb(214_36_159/0.7)]',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1ESC7UuqoP/',
    icon: Facebook,
    className: 'bg-[#1877F2] shadow-[0_8px_20px_-8px_rgb(24_119_242/0.7)]',
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-mist">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo-quality-arts.png"
            alt="Quality Arts Soluções Web"
            width={1160}
            height={522}
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Sites institucionais, catálogos digitais, infraestrutura web e rastreamento inteligente com atendimento
            próximo e individualizado.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-royal">
            <MapPin className="size-4 text-electric" aria-hidden="true" />
            Santa Rita do Sapucaí - MG
          </p>
        </div>

        <nav aria-label="Navegação rápida">
          <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">Navegação</h2>
          <ul className="mt-4 grid gap-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition hover:text-electric">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Portfólio">
          <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">Portfólio</h2>
          <ul className="mt-4 grid gap-2.5">
            {PORTFOLIO.map((p) => (
              <li key={p.url}>
                <a
                  href={p.url}
                  target="_blank"
                  suppressHydrationWarning
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition hover:text-electric"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">Conecte-se</h2>
          <ul className="mt-4 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  suppressHydrationWarning
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`grid size-12 place-items-center rounded-full text-white transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric ${s.className}`}
                >
                  <s.icon className="size-6" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink('Olá, Quality Arts! Vim pelo site.')}
            target="_blank"
            suppressHydrationWarning
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1ebe5b]"
          >
            <WhatsAppIcon className="size-4" />
            Fale no WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground md:px-6">
          {`© ${new Date().getFullYear()} Quality Arts Soluções Web. Todos os direitos reservados.`}
        </p>
      </div>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink('Olá, Quality Arts! Vim pelo site e gostaria de falar com vocês.')}
      target="_blank"
      suppressHydrationWarning
      rel="noopener noreferrer"
      aria-label="Falar com a Quality Arts no WhatsApp"
      className="group fixed right-5 bottom-5 z-50 grid size-15 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_-10px_rgb(37_211_102/0.8)] transition hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden="true" />
      <WhatsAppIcon className="relative size-8" />
    </a>
  )
}
