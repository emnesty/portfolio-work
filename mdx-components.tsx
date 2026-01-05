'use client'
import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'
import { motion } from 'motion/react'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => (
      <motion.h1
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        {...props}
      >
        {children}
      </motion.h1>
    ),
    h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
      <motion.h2
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        {...props}
      >
        {children}
      </motion.h2>
    ),
    h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
      <motion.h3
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        {...props}
      >
        {children}
      </motion.h3>
    ),
    p: ({ children, ...props }: ComponentPropsWithoutRef<'p'>) => (
      <motion.p
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        {...props}
      >
        {children}
      </motion.p>
    ),
    ul: ({ children, ...props }: ComponentPropsWithoutRef<'ul'>) => (
      <motion.ul
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        {...props}
      >
        {children}
      </motion.ul>
    ),
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <motion.figure
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </motion.figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
