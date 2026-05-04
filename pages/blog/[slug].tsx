import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next'
import SEOHead from '@/components/SEOHead'
import Breadcrumb from '@/components/Breadcrumb'
import ConsultationBanner from '@/components/ConsultationBanner'
import { siteInfo } from '@/lib/content'
import { getAllPosts, getRelatedPosts, getAdjacentPosts, BlogPost } from '@/lib/blog'

interface Props {
  post: BlogPost
  relatedPosts: BlogPost[]
  prevPost: BlogPost | null
  nextPost: BlogPost | null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts().map((post) => ({
    params: { slug: post.slug },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === params?.slug)
  if (!post) return { notFound: true }

  const relatedPosts = getRelatedPosts(post.slug, 3)
  const { prev, next } = getAdjacentPosts(post.slug)

  return { props: { post, relatedPosts, prevPost: prev, nextPost: next } }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `${siteInfo.domain}/blog/${slug}`
  const text = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const copyLink = () => {
    navigator.clipboard.writeText(url)
    alert('Link copied!')
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-500 font-medium">Share:</span>
      <a
        href={`https://wa.me/?text=${text}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-600 transition-colors"
        title="Share on WhatsApp"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-colors"
        title="Share on X"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-700 transition-colors"
        title="Share on LinkedIn"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
      <button
        onClick={copyLink}
        className="text-gray-400 hover:text-primary transition-colors"
        title="Copy link"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.856-4.07a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364l1.757 1.757" transform="translate(0,2)"/></svg>
      </button>
    </div>
  )
}

export default function BlogPostPage({ post, relatedPosts, prevPost, nextPost }: Props) {
  const { t } = useTranslation('blog')
  const { t: tc } = useTranslation('common')
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: siteInfo.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteInfo.name,
    },
  }

  return (
    <>
      <SEOHead
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        path={`/blog/${post.slug}`}
        jsonLd={articleJsonLd}
        article={{ publishedTime: post.date, tags: post.tags }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article */}
          <article className="lg:col-span-2">
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                <span className="text-sm text-gray-400">{post.readingTime} min read</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
                {post.title}
              </h1>
              <p className="text-gray-600 text-lg">{post.excerpt}</p>
            </header>

            <div className="prose max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent prose-strong:text-primary prose-li:text-gray-600">
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share + Author */}
            <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-gray-500">
                {t('publishedBy')} <span className="font-medium text-primary">{siteInfo.name}</span>
              </p>
              <ShareButtons title={post.title} slug={post.slug} />
            </div>

            {/* Prev/Next Navigation */}
            <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="card p-4 group">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">{t('previous')}</span>
                  <p className="text-sm font-heading font-bold text-primary mt-1 group-hover:text-accent transition-colors line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              ) : <div />}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="card p-4 group text-right">
                  <span className="text-xs text-gray-400 uppercase tracking-wide">{t('next')}</span>
                  <p className="text-sm font-heading font-bold text-primary mt-1 group-hover:text-accent transition-colors line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </nav>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-primary mb-4">{t('relatedArticles')}</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block card p-4 hover:shadow-sm group"
                      >
                        <span className="text-xs text-accent font-medium">{related.category}</span>
                        <p className="text-sm font-heading font-bold text-primary mt-1 group-hover:text-accent transition-colors line-clamp-2">
                          {related.title}
                        </p>
                        <span className="text-xs text-gray-400 mt-1 block">{related.readingTime} min read</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultation CTA */}
              <div className="bg-primary rounded-xl p-6 text-white">
                <h4 className="font-heading font-bold text-lg mb-2">{t('needLegalAdvice')}</h4>
                <p className="text-gray-300 text-sm mb-4">
                  {t('scheduleConsultation')}
                </p>
                <Link href="/contact" className="inline-block bg-accent text-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors text-sm">
                  {tc('buttons.bookConsultation')}
                </Link>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm text-gray-300">{t('info.orCallDirectly', { ns: 'contact' })}</p>
                  <p className="text-white font-semibold mt-1">{siteInfo.phone}</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-accent/10 rounded-xl p-6">
                <h4 className="font-heading font-bold text-primary mb-2">{tc('footer.contactUs')}</h4>
                <p className="text-sm text-gray-600 mb-2">{siteInfo.email}</p>
                <p className="text-sm text-gray-600">{siteInfo.hours}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <ConsultationBanner />
    </>
  )
}
