import Head from 'next/head'
import { siteInfo } from '@/lib/content'

interface SEOHeadProps {
  title: string
  description: string
  path?: string
  ogImage?: string
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  article?: {
    publishedTime: string
    tags?: string[]
  }
}

export default function SEOHead({ title, description, path = '', ogImage, jsonLd, article }: SEOHeadProps) {
  const fullTitle = `${title} | ${siteInfo.name}`
  const url = `${siteInfo.domain}${path}`
  const image = ogImage || `${siteInfo.domain}/icon-512.png`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content={siteInfo.name} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Article meta */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:author" content={siteInfo.name} />
          {article.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd && (
        Array.isArray(jsonLd) ? (
          jsonLd.map((schema, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )
      )}
    </Head>
  )
}
