import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { Header } from '../header'
import { Footer } from '../footer'
import { routing } from '@/lib/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </NextIntlClientProvider>
  )
}
