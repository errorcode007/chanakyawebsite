import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import { siteInfo } from '@/lib/content'

export default function Disclaimer() {
  return (
    <>
      <SEOHead
        title="Legal Disclaimer"
        description="Bar Council of India disclaimer for Chanakya Legal Chamber website. This site is for informational purposes only."
        path="/disclaimer"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Disclaimer' }]} />

        <h1 className="text-4xl font-heading font-bold text-primary mb-8">Legal Disclaimer</h1>

        <div className="prose max-w-none text-gray-600 space-y-6">
          <section>
            <h2 className="text-xl font-heading font-bold text-primary">Bar Council of India Rules</h2>
            <p>
              As per the rules of the Bar Council of India, advocates and law firms are not permitted
              to solicit work or advertise in any manner. By accessing this website ({siteInfo.domain}),
              you acknowledge and confirm that:
            </p>
          </section>

          <section>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                There has been no advertisement, solicitation, invitation, or inducement of any sort
                whatsoever from {siteInfo.name} or any of its members to solicit any work through
                this website.
              </li>
              <li>
                The purpose of this website is to provide information about {siteInfo.name}, its
                practice areas, and its advocates for general informational purposes only.
              </li>
              <li>
                The information provided on this website does not constitute legal advice and should
                not be construed as such.
              </li>
              <li>
                {siteInfo.name} does not wish to represent anyone desiring representation on the
                basis of viewing this website in a jurisdiction where this website may not comply
                with all laws and ethical rules.
              </li>
              <li>
                The content of this website is the intellectual property of {siteInfo.name} and
                cannot be reproduced without prior written consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-primary">No Advocate-Client Relationship</h2>
            <p>
              Accessing this website or contacting {siteInfo.name} through this website does not
              create an advocate-client relationship. The formation of an advocate-client
              relationship requires a formal engagement after personal consultation and mutual
              agreement on the terms and scope of representation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-primary">Confidentiality</h2>
            <p>
              Any information sent to {siteInfo.name} through this website or via email prior to
              establishing an advocate-client relationship may not be treated as confidential or
              privileged communication. Please do not send any confidential information until a
              formal advocate-client relationship has been established.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-primary">No Guarantee of Results</h2>
            <p>
              The outcome of any legal matter depends on the specific facts and circumstances of
              each case. {siteInfo.name} does not guarantee or warrant any particular result in
              any matter. Past results do not guarantee a similar outcome in future cases.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-primary">External Links</h2>
            <p>
              This website may contain links to external websites. {siteInfo.name} is not
              responsible for the content, accuracy, or privacy practices of any linked external
              sites.
            </p>
          </section>

          <section className="bg-gray-50 rounded-xl p-6">
            <p className="text-sm">
              <strong>Last updated:</strong> January 2025
            </p>
            <p className="text-sm mt-2">
              If you have any questions about this disclaimer, please contact us at{' '}
              <a href={`mailto:${siteInfo.email}`} className="text-accent hover:underline">
                {siteInfo.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
