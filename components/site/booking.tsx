'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { Bell, CalendarCheck, CalendarDays, CheckCircle2, Clock, Mail, Video } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MEETING_TYPES, whatsappLink, type MeetingType } from '@/lib/site-data'
import { BOOKING_COPY, MEETING_TYPES_EN } from '@/lib/booking-i18n'
import { useLanguage, type Locale } from './language-provider'
import { SELECT_MEETING_EVENT } from './solution-simulator'
import { Reveal, SectionHeading } from './reveal'
import { WhatsAppIcon } from './whatsapp-icon'

const TIME_SLOTS = ['09:00', '10:30', '14:00', '16:00']

type Day = { iso: string; weekday: string; day: string; month: string; long: string }

function upcomingWeekdays(count: number, locale: Locale): Day[] {
  const bcp47 = locale === 'pt' ? 'pt-BR' : 'en-US'
  const days: Day[] = []
  const cursor = new Date()
  cursor.setHours(12, 0, 0, 0)
  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1)
    const dow = cursor.getDay()
    if (dow === 0 || dow === 6) continue
    days.push({
      iso: cursor.toISOString().slice(0, 10),
      weekday: cursor.toLocaleDateString(bcp47, { weekday: 'short' }).replace('.', ''),
      day: cursor.toLocaleDateString(bcp47, { day: '2-digit' }),
      month: cursor.toLocaleDateString(bcp47, { month: 'short' }).replace('.', ''),
      long: cursor.toLocaleDateString(bcp47, { weekday: 'long', day: '2-digit', month: 'long' }),
    })
  }
  return days
}

type Confirmation = { name: string; dayLabel: string; time: string; type: string; email: string }

