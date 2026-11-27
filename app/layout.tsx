import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { LanguageProvider } from '@/components/site/language-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.qualityarts.com.br'),
  title: 'Quality Arts Soluções Web | Agência Digital em Santa Rita do Sapucaí - MG',
  description:
    'Criação de sites institucionais de alta performance, catálogos digitais interativos, domínios, hospedagem, SSL e rastreamento com Google Tag Manager. Atendimento próximo em Santa Rita do Sapucaí - MG.',
  keywords: [
    'agência digital',
    'criação de sites',
    'Santa Rita do Sapucaí',
    'catálogo digital',
    'hospedagem',
    'Google Tag Manager',
    'SEO',
  ],
  authors: [{ name: 'Quality Arts Soluções Web', url: 'https://www.qualityarts.com.br' }],
  creator: 'Quality Arts Soluções Web',
  alternates: {
    canonical: 'https://www.qualityarts.com.br',
  },
  openGraph: {
    title: 'Quality Arts Soluções Web',
    description: 'Transformamos a presença digital da sua empresa em resultados sólidos e mensuráveis.',
    url: 'https://www.qualityarts.com.br',
    siteName: 'Quality Arts Soluções Web',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Quality Arts Soluções Web',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Quality Arts Soluções Web',
    url: 'https://www.qualityarts.com.br',
    telephone: '+55-35-99950-3338',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Rita do Sapucaí',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    areaServed: 'BR',
    knowsAbout: [
      'Criação de Sites Institucionais',
      'Catálogos Digitais Interativos',
      'Gestão de Domínios e Hospedagem',
      'Certificado SSL e SEO',
      'Google Tag Manager',
    ],
  }

  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}