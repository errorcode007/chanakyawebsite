const icons: Record<string, JSX.Element> = {
  'appellate-advocacy': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3m0 0l-5 5h10l-5-5z" />
      <rect x="4" y="11" width="4" height="6" rx="0.5" />
      <rect x="16" y="11" width="4" height="6" rx="0.5" />
      <line x1="12" y1="6" x2="12" y2="21" />
      <line x1="6" y1="21" x2="18" y2="21" />
    </svg>
  ),
  'bankruptcy-representation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="12" y2="15" />
    </svg>
  ),
  'business-transactions': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="1" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="11" x2="12" y2="17" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  ),
  'case-assessments': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
      <line x1="8" y1="11" x2="14" y2="11" />
      <line x1="11" y1="8" x2="11" y2="14" />
    </svg>
  ),
  'civil-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <rect x="9" y="13" width="6" height="8" />
      <line x1="12" y1="7" x2="12" y2="10" />
    </svg>
  ),
  'contracts-agreements-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3v4a1 1 0 001 1h4" />
      <path d="M5 3h9l5 5v11a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  ),
  'corporate-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="8" height="14" rx="1" />
      <rect x="13" y="3" width="8" height="18" rx="1" />
      <line x1="6" y1="10" x2="8" y2="10" />
      <line x1="6" y1="13" x2="8" y2="13" />
      <line x1="6" y1="16" x2="8" y2="16" />
      <line x1="16" y1="6" x2="18" y2="6" />
      <line x1="16" y1="9" x2="18" y2="9" />
      <line x1="16" y1="12" x2="18" y2="12" />
      <line x1="16" y1="15" x2="18" y2="15" />
    </svg>
  ),
  'criminal-defence-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  'criminal-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  'disability-benefits-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M10 10h4l1 7h-6l1-7z" />
      <path d="M8 21a4 4 0 004-4" />
      <path d="M16 21a4 4 0 00-4-4" />
    </svg>
  ),
  'divorce-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <circle cx="15" cy="8" r="3" />
      <path d="M5 20c0-3 2-5 4-5" />
      <path d="M19 20c0-3-2-5-4-5" />
      <line x1="12" y1="11" x2="12" y2="20" />
    </svg>
  ),
  'education-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L2 9l10 6 10-6-10-6z" />
      <path d="M6 12v5c0 2 3 4 6 4s6-2 6-4v-5" />
      <line x1="20" y1="9" x2="20" y2="17" />
    </svg>
  ),
  'employment-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
    </svg>
  ),
  'entertainment-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="14" rx="1" />
      <polygon points="10,7 10,13 15,10" />
      <line x1="7" y1="21" x2="17" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  'environment-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V8" />
      <path d="M5 12c0-5 7-9 7-9s7 4 7 9c0 3-2.5 5-7 5s-7-2-7-5z" />
      <path d="M8 21h8" />
    </svg>
  ),
  'labour-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83" />
    </svg>
  ),
  'legal-advice': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="13" y2="12" />
    </svg>
  ),
  'legal-malpractice-litigation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <line x1="12" y1="22" x2="12" y2="12" />
      <line x1="4" y1="9" x2="4" y2="16" />
      <line x1="20" y1="9" x2="20" y2="16" />
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  ),
}

interface PracticeIconProps {
  slug: string
  className?: string
}

export default function PracticeIcon({ slug, className = 'w-8 h-8' }: PracticeIconProps) {
  const icon = icons[slug]
  if (!icon) return null
  return <span className={`inline-block text-accent ${className}`}>{icon}</span>
}
