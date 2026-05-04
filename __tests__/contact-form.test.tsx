import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from '@/pages/contact'

// Mock next/head
jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: () => ({ pathname: '/contact' }),
}))

describe('Contact Page', () => {
  it('renders the contact form with required fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/service needed/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows success message after successful submission', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true })

    render(<Contact />)

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Test User' } })
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '9876543210' } })
    fireEvent.change(screen.getByLabelText(/service needed/i), { target: { value: 'Criminal Defence' } })
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test message' } })

    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    })
  })

  it('shows error message on failed submission', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'))

    render(<Contact />)

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Test User' } })
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '9876543210' } })
    fireEvent.change(screen.getByLabelText(/service needed/i), { target: { value: 'Criminal Defence' } })
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test message' } })

    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })

  it('displays WhatsApp contact option', () => {
    render(<Contact />)
    expect(screen.getByText(/chat on whatsapp/i)).toBeInTheDocument()
  })
})
