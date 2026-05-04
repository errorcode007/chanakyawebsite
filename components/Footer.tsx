import Link from 'next/link'
import { siteInfo } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
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
              Providing quality legal services across Lucknow and Uttar Pradesh
              with integrity, expertise, and client-focused advocacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/practice-areas" className="hover:text-accent transition-colors">Practice Areas</Link></li>
              <li><Link href="/team" className="hover:text-accent transition-colors">Our Team</Link></li>
              <li><Link href="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <span className="mt-0.5">📍</span>
                <span>{siteInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <a href={`tel:${siteInfo.phone}`} className="hover:text-accent transition-colors">
                  {siteInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <a href={`mailto:${siteInfo.email}`} className="hover:text-accent transition-colors">
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>🕐</span>
                <span>{siteInfo.hours}</span>
              </li>
            </ul>
          </div>

          {/* BCI Disclaimer */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal Disclaimer</h4>
            <p className="text-xs leading-relaxed text-gray-400">
              As per the rules of the Bar Council of India, advocates are not permitted to
              solicit work or advertise. This website is meant solely for the purpose of
              information and not for the purpose of advertising.{' '}
              <Link href="/disclaimer" className="text-accent hover:underline">
                Read full disclaimer
              </Link>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
