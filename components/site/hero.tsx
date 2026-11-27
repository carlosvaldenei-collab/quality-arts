import { ArrowRight, BarChart3, CalendarCheck, Gauge, Lock, Rocket, Search, TrendingUp } from 'lucide-react'
import { Counter, Reveal } from './reveal'

const bars = [38, 52, 46, 64, 58, 76, 70, 88, 82, 96]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-mesh-light pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-24 -left-20 size-72 rounded-full bg-turquoise/25 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute top-40 -right-24 size-96 rounded-full bg-indigo-brand/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 size-6 rotate-12 rounded-md bg-gold/80 animate-float" />
      <div className="pointer-events-none absolute top-32 left-[46%] size-4 rounded-full border-2 border-electric/60 animate-float-slow" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-white/80 px-4 py-1.5 text-sm font-semibold text-royal shadow-sm backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-turquoise animate-pulse-ring" />
                <span className="relative inline-flex size-2 rounded-full bg-turquoise" />
              </span>
              <Rocket className="size-4 text-gold" aria-hidden="true" />
              Agência Digital em Santa Rita do Sapucaí - MG
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Transformamos a presença digital da sua empresa em{' '}
              <span className="text-gradient-brand">resultados sólidos e mensuráveis.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Criação de sites institucionais de alta performance, catálogos digitais interativos, gestão completa de
              infraestrutura web e rastreamento inteligente com atendimento próximo e individualizado.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#agendar"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-4 font-bold text-ink shadow-[0_18px_35px_-15px_rgb(245_158_11/0.9)] transition hover:-translate-y-0.5"
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              Agendar Reunião Online
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-royal/15 bg-white/80 px-7 py-4 font-bold text-royal backdrop-blur transition hover:-translate-y-0.5 hover:border-electric hover:text-electric"
            >
              Explorar Portfólio
            </a>
          </Reveal>
          <Reveal delay={400}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              <div>
                <dt className="text-sm text-muted-foreground">Performance</dt>
                <dd className="font-heading text-3xl font-extrabold text-royal">
                  <Counter to={99} />
                  <span className="text-lg text-muted-foreground">/100</span>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Clientes no ar</dt>
                <dd className="font-heading text-3xl font-extrabold text-electric">
                  <Counter to={10} suffix="+" />
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Responsivo</dt>
                <dd className="font-heading text-3xl font-extrabold text-indigo-brand">
                  <Counter to={100} suffix="%" />
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-xl">
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  )
}

function HeroDashboard() {
  return (
    <div className="relative" aria-label="Painel ilustrativo de métricas de performance" role="img">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-electric/30 via-turquoise/20 to-indigo-brand/30 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-[0_40px_80px_-30px_rgb(0_74_143/0.45)] backdrop-blur">
        <div className="flex items-center gap-2 border-b border-border/70 bg-mist/80 px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex flex-1 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs text-muted-foreground">
            <Lock className="size-3 text-emerald-600" aria-hidden="true" />
            https://suaempresa.com.br
          </div>
        </div>

        <div className="grid gap-4 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Visitas este mês</p>
              <p className="font-heading text-2xl font-extrabold text-ink">
                <Counter to={12480} />
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
              <TrendingUp className="size-3.5" aria-hidden="true" />
              +38%
            </span>
          </div>
          <div className="flex h-32 items-end gap-2">
            {bars.map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-royal via-electric to-turquoise opacity-90 transition-all duration-500 hover:opacity-100"
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <MetricPill icon={<Search className="size-4" />} label="SEO Otimizado" tone="bg-electric/10 text-electric" />
            <MetricPill icon={<BarChart3 className="size-4" />} label="GA4 + Tag Manager" tone="bg-indigo-brand/10 text-indigo-brand" />
          </div>
        </div>
      </div>

      <div className="absolute -top-6 -left-4 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 pr-5 shadow-xl animate-float sm:-left-10">
        <div className="relative grid size-12 place-items-center rounded-full bg-[conic-gradient(#06b6d4_0_99%,#e2e8f0_99%_100%)]">
          <div className="grid size-9 place-items-center rounded-full bg-white">
            <Gauge className="size-4 text-turquoise" aria-hidden="true" />
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Velocidade</p>
          <p className="font-heading text-lg font-extrabold text-ink">99/100</p>
        </div>
      </div>

      <div className="absolute top-1/3 -right-3 flex items-center gap-2 rounded-2xl bg-brand-gradient px-4 py-3 text-white shadow-xl animate-float-slow sm:-right-8">
        <Lock className="size-4" aria-hidden="true" />
        <span className="text-sm font-bold">SSL Ativo</span>
      </div>

      <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-3 pr-5 shadow-xl animate-float sm:left-10">
        <div className="grid size-10 place-items-center rounded-xl bg-gold-gradient text-ink">
          <TrendingUp className="size-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Conversões Rastreadas</p>
          <p className="font-heading text-lg font-extrabold text-ink">
            <Counter to={248} />
          </p>
        </div>
      </div>
    </div>
  )
}

function MetricPill({ icon, label, tone }: { icon: React.ReactNode; label: string; tone: string }) {
  return (
    <div className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold ${tone}`}>
      {icon}
      {label}
    </div>
  )
}
