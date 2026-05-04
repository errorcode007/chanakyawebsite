import { useState, FormEvent } from 'react'
import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import { siteInfo, practiceAreas } from '@/lib/content'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: siteInfo.name,
  telephone: siteInfo.phone,
  email: siteInfo.email,
  url: siteInfo.domain,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'LGF 51, Crystal City Center, below KFC, Opp. Lucknow Public Collegiate',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    postalCode: '226012',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.7805426,
    longitude: 80.925765,
  },
  openingHours: 'Mo-Sa 09:00-22:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(siteInfo.rating),
    reviewCount: String(siteInfo.reviewCount),
  },
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xjglynlk', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEOHead
        title="Contact Us"
        description={`Contact ${siteInfo.name} for a free legal consultation. Call ${siteInfo.phone} or visit our office at Crystal City Center, Lucknow.`}
        path="/contact"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Contact Us' }]} />

        <h1 className="text-4xl font-heading font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl">
          Schedule a consultation with our advocates. We are available Monday to Saturday
          until 10:00 PM.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <span className="text-4xl mb-4 block">✓</span>
                <h3 className="text-xl font-heading font-bold text-green-800 mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-green-700">
                  We will get back to you within 24 hours. For urgent matters, please call us directly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-accent font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                  >
                    <option value="">Select a service</option>
                    {practiceAreas.map((area) => (
                      <option key={area.slug} value={area.name}>
                        {area.name}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none resize-none"
                    placeholder="Briefly describe your legal matter..."
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                    Something went wrong. Please try again or call us directly at {siteInfo.phone}.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-xs text-gray-500">
                  * Submitting this form does not establish an advocate-client relationship.
                  Your information will be kept confidential.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-heading font-bold text-primary mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5">📍</span>
                  <p className="text-gray-600 text-sm">{siteInfo.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span>📞</span>
                  <a href={`tel:${siteInfo.phone}`} className="text-accent hover:underline">
                    {siteInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span>✉️</span>
                  <a href={`mailto:${siteInfo.email}`} className="text-accent hover:underline">
                    {siteInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span>🕐</span>
                  <span className="text-gray-600 text-sm">{siteInfo.hours}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent('Hello, I would like to schedule a consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <p className="font-semibold">Chat on WhatsApp</p>
                <p className="text-sm text-green-100">Quick response, usually within minutes</p>
              </div>
            </a>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src={siteInfo.mapsEmbed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
