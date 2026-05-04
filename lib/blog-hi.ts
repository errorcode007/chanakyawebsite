import { BlogPost } from './blog/types'

// Import all Hindi blog posts
import howToFileCivilSuit from './blog/hi/how-to-file-civil-suit-lucknow'
import propertyDispute from './blog/hi/property-dispute-resolution-up'
import understandingCivilLitigation from './blog/hi/understanding-civil-litigation-up-courts'
import contractsGuide from './blog/hi/contracts-agreements-india-guide'
import bailGuide from './blog/hi/bail-anticipatory-bail-india'
import rightsArrestedPerson from './blog/hi/rights-arrested-person-india'
import criminalDefence from './blog/hi/criminal-defence-strategy-india'
import rightsWhenArrested from './blog/hi/rights-when-arrested-complete-guide'
import divorceProcess from './blog/hi/divorce-process-india-guide'
import childCustody from './blog/hi/child-custody-india-law'
import domesticViolence from './blog/hi/domestic-violence-act-india'
import howToFileDivorce from './blog/hi/how-to-file-divorce-india'
import businessRegistration from './blog/hi/business-registration-legal-checklist'
import corporateLitigation from './blog/hi/corporate-litigation-india'
import employmentRights from './blog/hi/employment-rights-india-workers'
import protectingBusiness from './blog/hi/protecting-business-essential-legal-agreements'
import writPetition from './blog/hi/how-to-file-writ-petition-allahabad-high-court'
import appealsGuide from './blog/hi/appeals-india-court-system'
import consumerComplaint from './blog/hi/consumer-complaint-india-ncdrc'
import environmentLitigation from './blog/hi/environment-litigation-india'
import disabilityRights from './blog/hi/disability-rights-legal-india'
import educationRights from './blog/hi/education-rights-india-legal'
import legalMalpractice from './blog/hi/legal-malpractice-india-advocate'
import whenToHireLawyer from './blog/hi/when-to-hire-lawyer-india'

const allHindiPosts: BlogPost[] = [
  howToFileCivilSuit,
  propertyDispute,
  understandingCivilLitigation,
  contractsGuide,
  bailGuide,
  rightsArrestedPerson,
  criminalDefence,
  rightsWhenArrested,
  divorceProcess,
  childCustody,
  domesticViolence,
  howToFileDivorce,
  businessRegistration,
  corporateLitigation,
  employmentRights,
  protectingBusiness,
  writPetition,
  appealsGuide,
  consumerComplaint,
  environmentLitigation,
  disabilityRights,
  educationRights,
  legalMalpractice,
  whenToHireLawyer,
]

/** All Hindi posts sorted by date (newest first) */
export function getAllHindiPosts(): BlogPost[] {
  return [...allHindiPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/** Get Hindi post by slug */
export function getHindiPostBySlug(slug: string): BlogPost | undefined {
  return allHindiPosts.find((p) => p.slug === slug)
}
