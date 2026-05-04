import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LazyMotion, domAnimation } from 'framer-motion'
import Layout from '@/components/Layout'
import { playfair, inter } from '@/lib/fonts'

export default function App({ Component, pageProps }: AppProps) {
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
