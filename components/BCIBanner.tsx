import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'bci-disclaimer-accepted'

export default function BCIBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY)
      if (!accepted) setVisible(true)
    } catch {
      // localStorage unavailable (private mode) — show banner
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Ignore — banner will show again next visit
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-t border-accent/30 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-gray-300 flex-1">
          As per Bar Council of India rules, this website is not an advertisement or solicitation.{' '}
          <Link href="/disclaimer" className="text-accent underline hover:text-accent/80">
            Read full disclaimer
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="text-gray-400 hover:text-white shrink-0 p-1"
          aria-label="Dismiss disclaimer banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
