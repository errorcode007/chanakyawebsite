import Link from 'next/link'
import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import { siteInfo, blogPosts } from '@/lib/content'

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog"
        description={`Legal insights and articles from ${siteInfo.name}. Learn about Indian law, your legal rights, and how to navigate the justice system.`}
        path="/blog"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: 'Blog' }]} />

        <h1 className="text-4xl font-heading font-bold text-primary mb-4">Legal Insights</h1>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl">
          Articles and guides to help you understand Indian law and your legal rights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card block group">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
              <span className="text-accent text-sm font-medium">Read More &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
