'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon, GlobeIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState, useTransition } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/lib/routing'
import { usePathname as useNextPathname } from 'next/navigation'
import type { Locale } from '@/lib/routing'
import { CASES } from './data'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

function LanguageSwitcher() {
  const t = useTranslations('footer')
  const locale = useLocale() as Locale
  const pathname = usePathname() // Path without locale (e.g., /cases/...)
  const fullPathname = useNextPathname() // Full path with locale
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const switchToLocale: Locale = locale === 'en-US' ? 'pt-BR' : 'en-US'

  const handleSwitchLanguage = () => {
    startTransition(() => {
      // Check if we're on a case page
      const currentCase = CASES.find((c) => {
        // Check if the current full pathname matches this case's link
        return fullPathname === c.link[locale]
      })

      if (currentCase) {
        // If we're on a case page, navigate to the equivalent case in the other language
        // Extract just the path part without the locale prefix
        const targetPath = currentCase.link[switchToLocale].replace(
          `/${switchToLocale}`,
          '',
        )
        router.replace(targetPath, { locale: switchToLocale })
      } else {
        // For other pages, just switch the locale
        router.replace(pathname, { locale: switchToLocale })
      }
    })
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
        <GlobeIcon className="h-3.5 w-3.5" />
        <span>{t('currentLanguage')}</span>
      </div>
      <button
        onClick={handleSwitchLanguage}
        disabled={isPending}
        className="text-xs text-zinc-600 underline decoration-dotted underline-offset-2 transition-colors hover:text-zinc-900 disabled:opacity-50 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        {t('switchTo')}
      </button>
    </div>
  )
}

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <a href="https://github.com/ibelick/nim" target="_blank">
            <TextLoop className="text-xs text-zinc-500">
              <span>© {currentYear} Luciano.</span>
              <span>{t('builtWith')}</span>
            </TextLoop>
          </a>
          <div className="text-xs text-zinc-400">
            <ThemeSwitch />
          </div>
        </div>
        <div className="flex items-center justify-start">
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}
