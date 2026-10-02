import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../lib/nav'

export default function Header() {
  const [open, setOpen] = useState(false)

  const desktopLink = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
      isActive ? 'font-semibold text-accent' : 'text-muted hover:text-ink'
    }`

  const mobileLink = ({ isActive }: { isActive: boolean }) =>
    `block rounded-md px-3 py-3 text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
      isActive ? 'bg-accent-soft font-semibold text-accent' : 'text-ink hover:bg-accent-soft'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          onClick={() => setOpen(false)}
        >
          NEXTSTEP
        </Link>

        <nav aria-label="Главна навигација" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopLink}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          aria-label={open ? 'Затвори мени' : 'Отвори мени'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Главна навигација"
          className="border-t border-line bg-paper px-4 pb-4 pt-2 md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={mobileLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}