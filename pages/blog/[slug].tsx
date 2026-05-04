import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import ConsultationBanner from '@/components/ConsultationBanner'
import { siteInfo, blogPosts, BlogPost } from '@/lib/content'

interface Props {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug)
  if (!post) return { notFound: true }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  return { props: { post, relatedPosts } }
}

export default function BlogPostPage({ post, relatedPosts }: Props) {
  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <article className="max-w-3xl">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
              {post.title}
            </h1>
            <p className="text-gray-600 text-lg">{post.excerpt}</p>
          </header>

          <div className="prose max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>

          {/* Author */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-gray-500">
              Published by <span className="font-medium text-primary">{siteInfo.name}</span>
            </p>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="card block group">
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                  {related.category}
                </span>
                <h3 className="text-lg font-heading font-bold text-primary mt-3 group-hover:text-accent transition-colors">
                  {related.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <ConsultationBanner />
    </>
  )
}
