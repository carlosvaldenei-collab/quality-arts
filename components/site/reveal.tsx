'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'article' | 'section'
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export function Counter({ to, suffix = '', duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(to * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
}) {
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      <span
        className={cn(
          'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
          tone === 'light' ? 'bg-electric/10 text-electric' : 'bg-white/15 text-white',
        )}
      >
        <span className={cn('size-1.5 rounded-full', tone === 'light' ? 'bg-turquoise' : 'bg-gold')} />
        {eyebrow}
      </span>
      <h2
        className={cn(
          'mt-4 text-balance text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl',
          tone === 'light' ? 'text-ink' : 'text-white',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-pretty text-base leading-relaxed md:text-lg',
            tone === 'light' ? 'text-muted-foreground' : 'text-white/80',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
