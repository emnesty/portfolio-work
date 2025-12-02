import createMiddleware from 'next-intl/middleware'
import { routing } from './lib/routing'

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(pt-BR|en-US)/:path*',
    // Enable a redirect to a matching locale at the root
    '/((?!_next|_vercel|.*\\..*).*)'
  ],
}
