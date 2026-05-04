import Head from 'next/head'
import { siteInfo } from '@/lib/content'

interface SEOHeadProps {
  title: string
  description: string
  path?: string
  ogImage?: string
  jsonLd?: Record<string, unknown>
}

export default function SEOHead({ title, description, path = '', ogImage, jsonLd }: SEOHeadProps) {
  const fullTitle = `${title} | ${siteInfo.name}`
  const url = `${siteInfo.domain}${path}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteInfo.name} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  )
}
