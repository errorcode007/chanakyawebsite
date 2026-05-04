export interface BlogPost {
  title: string
  slug: string
  date: string
  category: BlogCategory
  excerpt: string
  body: string
  metaTitle: string
  metaDescription: string
  tags: string[]
  readingTime: number
}

export type BlogCategory =
  | 'Civil Litigation'
  | 'Criminal Law'
  | 'Family & Matrimonial'
  | 'Corporate & Business'
  | 'High Court & Appeals'
  | 'Consumer & Environment'
  | 'Awareness & Rights'
