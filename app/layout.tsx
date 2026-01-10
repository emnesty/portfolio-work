import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { StructuredData } from '@/components/structured-data'
import { Analytics } from '@vercel/analytics/react'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://luux.vercel.app'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Luciano Silva - Product Designer & Front-end Developer',
    template: '%s | Luciano Silva',
  },
  description:
    'Product Designer and Front-end Developer creating exceptional digital experiences. Specialized in UX/UI Design, React, Next.js, and Design Systems. Portfolio showcasing projects at Ambev Tech and innovative fintech solutions.',
  keywords: [
    'Product Designer',
    'UX Designer',
    'UI Designer',
    'Front-end Developer',
    'React Developer',
    'Next.js',
    'Design System',
    'UX/UI',
    'Luciano Silva',
    'Portfolio',
    'Web Design',
    'Ambev Tech',
    'Fintech Design',
    'TypeScript',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Luciano Silva', url: 'https://luux.vercel.app' }],
  creator: 'Luciano Silva',
  publisher: 'Luciano Silva',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: 'https://luux.vercel.app',
    title: 'Luciano Silva - Product Designer & Front-end Developer',
    description:
      'Product Designer and Front-end Developer creating exceptional digital experiences. Specialized in UX/UI Design, React, Next.js, and Design Systems.',
    siteName: 'Luciano Silva Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Luciano Silva - Product Designer & Front-end Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luciano Silva - Product Designer & Front-end Developer',
    description:
      'Creating exceptional digital experiences through design and code. Specialized in UX/UI Design, React, and Design Systems.',
    images: ['/opengraph-image'],
    creator: '@luux_design',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YLqeSMb5KA0Uxw1UXbKYCWl8-YZq9e8liKk',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
