import Link from 'next/link'
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center space-x-2">
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
