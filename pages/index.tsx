import Link from 'next/link'
import { GetStaticProps } from 'next'
import { m } from 'framer-motion'
import SEOHead from '@/components/SEOHead'
import ConsultationBanner from '@/components/ConsultationBanner'
import PracticeIcon from '@/components/PracticeIcon'
import { siteInfo, practiceAreas, testimonials } from '@/lib/content'
import { getFeaturedPosts, BlogPost } from '@/lib/blog'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: siteInfo.name,
  description: siteInfo.tagline,
  url: siteInfo.domain,
  telephone: siteInfo.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'LGF 51, Crystal City Center, below KFC, Opp. Lucknow Public Collegiate',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    postalCode: '226012',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(siteInfo.rating),
    reviewCount: String(siteInfo.reviewCount),
  },
}

const stats = [
  { label: 'Years Active', value: '15+' },
  { label: 'Services Offered', value: '18+' },
  { label: 'Google Rating', value: `${siteInfo.rating}★` },
  { label: 'Location', value: 'Lucknow' },
]

const featuredAreas = practiceAreas.slice(0, 6)
const featuredTestimonials = testimonials.slice(0, 3)

interface HomeProps {
  latestPosts: BlogPost[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return { props: { latestPosts: getFeaturedPosts(3) } }
}

export default function Home({ latestPosts }: HomeProps) {
  return (
    <>
      <SEOHead
        title="Home"
        description={`${siteInfo.name} - ${siteInfo.tagline}. Expert legal services in civil, criminal, corporate, and family law. Located in Lucknow, UP.`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <m.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
              <m.p variants={fadeInUp} className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
                {siteInfo.tagline}
              </m.p>
              <m.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                {siteInfo.name}
              </m.h1>
              <m.p variants={fadeInUp} className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                Expert legal counsel across 18 practice areas. From civil litigation to criminal defence,
                we protect your rights with integrity and dedication.
              </m.p>
              <m.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Book Free Consultation
                </Link>
                <Link href="/practice-areas" className="btn-secondary text-center">
                  Our Services
                </Link>
              </m.div>
            </m.div>
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block flex-shrink-0"
            >
              <img
                src={siteInfo.logo}
                alt={siteInfo.name}
                className="w-64 h-64 rounded-full object-cover bg-white/10 shadow-2xl ring-4 ring-accent/30"
              />
            </m.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent/10 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <m.h2 variants={fadeInUp} className="text-3xl font-heading font-bold text-primary mb-6">
              About Our Chamber
            </m.h2>
            <m.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-4">
              Chanakya Legal Chamber has been serving clients across Lucknow and Uttar Pradesh with
              dedicated legal representation. Our team of experienced advocates brings deep knowledge
              of Indian law and the UP court system to every case we handle.
            </m.p>
            <m.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-8">
              From complex corporate disputes to sensitive family matters, we approach every case with
              the thoroughness and strategic thinking our clients deserve. Our commitment to integrity,
              transparency, and results has earned us a 4.3-star Google rating.
            </m.p>
            <m.div variants={fadeInUp}>
              <Link href="/about" className="text-accent font-semibold hover:underline">
                Read More About Us &rarr;
              </Link>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* Featured Practice Areas */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <m.h2 variants={fadeInUp} className="text-3xl font-heading font-bold text-primary mb-2 text-center">
              Our Practice Areas
            </m.h2>
            <m.p variants={fadeInUp} className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We provide expert legal services across 18 specialized areas of law.
            </m.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAreas.map((area) => (
                <m.div key={area.slug} variants={fadeInUp}>
                  <Link href={`/practice-areas/${area.slug}`} className="card block h-full hover:shadow-md">
                    <PracticeIcon slug={area.slug} className="w-8 h-8 mb-3" />
                    <h3 className="text-lg font-heading font-bold text-primary mb-2">{area.name}</h3>
                    <p className="text-gray-600 text-sm">{area.shortDescription}</p>
                  </Link>
                </m.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/practice-areas" className="text-accent font-semibold hover:underline">
                View All 18 Practice Areas &rarr;
              </Link>
            </div>
          </m.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Why Choose Chanakya Legal Chamber
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⚖️', title: 'Experienced Advocates', desc: 'Our team brings decades of combined experience across UP courts and tribunals.' },
              { icon: '🤝', title: 'Client-First Approach', desc: 'We prioritize your interests, keeping you informed at every stage of your case.' },
              { icon: '📋', title: '18+ Practice Areas', desc: 'Comprehensive legal services under one roof, from civil to criminal to corporate law.' },
              { icon: '🏆', title: '4.3★ Google Rating', desc: 'Our track record of results and client satisfaction speaks for itself.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t, i) => (
              <div key={i} className="card">
                <div className="text-accent mb-2">
                  {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">&ldquo;{t.review}&rdquo;</p>
                <p className="font-semibold text-primary">{t.clientName}</p>
                <p className="text-xs text-gray-500">{t.caseType}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials" className="text-accent font-semibold hover:underline">
              Read All Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-2 text-center">
            Latest Legal Insights
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Stay informed with our latest articles on Indian law and legal rights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card block group h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readingTime} min read</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                <span className="text-accent text-sm font-medium mt-3 inline-block">Read More &rarr;</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-accent font-semibold hover:underline">
              View All Articles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationBanner />
    </>
  )
}
