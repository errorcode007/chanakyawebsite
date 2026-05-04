import '@/styles/globals.css'
import '@/lib/i18n'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LazyMotion, domAnimation } from 'framer-motion'
import Layout from '@/components/Layout'
import { playfair, inter } from '@/lib/fonts'

export default function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation()

  useEffect(() => {
    // Set document direction and lang based on current language
    const lang = i18n.language
    const dir = lang === 'ur' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    document.documentElement.dir = dir

    // Dynamically load fonts for Urdu and Bengali
    if (lang === 'ur') {
      const link = document.createElement('link')
      link.id = 'font-urdu'
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;500;600;700&display=swap'
      if (!document.getElementById('font-urdu')) {
        document.head.appendChild(link)
      }
    }
    if (lang === 'bn') {
      const link = document.createElement('link')
      link.id = 'font-bengali'
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap'
      if (!document.getElementById('font-bengali')) {
        document.head.appendChild(link)
      }
    }
  }, [i18n.language])

  return (
    <LazyMotion features={domAnimation}>
      <div className={`${playfair.variable} ${inter.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </LazyMotion>
  )
}
