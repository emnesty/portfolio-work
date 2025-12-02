'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export function Header() {
  const t = useTranslations('header')
  const locale = useLocale()

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href={`/${locale}`} className="font-medium text-black dark:text-white">
          {t('name')}
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {t('title')}
        </TextEffect>
      </div>
    </header>
  )
}
