import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Quality Arts Soluções Web | Agência Digital em Santa Rita do Sapucaí - MG',
  description:
    'Criação de sites institucionais de alta performance, catálogos digitais interativos, domínios, hospedagem, SSL e rastreamento com Google Tag Manager. Atendimento próximo em Santa Rita do Sapucaí - MG.',
  generator: 'v0.app',
  keywords: [
    'agência digital',
    'criação de sites',
    'Santa Rita do Sapucaí',
    'catálogo digital',
    'hospedagem',
    'Google Tag Manager',
    'SEO',
  ],
  openGraph: {
    title: 'Quality Arts Soluções Web',
    description: 'Transformamos a presença digital da sua empresa em resultados sólidos e mensuráveis.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#004a8f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
