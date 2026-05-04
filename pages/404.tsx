import Link from 'next/link'
import SEOHead from '@/components/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you are looking for does not exist." />

      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}
