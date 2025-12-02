'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { motion } from 'motion/react'

export function Header() {
  const t = useTranslations('header')
  const locale = useLocale()

  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image
            src="/avatar.png"
            alt={t('name')}
            width={64}
            height={64}
          />
        </motion.div>
        <div>
          <Link href={`/${locale}`} className="font-medium text-black dark:text-white">
            <TextEffect
              as="span"
              preset="fade"
              per="char"
              className="font-medium text-black dark:text-white"
            >
              {t('name')}
            </TextEffect>
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
      </div>
    </header>
  )
}
