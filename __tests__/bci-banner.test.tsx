import { render, screen, fireEvent } from '@testing-library/react'
import BCIBanner from '@/components/BCIBanner'

describe('BCIBanner', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders the BCI disclaimer banner', () => {
    render(<BCIBanner />)
    expect(screen.getByText(/bar council of india/i)).toBeInTheDocument()
  })

  it('hides banner after clicking accept/close', () => {
    render(<BCIBanner />)
    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)
    expect(screen.queryByText(/bar council of india/i)).not.toBeInTheDocument()
  })

  it('stores acceptance in localStorage', () => {
    render(<BCIBanner />)
    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)
    expect(localStorage.getItem('bci-accepted')).toBe('true')
  })

  it('does not show banner if already accepted', () => {
    localStorage.setItem('bci-accepted', 'true')
    render(<BCIBanner />)
    expect(screen.queryByText(/bar council of india/i)).not.toBeInTheDocument()
  })
})
