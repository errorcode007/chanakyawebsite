import Link from 'next/link'
import { GetStaticProps } from 'next'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: siteInfo.name,
  description: siteInfo.tagline,
  url: siteInfo.domain,
  telephone: siteInfo.phone,
  email: siteInfo.email,
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What legal services does Chanakya Legal Chamber offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer 18+ legal services including civil litigation, criminal defence, family law, corporate law, high court practice, consumer law, environmental law, and more in Lucknow, Uttar Pradesh.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Chanakya Legal Chamber located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our office is at LGF 51, Crystal City Center, below KFC, Opp. Lucknow Public Collegiate, Lucknow, Uttar Pradesh 226012.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the office hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open Monday to Saturday, 9:00 AM to 10:00 PM. You can also reach us via WhatsApp for quick responses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer free consultations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer a free initial consultation. You can book one through our contact form, call us, or message us on WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which courts does Chanakya Legal Chamber practise in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We practise in Lucknow District Courts, Allahabad High Court (Lucknow Bench), various tribunals including NCLT, NGT, and consumer forums, as well as other courts across Uttar Pradesh.',
      },
    },
  ],
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
  const { t } = useTranslation('home')
  const { t: tc } = useTranslation('common')
  return (
    <>
      <SEOHead
        title="Home"
        description={`${siteInfo.name} - ${siteInfo.tagline}. Expert legal services in civil, criminal, corporate, and family law. Located in Lucknow, UP.`}
        jsonLd={[legalServiceJsonLd, faqJsonLd]}
      />

      {/* Hero */}
      <section className="bg-primary relative overflow-hidden min-h-[80svh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-36 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <m.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
              <m.p variants={fadeInUp} className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
                {t('hero.tagline')}
              </m.p>
              <m.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                {t('hero.title')}
              </m.h1>
              <m.p variants={fadeInUp} className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                {t('hero.description')}
              </m.p>
              <m.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  {tc('buttons.bookFreeConsultation')}
                </Link>
                <Link href="/practice-areas" className="btn-secondary text-center">
                  {tc('buttons.ourServices')}
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
            {[
              { value: '15+', labelKey: 'stats.yearsActive' },
              { value: '18+', labelKey: 'stats.servicesOffered' },
              { value: `${siteInfo.rating}★`, labelKey: 'stats.googleRating' },
              { value: 'Lucknow', labelKey: 'stats.location' },
            ].map((stat) => (
              <div key={stat.labelKey}>
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{t(stat.labelKey)}</p>
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
              {t('about.title')}
            </m.h2>
            <m.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-4">
              {t('about.para1')}
            </m.p>
            <m.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-8">
              {t('about.para2')}
            </m.p>
            <m.div variants={fadeInUp}>
              <Link href="/about" className="text-accent font-semibold hover:underline">
                {t('about.readMore')} &rarr;
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
              {t('practiceAreas.title')}
            </m.h2>
            <m.p variants={fadeInUp} className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              {t('practiceAreas.subtitle')}
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
                {t('practiceAreas.viewAll')} &rarr;
              </Link>
            </div>
          </m.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            {t('whyChooseUs.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '⚖️', titleKey: 'whyChooseUs.experienced.title', descKey: 'whyChooseUs.experienced.desc' },
              { icon: '🤝', titleKey: 'whyChooseUs.clientFirst.title', descKey: 'whyChooseUs.clientFirst.desc' },
              { icon: '📋', titleKey: 'whyChooseUs.practiceAreas.title', descKey: 'whyChooseUs.practiceAreas.desc' },
              { icon: '🏆', titleKey: 'whyChooseUs.rating.title', descKey: 'whyChooseUs.rating.desc' },
            ].map((item) => (
              <div key={item.titleKey} className="text-center">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">{t(item.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            {t('testimonials.title')}
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
              {t('testimonials.viewAll')} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-primary mb-2 text-center">
            {t('blog.title')}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('blog.subtitle')}
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
                <span className="text-accent text-sm font-medium mt-3 inline-block">{tc('buttons.readMore')} &rarr;</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="text-accent font-semibold hover:underline">
              {t('blog.viewAll')} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationBanner />
    </>
  )
}
