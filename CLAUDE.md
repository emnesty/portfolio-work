# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, and Tailwind CSS v4. The project is based on the Nim template and features a minimal one-page portfolio with blog support, internationalization (i18n), and animated components from Motion-Primitives.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture & Key Concepts

### Internationalization (i18n)
- Uses `next-intl` for internationalization with two locales: `en-US` and `pt-BR`
- Default locale is `pt-BR`
- Locale routing is configured in `lib/routing.ts` with `localePrefix: 'always'`
- Middleware in `middleware.ts` handles locale routing for all paths
- Translation messages are stored in `messages/` directory as JSON files
- The app uses dynamic routing with `app/[locale]/` structure
- Root `app/page.tsx` redirects to the default locale

### Routing Structure
- Root layout (`app/layout.tsx`): Sets up fonts (Geist, Geist Mono), metadata, and ThemeProvider
- Locale layout (`app/[locale]/layout.tsx`): Wraps content with NextIntlClientProvider, includes Header and Footer
- Main page (`app/[locale]/page.tsx`): Client component with Motion animations
- Blog posts: Located in `app/blog/[slug]/page.mdx` (non-localized)
- Cases: Located in `app/[locale]/cases/[slug]/page.mdx` (localized with separate folders per locale)

### Data Configuration
- All portfolio data is centralized in `app/data.ts`
- Includes typed structures for: Projects, Work Experience, Cases, Social Links, and Email
- Cases use locale-specific content with `en-US` and `pt-BR` keys
- To customize the portfolio, modify this file

### MDX Support
- Configured with `@next/mdx` and `@mdx-js/react`
- Custom MDX components defined in `mdx-components.tsx`
- Includes custom `Cover` component for images with captions
- Uses `sugar-high` for syntax highlighting in code blocks
- Blog layout (`app/blog/layout.tsx`) includes ScrollProgress and Copy URL button

### UI Components
- Located in `components/ui/`
- Motion-Primitives components:
  - `animated-background.tsx`: Animated hover backgrounds
  - `magnetic.tsx`: Magnetic hover effects
  - `morphing-dialog.tsx`: Expandable dialog transitions
  - `scroll-progress.tsx`: Scroll progress indicator
  - `spotlight.tsx`: Spotlight hover effects
  - `text-effect.tsx`, `text-loop.tsx`, `text-morph.tsx`: Text animations
- All use Motion (Framer Motion) for animations

### Styling
- Tailwind CSS v4 with custom configuration
- Uses Geist and Geist Mono fonts from next/font/google
- Dark mode support via `next-themes`
- Custom prose styles for MDX content

## Adding Content

### Adding Blog Posts
Create `.mdx` files in `app/blog/[your-slug]/page.mdx`. Blog posts are not localized.

Example structure:
```mdx
# Your Post Title

Your content here...
```

### Adding Case Studies
Create localized `.mdx` files in:
- `app/[locale]/cases/[slug]/page.mdx` (English: `en-US/cases/[slug]`)
- `app/[locale]/cases/[slug]/page.mdx` (Portuguese: `pt-BR/cases/[slug]`)

Add case metadata to `CASES` array in `app/data.ts` with localized titles, descriptions, and links.

### Updating Portfolio Content
Edit `app/data.ts` to modify:
- Projects (name, description, link, video)
- Work experience (company, title, dates, link)
- Cases (localized titles, descriptions, links)
- Social links
- Email address

## Important Files

- `lib/routing.ts`: i18n routing configuration and navigation wrappers
- `lib/i18n.ts`: i18n request configuration
- `middleware.ts`: Locale detection and routing middleware
- `next.config.mjs`: Next.js configuration with MDX and i18n plugins
- `app/data.ts`: Central data configuration
- `messages/`: Translation files for UI text
