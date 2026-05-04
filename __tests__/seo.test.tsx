import { render } from '@testing-library/react'
import SEOHead from '@/components/SEOHead'

// Mock next/head to render into document body for testing
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  }
})

describe('SEOHead', () => {
  it('renders title with site name suffix', () => {
    const { container } = render(
      <SEOHead title="Contact Us" description="Test desc" path="/contact" />
    )
    const title = container.querySelector('title')
    expect(title?.textContent).toContain('Contact Us')
  })

  it('renders meta description', () => {
    const { container } = render(
      <SEOHead title="Test" description="A test description" path="/test" />
    )
    const meta = container.querySelector('meta[name="description"]')
    expect(meta?.getAttribute('content')).toBe('A test description')
  })

  it('renders canonical URL', () => {
    const { container } = render(
      <SEOHead title="Test" description="Desc" path="/about" />
    )
    const link = container.querySelector('link[rel="canonical"]')
    expect(link?.getAttribute('href')).toContain('/about')
  })

  it('renders JSON-LD when provided', () => {
    const jsonLd = { '@context': 'https://schema.org', '@type': 'LegalService' }
    const { container } = render(
      <SEOHead title="Test" description="Desc" path="/" jsonLd={jsonLd} />
    )
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script?.textContent).toContain('LegalService')
  })
})
