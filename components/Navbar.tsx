import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { siteInfo } from '@/lib/content'
import LanguageSwitcher from './LanguageSwitcher'

const navLinks = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/about', labelKey: 'nav.about' },
  { href: '/practice-areas', labelKey: 'nav.practiceAreas' },
  { href: '/team', labelKey: 'nav.team' },
  { href: '/testimonials', labelKey: 'nav.testimonials' },
  { href: '/blog', labelKey: 'nav.blog' },
  { href: '/contact', labelKey: 'nav.contact' },
]

export default function Navbar() {
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useTranslation('common')

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={siteInfo.logo}
              alt={siteInfo.name}
              className="h-10 lg:h-14 w-10 lg:w-14 rounded-full object-cover bg-white"
            />
            <div className="hidden sm:block">
              <span className="text-accent text-lg lg:text-xl font-heading font-bold leading-tight block">
                {siteInfo.name}
              </span>
              <span className="text-gray-400 text-xs leading-tight block">
                {siteInfo.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-accent bg-white/10'
                    : 'text-gray-300 hover:text-accent hover:bg-white/5'
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <LanguageSwitcher />
            <span className="ml-2 rtl:ml-0 rtl:mr-2 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
              {t('banner.openUntil')}
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium min-h-[44px] ${
                  isActive(link.href)
                    ? 'text-accent bg-white/10'
                    : 'text-gray-300 hover:text-accent'
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <div className="px-3 py-3">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
