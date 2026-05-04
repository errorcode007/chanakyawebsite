import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { siteInfo } from '@/lib/content'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const listItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteInfo.domain,
    },
    ...items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: item.label,
      ...(item.href ? { item: `${siteInfo.domain}${item.href}` } : {}),
    })),
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: listItems,
  }
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const jsonLd = getBreadcrumbJsonLd(items)
  const { t } = useTranslation('common')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <ol className="flex items-center space-x-2 rtl:space-x-reverse">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              {t('nav.home')}
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center space-x-2 rtl:space-x-reverse">
              <span>/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-accent transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-text font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
