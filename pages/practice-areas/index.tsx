import Link from 'next/link'
import { m } from 'framer-motion'
import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import ConsultationBanner from '@/components/ConsultationBanner'
import PracticeIcon from '@/components/PracticeIcon'
import { siteInfo, practiceAreas } from '@/lib/content'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function PracticeAreas() {
  return (
    <>
      <SEOHead
        title="Practice Areas"
        description={`${siteInfo.name} offers 18+ legal services including civil litigation, criminal defence, corporate law, family law, and more in Lucknow, UP.`}
        path="/practice-areas"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Practice Areas' }]} />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Our Practice Areas</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide comprehensive legal services across 18 specialized areas of law,
            serving individuals and businesses throughout Lucknow and Uttar Pradesh.
          </p>
        </div>

        <m.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {practiceAreas.map((area) => (
            <m.div key={area.slug} variants={fadeInUp}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="card block h-full hover:shadow-md group"
              >
                <PracticeIcon slug={area.slug} className="w-8 h-8 mb-3" />
                <h2 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {area.name}
                </h2>
                <p className="text-gray-600 text-sm">{area.shortDescription}</p>
                <span className="text-accent text-sm font-medium mt-3 inline-block">
                  Learn More &rarr;
                </span>
              </Link>
            </m.div>
          ))}
        </m.div>
      </div>

      <ConsultationBanner />
    </>
  )
}
