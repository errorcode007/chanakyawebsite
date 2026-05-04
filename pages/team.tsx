import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import ConsultationBanner from '@/components/ConsultationBanner'
import { siteInfo, teamMembers } from '@/lib/content'

export default function Team() {
  return (
    <>
      <SEOHead
        title="Our Team"
        description={`Meet the experienced advocates at ${siteInfo.name}. Our team brings decades of combined legal expertise across civil, criminal, corporate, and family law.`}
        path="/team"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Our Team' }]} />

        <h1 className="text-4xl font-heading font-bold text-primary mb-4">Our Advocates</h1>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Our team of dedicated legal professionals brings diverse expertise and a shared
          commitment to achieving the best outcomes for our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
          {teamMembers.map((member) => (
            <div key={member.name} className="card text-center">
              {member.photo ? (
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-primary font-heading font-bold">
                    {member.name.split(' ').slice(-1)[0][0]}
                  </span>
                </div>
              )}
              <h3 className="text-lg font-heading font-bold text-primary">{member.name}</h3>
              <p className="text-accent text-sm font-medium mb-2">{member.designation}</p>
              <p className="text-gray-600 text-sm mb-1">{member.specialization}</p>
              {member.barEnrolment && (
                <p className="text-gray-500 text-xs">Bar: {member.barEnrolment}</p>
              )}
              <p className="text-gray-500 text-xs">{member.yearsOfPractice}+ years of practice</p>
            </div>
          ))}
        </div>
      </div>

      <ConsultationBanner />
    </>
  )
}
