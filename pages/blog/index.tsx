import { useState } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import ConsultationBanner from '@/components/ConsultationBanner'
import { siteInfo } from '@/lib/content'
import { getAllPosts, getCategories, BlogPost, BlogCategory } from '@/lib/blog'

interface Props {
  posts: BlogPost[]
  categories: BlogCategory[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      posts: getAllPosts(),
      categories: getCategories(),
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Blog({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  return (
    <>
      <SEOHead
        title="Blog - Legal Insights"
        description={`Legal insights and articles from ${siteInfo.name}. Learn about Indian law, your legal rights, and how to navigate the justice system in Lucknow and UP.`}
        path="/blog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Blog' }]} />

        <h1 className="text-4xl font-heading font-bold text-primary mb-4">Legal Insights</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          Articles and guides to help you understand Indian law and your legal rights.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'All'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All ({posts.length})
          </button>
          {categories.map((cat) => {
            const count = posts.filter((p) => p.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat} ({count})
              </button>
            )
          })}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card block group h-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
              </div>
              <h2 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                <span className="text-accent text-sm font-medium">Read More &rarr;</span>
                <span className="text-xs text-gray-400">{post.readingTime} min read</span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No articles found in this category.</p>
        )}
      </div>

      <ConsultationBanner />
    </>
  )
}
