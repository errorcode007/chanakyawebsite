import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
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
  )
}
