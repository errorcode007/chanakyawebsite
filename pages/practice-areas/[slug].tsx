import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import ConsultationBanner from '@/components/ConsultationBanner'
import PracticeIcon from '@/components/PracticeIcon'
import { siteInfo, practiceAreas, PracticeArea } from '@/lib/content'
import { getAllPosts, BlogPost, BlogCategory } from '@/lib/blog'

// Map practice area slugs to blog categories for related posts
const slugToBlogCategory: Record<string, BlogCategory> = {
  'civil-litigation': 'Civil Litigation',
  'property-law': 'Civil Litigation',
  'criminal-law': 'Criminal Law',
  'criminal-defence-litigation': 'Criminal Law',
  'family-law': 'Family & Matrimonial',
  'divorce-law': 'Family & Matrimonial',
  'corporate-law': 'Corporate & Business',
  'business-transactions': 'Corporate & Business',
  'employment-law': 'Corporate & Business',
  'high-court-practice': 'High Court & Appeals',
  'appellate-advocacy': 'High Court & Appeals',
  'appellate-practice': 'High Court & Appeals',
  'consumer-law': 'Consumer & Environment',
  'environmental-law': 'Consumer & Environment',
  'disability-rights': 'Awareness & Rights',
  'education-law': 'Awareness & Rights',
  'legal-services': 'Awareness & Rights',
}

interface Props {
  area: PracticeArea
  relatedAreas: PracticeArea[]
  relatedPosts: BlogPost[]
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

  // Find related blog posts by matching category
  const blogCategory = slugToBlogCategory[area.slug]
  const relatedPosts = blogCategory
    ? getAllPosts().filter((p) => p.category === blogCategory).slice(0, 3)
    : getAllPosts().slice(0, 3)

  return { props: { area, relatedAreas, relatedPosts } }
}

export default function PracticeAreaPage({ area, relatedAreas, relatedPosts }: Props) {
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
            <div className="sticky top-24 space-y-8">
              {/* Related Blog Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-primary mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block card p-4 hover:shadow-sm group"
                      >
                        <p className="text-sm font-heading font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </p>
                        <span className="text-xs text-gray-400 mt-1 block">{post.readingTime} min read</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services */}
              <div>
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
              </div>

              {/* Contact Info */}
              <div className="bg-accent/10 rounded-xl p-6">
                <h4 className="font-heading font-bold text-primary mb-2">Contact Us</h4>
                <p className="text-sm text-gray-600 mb-2">{siteInfo.phone}</p>
                <p className="text-sm text-gray-600 mb-2">{siteInfo.email}</p>
                <p className="text-sm text-gray-600">{siteInfo.hours}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <ConsultationBanner />
    </>
  )
}
