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
