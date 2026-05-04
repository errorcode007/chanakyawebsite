import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import ConsultationBanner from '@/components/ConsultationBanner'
import PracticeIcon from '@/components/PracticeIcon'
import { siteInfo, practiceAreas, PracticeArea } from '@/lib/content'

interface Props {
  area: PracticeArea
  relatedAreas: PracticeArea[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = practiceAreas.map((area) => ({
    params: { slug: area.slug },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const area = practiceAreas.find((a) => a.slug === params?.slug)
  if (!area) return { notFound: true }

  const relatedAreas = practiceAreas
    .filter((a) => a.slug !== area.slug)
    .slice(0, 4)

  return { props: { area, relatedAreas } }
}

export default function PracticeAreaPage({ area, relatedAreas }: Props) {
  return (
    <>
      <SEOHead
        title={`${area.name} - Lawyer in Lucknow`}
        description={`${area.shortDescription} Expert ${area.name.toLowerCase()} services by ${siteInfo.name} in Lucknow, Uttar Pradesh.`}
        path={`/practice-areas/${area.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Practice Areas', href: '/practice-areas' },
            { label: area.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <PracticeIcon slug={area.slug} className="w-10 h-10" />
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary">
                {area.name}
              </h1>
            </div>

            <div className="prose max-w-none">
              {area.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 bg-primary/5 rounded-xl p-6">
              <h3 className="font-heading font-bold text-primary mb-2">
                Need Help with {area.name}?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Schedule a consultation with our experienced advocates to discuss your case.
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="font-heading font-bold text-primary mb-4">Related Services</h3>
              <div className="space-y-3">
                {relatedAreas.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/practice-areas/${related.slug}`}
                    className="block card p-4 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <PracticeIcon slug={related.slug} className="w-5 h-5" />
                      <span className="text-sm font-medium text-primary">{related.name}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 bg-accent/10 rounded-xl p-6">
                <h4 className="font-heading font-bold text-primary mb-2">Contact Us</h4>
                <p className="text-sm text-gray-600 mb-2">📞 {siteInfo.phone}</p>
                <p className="text-sm text-gray-600 mb-2">✉️ {siteInfo.email}</p>
                <p className="text-sm text-gray-600">🕐 {siteInfo.hours}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <ConsultationBanner />
    </>
  )
}
