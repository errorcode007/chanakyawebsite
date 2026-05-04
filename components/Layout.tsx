import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFAB from './WhatsAppFAB'
import BCIBanner from './BCIBanner'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFAB />
      <BCIBanner />
    </div>
  )
}