export function Booking({ bookingUrl }: { bookingUrl?: string }) {
  const { locale } = useLanguage()
  const copy = BOOKING_COPY[locale]

  const [days, setDays] = useState<Day[]>([])
  const [meetingType, setMeetingType] = useState<MeetingType>('novo-site')
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [mode, setMode] = useState<'rapido' | 'google'>('rapido')
  const [error, setError] = useState<string | null>(null)
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null)

  useEffect(() => {
    setDays(upcomingWeekdays(10, locale))
  }, [locale])

  useEffect(() => {
    const onSelect = (e: Event) => {
      const detail = (e as CustomEvent<MeetingType>).detail
      if (detail) setMeetingType(detail)
    }
    window.addEventListener(SELECT_MEETING_EVENT, onSelect)
    return () => window.removeEventListener(SELECT_MEETING_EVENT, onSelect)
  }, [])

  const baseTypeLabel = MEETING_TYPES.find((t) => t.id === meetingType)?.label ?? ''
  const typeLabel = locale === 'en' ? (MEETING_TYPES_EN[meetingType] ?? baseTypeLabel) : baseTypeLabel

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('nome') ?? '').trim()
    const company = String(data.get('empresa') ?? '').trim()
    const phone = String(data.get('whatsapp') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()

    if (!selectedDay || !selectedTime) {
      setError(copy.validationDateTime)
      return
    }
    if (!name || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
      setError(copy.validationFields)
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
          copy.whatsappRequest({
            typeLabel,
            name,
            company,
            phone,
            email,
            dayLabel,
            time: selectedTime,
          }),
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
          eyebrow={copy.eyebrow}
          title={
            <>
              {copy.titlePrefix}
              <span className="text-gradient-brand">{copy.titleHighlight}</span>
            </>
          }
          description={copy.description}
        />

        <Reveal delay={100} className="mt-14 grid overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-45px_rgb(0_74_143/0.6)] lg:grid-cols-[minmax(0,24rem)_1fr]">
          <aside className="relative bg-brand-gradient p-7 text-white md:p-9">
            <h3 className="text-2xl font-extrabold">{copy.cardTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{copy.cardDescription}</p>

            <ul className="mt-7 grid gap-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Clock className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block font-semibold">{copy.perks.durationTitle}</strong>
                  <span className="text-white/75">{copy.perks.durationSubtitle}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Video className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block font-semibold">{copy.perks.formatTitle}</strong>
                  <span className="text-white/75">{copy.perks.formatSubtitle}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block font-semibold">{copy.perks.emailTitle}</strong>
                  <span className="text-white/75">{copy.perks.emailSubtitle}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-white/15">
                  <Bell className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <strong className="block font-semibold">{copy.perks.reminderTitle}</strong>
                  <span className="text-white/75">{copy.perks.reminderSubtitle}</span>
                </span>
              </li>
            </ul>

            <fieldset className="mt-8">
              <legend className="text-xs font-bold uppercase tracking-wider text-white/70">{copy.meetingTypeLegend}</legend>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {MEETING_TYPES.map((t) => {
                  const itemLabel = locale === 'en' ? (MEETING_TYPES_EN[t.id] ?? t.label) : t.label
                  return (
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
                      {itemLabel}
                    </label>
                  )
                })}
              </div>
            </fieldset>
          </aside>

          <div className="bg-white p-6 md:p-9">
            {bookingUrl ? (
              <div role="tablist" aria-label={copy.modeTabsAria} className="mb-6 inline-flex rounded-full bg-mist p-1">
                {(
                  [
                    ['rapido', copy.modeQuick],
                    ['google', copy.modeGoogle],
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
                title={copy.iframeTitle}
                className="h-[640px] w-full rounded-2xl border border-border"
                loading="lazy"
              />
            ) : confirmation ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-500">
                <span className="relative grid size-20 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <span className="absolute inset-0 rounded-full bg-emerald-200 animate-pulse-ring" />
                  <CheckCircle2 className="relative size-10" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-ink">
                  {copy.confirmationTitle(confirmation.name.split(' ')[0])}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                  {bookingUrl ? copy.confirmationBodyWithCalendar : copy.confirmationBodyWhatsapp}
                  <strong className="text-ink">{confirmation.email}</strong>
                  {copy.confirmationEnd}
                </p>
                <dl className="mt-6 grid w-full max-w-md gap-2 rounded-2xl bg-mist p-5 text-left text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{copy.summaryType}</dt>
                    <dd className="font-semibold text-ink">{confirmation.type}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{copy.summaryDate}</dt>
                    <dd className="font-semibold capitalize text-ink">{confirmation.dayLabel}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{copy.summaryTime}</dt>
                    <dd className="font-semibold text-ink">
                      {confirmation.time} {copy.durationSuffix}
                    </dd>
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
                      {copy.openGoogleCalendar}
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setConfirmation(null)}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-royal hover:bg-mist"
                  >
                    {copy.newBooking}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-7">
                <fieldset>
                  <legend className="flex items-center gap-2 font-heading font-bold text-ink">
                    <CalendarDays className="size-5 text-electric" aria-hidden="true" />
                    {copy.step1Legend}
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
                    {copy.step2Legend}
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
                  <legend className="font-heading font-bold text-ink">{copy.step3Legend}</legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <Field name="nome" label={copy.fields.name} autoComplete="name" required />
                    <Field name="empresa" label={copy.fields.company} autoComplete="organization" />
                    <Field
                      name="whatsapp"
                      label={copy.fields.phone}
                      type="tel"
                      autoComplete="tel"
                      placeholder={copy.fields.phonePlaceholder}
                      required
                    />
                    <Field name="email" label={copy.fields.email} type="email" autoComplete="email" required />
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
                    {copy.submitButton}
                  </button>
                  <a
                    href={whatsappLink(copy.preferWhatsappMessage)}
                    target="_blank"
                    suppressHydrationWarning
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#128C7E] hover:underline"
                  >
                    <WhatsAppIcon className="size-4 shrink-0" />
                    {copy.preferWhatsapp}
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
