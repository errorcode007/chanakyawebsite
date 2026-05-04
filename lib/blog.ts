import { BlogPost, BlogCategory } from './blog/types'

// Import all blog posts
import understandingCivilLitigation from './blog/understanding-civil-litigation-up-courts'
import rightsWhenArrested from './blog/rights-when-arrested-complete-guide'
import howToFileDivorce from './blog/how-to-file-divorce-india'
import protectingBusiness from './blog/protecting-business-essential-legal-agreements'
import howToFileCivilSuit from './blog/how-to-file-civil-suit-lucknow'
import propertyDispute from './blog/property-dispute-resolution-up'
import contractsGuide from './blog/contracts-agreements-india-guide'
import bailGuide from './blog/bail-anticipatory-bail-india'
import rightsArrestedPerson from './blog/rights-arrested-person-india'
import criminalDefence from './blog/criminal-defence-strategy-india'
import divorceProcess from './blog/divorce-process-india-guide'
import childCustody from './blog/child-custody-india-law'
import domesticViolence from './blog/domestic-violence-act-india'
import businessRegistration from './blog/business-registration-legal-checklist'
import corporateLitigation from './blog/corporate-litigation-india'
import employmentRights from './blog/employment-rights-india-workers'
import writPetition from './blog/how-to-file-writ-petition-allahabad-high-court'
import appealsGuide from './blog/appeals-india-court-system'
import consumerComplaint from './blog/consumer-complaint-india-ncdrc'
import environmentLitigation from './blog/environment-litigation-india'
import disabilityRights from './blog/disability-rights-legal-india'
import educationRights from './blog/education-rights-india-legal'
import legalMalpractice from './blog/legal-malpractice-india-advocate'
import whenToHireLawyer from './blog/when-to-hire-lawyer-india'

export type { BlogPost, BlogCategory } from './blog/types'

const allPosts: BlogPost[] = [
  understandingCivilLitigation,
  rightsWhenArrested,
  howToFileDivorce,
  protectingBusiness,
  howToFileCivilSuit,
  propertyDispute,
  contractsGuide,
  bailGuide,
  rightsArrestedPerson,
  criminalDefence,
  divorceProcess,
  childCustody,
  domesticViolence,
  businessRegistration,
  corporateLitigation,
  employmentRights,
  writPetition,
  appealsGuide,
  consumerComplaint,
  environmentLitigation,
  disabilityRights,
  educationRights,
  legalMalpractice,
  whenToHireLawyer,
]

/** All posts sorted by date (newest first) */
export function getAllPosts(): BlogPost[] {
  return [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/** Single post by slug */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug)
}

/** Posts filtered by category, sorted by date */
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category)
}

/** Latest N posts for homepage teaser */
export function getFeaturedPosts(count = 3): BlogPost[] {
  return getAllPosts().slice(0, count)
}

/** All unique categories that have posts */
export function getCategories(): BlogCategory[] {
  const cats = new Set(allPosts.map((p) => p.category))
  return Array.from(cats).sort()
}

/** Related posts (same category, excluding current) */
export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getPostBySlug(slug)
  if (!current) return []
  return getAllPosts()
    .filter((p) => p.category === current.category && p.slug !== slug)
    .slice(0, count)
}

/** Get next and previous posts for navigation */
export function getAdjacentPosts(slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const sorted = getAllPosts()
  const index = sorted.findIndex((p) => p.slug === slug)
  return {
    prev: index < sorted.length - 1 ? sorted[index + 1] : null,
    next: index > 0 ? sorted[index - 1] : null,
  }
}
