import { m } from 'framer-motion'
import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import ConsultationBanner from '@/components/ConsultationBanner'
import { siteInfo } from '@/lib/content'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description={`Learn about ${siteInfo.name} - our history, mission, and commitment to providing quality legal services in Lucknow, Uttar Pradesh.`}
        path="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* Header */}
        <m.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <m.h1 variants={fadeInUp} className="text-4xl font-heading font-bold text-primary mb-6">
            About Chanakya Legal Chamber
          </m.h1>

          {/* History */}
          <m.div variants={fadeInUp} className="prose max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Chanakya Legal Chamber was founded with a singular vision: to provide accessible,
              high-quality legal services to the people of Lucknow and Uttar Pradesh. Named after
              the legendary strategist Chanakya, our chamber embodies the principles of sharp
              legal acumen, strategic thinking, and unwavering commitment to justice.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Over the years, we have built a reputation for thorough preparation, aggressive
              advocacy, and honest counsel. Our advocates appear regularly before district courts,
              the Lucknow Bench of the Allahabad High Court, the National Green Tribunal, NCLT,
              and various tribunals and commissions across Uttar Pradesh.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Today, with 18 specialized practice areas and a team of dedicated advocates, we
              serve individuals, families, and businesses with the same commitment to excellence
              that has earned us a 4.3-star Google rating and the trust of hundreds of clients.
            </p>
          </m.div>
        </m.div>

        {/* Mission & Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                icon: '⚖️',
                desc: 'We uphold the highest ethical standards in our practice. Honest counsel, even when it is not what the client wants to hear, is the foundation of trust.',
              },
              {
                title: 'Expertise',
                icon: '📚',
                desc: 'Our advocates bring deep knowledge of Indian law, UP court procedures, and domain-specific expertise across 18 practice areas to every matter we handle.',
              },
              {
                title: 'Client Focus',
                icon: '🤝',
                desc: 'Every case is personal. We keep our clients informed at every stage, explain legal options in plain language, and fight for the best possible outcome.',
              },
            ].map((value) => (
              <div key={value.title} className="card text-center">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BCI Note */}
        <section className="bg-gray-50 rounded-xl p-6 mb-16">
          <h3 className="font-heading font-bold text-primary mb-2">Bar Council of India Compliance</h3>
          <p className="text-gray-600 text-sm">
            Chanakya Legal Chamber is compliant with the Bar Council of India rules on advertising
            and solicitation. This website is intended for informational purposes only and should
            not be construed as solicitation or advertisement. The information provided does not
            constitute legal advice and should not be relied upon as such.
          </p>
        </section>

        {/* Google Maps */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Office</h2>
          <p className="text-gray-600 mb-6">{siteInfo.address}</p>
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src={siteInfo.mapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chanakya Legal Chamber Office Location"
            />
          </div>
        </section>
      </div>

      <ConsultationBanner />
    </>
  )
}
