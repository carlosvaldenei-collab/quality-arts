'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { Bell, CalendarCheck, CalendarDays, CheckCircle2, Clock, Mail, Video } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MEETING_TYPES, whatsappLink, type MeetingType } from '@/lib/site-data'
import { SELECT_MEETING_EVENT } from './solution-simulator'
import { Reveal, SectionHeading } from './reveal'
import { WhatsAppIcon } from './whatsapp-icon'

const TIME_SLOTS = ['09:00', '10:30', '14:00', '16:00']

type Day = { iso: string; weekday: string; day: string; month: string; long: string }

function upcomingWeekdays(count: number): Day[] {
  const days: Day[] = []
  const cursor = new Date()
  cursor.setHours(12, 0, 0, 0)
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1)
    const dow = cursor.getDay()
    if (dow === 0 || dow === 6) continue
    days.push({
      iso: cursor.toISOString().slice(0, 10),
      weekday: cursor.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
      day: cursor.toLocaleDateString('pt-BR', { day: '2-digit' }),
      month: cursor.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', ''),
      long: cursor.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' }),
    })
  }
  return days
}

type Confirmation = { name: string; dayLabel: string; time: string; type: string; email: string }

export function Booking({ bookingUrl }: { bookingUrl?: string }) {
  const [days, setDays] = useState<Day[]>([])
  const [meetingType, setMeetingType] = useState<MeetingType>('novo-site')
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [mode, setMode] = useState<'rapido' | 'google'>('rapido')
  const [error, setError] = useState<string | null>(null)
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null)

  useEffect(() => {
    setDays(upcomingWeekdays(10))
  }, [])

  useEffect(() => {
    const onSelect = (e: Event) => {
      const detail = (e as CustomEvent<MeetingType>).detail
      if (detail) setMeetingType(detail)
    }
    window.addEventListener(SELECT_MEETING_EVENT, onSelect)
    return () => window.removeEventListener(SELECT_MEETING_EVENT, onSelect)
  }, [])

  const typeLabel = MEETING_TYPES.find((t) => t.id === meetingType)?.label ?? ''

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('nome') ?? '').trim()
    const company = String(data.get('empresa') ?? '').trim()
    const phone = String(data.get('whatsapp') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()

    if (!selectedDay || !selectedTime) {
      setError('Escolha um dia e um horário para a reunião.')
      return
    }
    if (!name || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Preencha nome, WhatsApp e um e-mail válido.')
      return
    }
    setError(null)

    const day = days.find((d) => d.iso === selectedDay)
    const dayLabel = day?.long ?? selectedDay

    if (bookingUrl) {
      window.open(bookingUrl, '_blank', 'noopener,noreferrer')
    } else {
      window.open(
        whatsappLink(
          `Olá, Quality Arts! Gostaria de agendar uma Reunião de Diagnóstico (${typeLabel}).\n\nNome: ${name}\nEmpresa: ${company || '-'}\nWhatsApp: ${phone}\nE-mail: ${email}\nPreferência: ${dayLabel} às ${selectedTime}`,
        ),
        '_blank',
        'noopener,noreferrer',
      )
    }

    setConfirmation({ name, dayLabel, time: selectedTime, type: typeLabel, email })
  }

  return (
    <section id="agendar" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute top-20 -left-32 size-96 rounded-full bg-turquoise/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Agendamento Online"
          title={
            <>
              Agende sua <span className="text-gradient-brand">Reunião de Diagnóstico</span> Online
            </>
          }
          description="Escolha o melhor dia e horário diretamente na nossa agenda. A confirmação e o link da videoconferência são enviados automaticamente para o seu e-mail."
        />

        <Reveal delay={100} className="mt-14 grid overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-45px_rgb(0_74_143/0.6)] lg:grid-cols-[minmax(0,24rem)_1fr]">
          <aside className="relative bg-brand-gradient p-7 text-white md:p-9">
            <h3 className="text-2xl font-extrabold">Reunião de Diagnóstico</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Uma conversa estratégica e sem compromisso para entender o seu negócio e indicar a melhor solução.
            </p>

            <ul className="mt-7 grid gap-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Clock className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block font-semibold">30 min</strong>
                  <span className="text-white/75">Duração da reunião</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Video className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block font-semibold">Reunião Online</strong>
                  <span className="text-white/75">via Google Meet</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block font-semibold">Confirmação automática</strong>
                  <span className="text-white/75">enviada por e-mail</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Bell className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block font-semibold">Lembrete</strong>
                  <span className="text-white/75">no seu Google Agenda</span>
                </span>
              </li>
            </ul>

            <fieldset className="mt-8">
              <legend className="text-xs font-bold uppercase tracking-wider text-white/70">Tipo de reunião</legend>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {MEETING_TYPES.map((t) => (
                  <label
                    key={t.id}
                    className={cn(
                      'flex min-h-11 w-full min-w-0 cursor-pointer items-center justify-center rounded-xl border px-2 py-2.5 text-center text-sm leading-tight font-semibold break-words transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold',
                      meetingType === t.id
                        ? 'border-gold bg-gold text-ink'
                        : 'border-white/25 bg-white/10 text-white hover:bg-white/20',
                    )}
                  >
                    <input
                      type="radio"
                      name="tipo"
                      value={t.id}
                      checked={meetingType === t.id}
                      onChange={() => setMeetingType(t.id)}
                      className="sr-only"
                    />
                    {t.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </aside>

          <div className="bg-white p-6 md:p-9">
            {bookingUrl ? (
              <div role="tablist" aria-label="Modo de agendamento" className="mb-6 inline-flex rounded-full bg-mist p-1">
                {(
                  [
                    ['rapido', 'Agendamento rápido'],
                    ['google', 'Agenda Google'],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={mode === id}
                    onClick={() => setMode(id)}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-semibold transition',
                      mode === id ? 'bg-white text-royal shadow' : 'text-muted-foreground hover:text-royal',
                    )}
                  >
                    {label}
                  </button>
                ))}
              </div>
            ) : null}

            {mode === 'google' && bookingUrl ? (
              <iframe
                src={bookingUrl}
                title="Agenda de horários da Quality Arts no Google Agenda"
                className="h-[640px] w-full rounded-2xl border border-border"
                loading="lazy"
              />
            ) : confirmation ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-500">
                <span className="relative grid size-20 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <span className="absolute inset-0 rounded-full bg-emerald-200 animate-pulse-ring" />
                  <CheckCircle2 className="relative size-10" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-ink">{`Quase lá, ${confirmation.name.split(' ')[0]}!`}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                  {bookingUrl
                    ? 'Abrimos a nossa agenda oficial do Google em uma nova aba. Confirme o horário por lá para receber o convite e o link do Google Meet em '
                    : 'Enviamos sua solicitação pelo WhatsApp. Assim que confirmarmos, você recebe o convite e o link do Google Meet em '}
                  <strong className="text-ink">{confirmation.email}</strong>.
                </p>
                <dl className="mt-6 grid w-full max-w-md gap-2 rounded-2xl bg-mist p-5 text-left text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Tipo</dt>
                    <dd className="font-semibold text-ink">{confirmation.type}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Data</dt>
                    <dd className="font-semibold capitalize text-ink">{confirmation.dayLabel}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Horário</dt>
                    <dd className="font-semibold text-ink">{confirmation.time} (30 min)</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {bookingUrl ? (
                    <a
                      href={bookingUrl}
                      target="_blank"
                      suppressHydrationWarning
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-sm font-bold text-white hover:bg-electric"
                    >
                      <CalendarDays className="size-4" aria-hidden="true" />
                      Abrir Google Agenda
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setConfirmation(null)}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-royal hover:bg-mist"
                  >
                    Fazer novo agendamento
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-7">
                <fieldset>
                  <legend className="flex items-center gap-2 font-heading font-bold text-ink">
                    <CalendarDays className="size-5 text-electric" aria-hidden="true" />
                    1. Escolha o dia
                  </legend>
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {days.length === 0
                      ? Array.from({ length: 10 }).map((_, i) => (
                          <div key={i} className="h-[4.5rem] animate-pulse rounded-xl bg-mist" />
                        ))
                      : days.map((d) => (
                          <button
                            key={d.iso}
                            type="button"
                            aria-pressed={selectedDay === d.iso}
                            aria-label={d.long}
                            onClick={() => setSelectedDay(d.iso)}
                            className={cn(
                              'flex flex-col items-center rounded-xl border-2 py-2 transition-all',
                              selectedDay === d.iso
                                ? 'border-transparent bg-brand-gradient text-white shadow-lg'
                                : 'border-border text-ink hover:-translate-y-0.5 hover:border-electric/50',
                            )}
                          >
                            <span className={cn('text-[11px] font-semibold uppercase', selectedDay === d.iso ? 'text-white/80' : 'text-muted-foreground')}>
                              {d.weekday}
                            </span>
                            <span className="font-heading text-xl font-extrabold leading-tight">{d.day}</span>
                            <span className={cn('text-[11px]', selectedDay === d.iso ? 'text-white/80' : 'text-muted-foreground')}>
                              {d.month}
                            </span>
                          </button>
                        ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="flex items-center gap-2 font-heading font-bold text-ink">
                    <Clock className="size-5 text-electric" aria-hidden="true" />
                    2. Horários disponíveis
                  </legend>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {TIME_SLOTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={selectedTime === t}
                        onClick={() => setSelectedTime(t)}
                        className={cn(
                          'rounded-xl border-2 py-3 font-heading font-bold transition-all',
                          selectedTime === t
                            ? 'border-gold bg-gold/15 text-[#92400e]'
                            : 'border-border text-royal hover:border-electric/50 hover:bg-mist',
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="font-heading font-bold text-ink">3. Seus dados</legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <Field name="nome" label="Nome" autoComplete="name" required />
                    <Field name="empresa" label="Empresa" autoComplete="organization" />
                    <Field name="whatsapp" label="WhatsApp" type="tel" autoComplete="tel" placeholder="(35) 9 9999-9999" required />
                    <Field name="email" label="E-mail" type="email" autoComplete="email" required />
                  </div>
                </fieldset>

                {error ? (
                  <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {error}
                  </p>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-4 font-bold text-ink shadow-[0_18px_35px_-15px_rgb(245_158_11/0.9)] transition hover:-translate-y-0.5"
                  >
                    <CalendarCheck className="size-5" aria-hidden="true" />
                    Confirmar Agendamento no Google Agenda
                  </button>
                  <a
                    href={whatsappLink('Olá, Quality Arts! Gostaria de agendar uma reunião de diagnóstico.')}
                    target="_blank"
                    suppressHydrationWarning
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#128C7E] hover:underline"
                  >
                    <WhatsAppIcon className="size-4" />
                    Prefere combinar pelo WhatsApp?
                  </a>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  name,
  label,
  type = 'text',
  required,
  autoComplete,
  placeholder,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
  placeholder?: string
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-ink">
      <span>
        {label}
        {required ? <span className="text-electric"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-input bg-mist/60 px-4 text-ink outline-none transition placeholder:text-muted-foreground/60 focus:border-electric focus:bg-white focus:ring-4 focus:ring-electric/15"
      />
    </label>
  )
}
