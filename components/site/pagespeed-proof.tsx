'use client'

import Link from 'next/link'
import { PAGESPEED_COPY, type MetricId } from '@/lib/pagespeed-i18n'
import { useLanguage } from './language-provider'

const metricItems: { id: MetricId; valueMobile: number; valueDesktop: number }[] = [
  { id: 'performance', valueMobile: 98, valueDesktop: 100 },
  { id: 'accessibility', valueMobile: 100, valueDesktop: 100 },
  { id: 'best-practices', valueMobile: 100, valueDesktop: 100 },
  { id: 'seo', valueMobile: 100, valueDesktop: 100 },
]

const getScoreColor = (score: number) => {
  if (score >= 90) return 'border-emerald-500 text-emerald-700'
  if (score >= 50) return 'border-amber-500 text-amber-700'
  return 'border-red-500 text-red-700'
}

export function PageSpeedProof() {
  const { locale } = useLanguage()
  const copy = PAGESPEED_COPY[locale]

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#004a8f] mb-2">
              {copy.eyebrow}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              {copy.title}
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              {copy.description}
            </p>
          </div>
          <Link
            href="https://pagespeed.web.dev/analysis/https-www-qualityarts-com-br/1dgx8fgn55ud2mgap5v8g8?form_factor=desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow ring-1 ring-black/5 hover:bg-slate-100 transition-colors"
          >
            {copy.reportLink}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Bloco Celular */}
          <div className="rounded-3xl bg-white p-8 border border-slate-100 shadow-lg shadow-slate-100/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h3 className="font-heading text-2xl font-bold text-slate-900">{copy.mobileHeading}</h3>
              <span className="inline-flex w-fit shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 border border-emerald-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {copy.agenticBadge}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {metricItems.map((item) => (
                <div key={item.id + '-mobile'} className="flex flex-col items-center text-center">
                  <div className={`relative flex h-20 w-20 items-center justify-center rounded-full border-[6px] ${getScoreColor(item.valueMobile)}`}>
                    <span className="font-heading text-2xl font-extrabold">{item.valueMobile}</span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-slate-700 leading-tight">{copy.metrics[item.id]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco Computador */}
          <div className="rounded-3xl bg-white p-8 border border-slate-100 shadow-lg shadow-slate-100/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h3 className="font-heading text-2xl font-bold text-slate-900">{copy.desktopHeading}</h3>
              <span className="inline-flex w-fit shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700 border border-emerald-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {copy.agenticBadge}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {metricItems.map((item) => (
                <div key={item.id + '-desktop'} className="flex flex-col items-center text-center">
                  <div className={`relative flex h-20 w-20 items-center justify-center rounded-full border-[6px] ${getScoreColor(item.valueDesktop)}`}>
                    <span className="font-heading text-2xl font-extrabold">{item.valueDesktop}</span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-slate-700 leading-tight">{copy.metrics[item.id]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-slate-500">
          {copy.footnote}
        </p>
      </div>
    </section>
  )
}