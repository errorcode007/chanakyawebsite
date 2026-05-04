import { useTranslation } from 'react-i18next'
import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import ConsultationBanner from '@/components/ConsultationBanner'
import { siteInfo, testimonials } from '@/lib/content'

export default function Testimonials() {
  const { t } = useTranslation('testimonials')
  return (
    <>
      <SEOHead
        title="Client Testimonials"
        description={`Read what our clients say about ${siteInfo.name}. Rated ${siteInfo.rating}★ on Google with ${siteInfo.reviewCount} reviews. Real feedback from real cases.`}
        path="/testimonials"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Testimonials' }]} />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">{t('title')}</h1>
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
            <span className="text-accent text-lg">★</span>
            <span className="font-bold text-primary">{siteInfo.rating}</span>
            <span className="text-gray-600 text-sm">from {siteInfo.reviewCount} Google reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <div className="text-accent mb-3">
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <p className="text-gray-600 text-sm mb-4 italic leading-relaxed">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="border-t pt-3 mt-auto">
                <p className="font-semibold text-primary">{t.clientName}</p>
                <p className="text-xs text-gray-500">{t.caseType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ConsultationBanner />
    </>
  )
}
