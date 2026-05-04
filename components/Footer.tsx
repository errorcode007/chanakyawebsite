import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { siteInfo } from '@/lib/content'

export default function Footer() {
  const { t } = useTranslation('common')
  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <img
                src={siteInfo.logo}
                alt={siteInfo.name}
                className="h-12 w-12 rounded-full object-cover bg-white"
              />
              <div>
                <h3 className="text-accent font-heading text-lg font-bold leading-tight">{siteInfo.name}</h3>
                <p className="text-gray-400 text-xs">{siteInfo.tagline}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/practice-areas" className="hover:text-accent transition-colors">{t('nav.practiceAreas')}</Link></li>
              <li><Link href="/team" className="hover:text-accent transition-colors">{t('nav.team')}</Link></li>
              <li><Link href="/testimonials" className="hover:text-accent transition-colors">{t('nav.testimonials')}</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">{t('nav.blog')}</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2 rtl:space-x-reverse">
                <span className="mt-0.5">📍</span>
                <span>{siteInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <span>📞</span>
                <a href={`tel:${siteInfo.phone}`} className="hover:text-accent transition-colors">
                  {siteInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <span>✉️</span>
                <a href={`mailto:${siteInfo.email}`} className="hover:text-accent transition-colors">
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse">
                <span>🕐</span>
                <span>{siteInfo.hours}</span>
              </li>
            </ul>
          </div>

          {/* BCI Disclaimer */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.legalDisclaimer')}</h4>
            <p className="text-xs leading-relaxed text-gray-400">
              {t('footer.disclaimerText')}{' '}
              <Link href="/disclaimer" className="text-accent hover:underline">
                {t('footer.readFullDisclaimer')}
              </Link>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteInfo.name}. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
}
