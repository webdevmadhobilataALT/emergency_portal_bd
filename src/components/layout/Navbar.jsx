import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, PhoneCall, Siren } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/emergency-numbers', label: 'Emergency Numbers' },
  { to: '/hospitals', label: 'Hospitals' },
  { to: '/blood-donation', label: 'Blood Donation' },
  { to: '/#first-aid', label: 'First Aid' },
  { to: '/#alerts', label: 'Alerts' },
  { to: '/report', label: 'Report Emergency' },
  { to: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-white/80 shadow-soft' : 'py-4 bg-white/60'
      } backdrop-blur-lg border-b border-slate-200/70`}
    >
      <div className="container-portal flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-b from-crimson-600 to-crimson-800 text-white shadow-lift">
            <Siren size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display font-extrabold text-[17px] tracking-tight text-ink-900">
            Emergency Portal <span className="text-crimson-700">BD</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-[13.5px] font-medium transition-colors ${
                  isActive ? 'text-crimson-700 bg-crimson-50' : 'text-slate-600 hover:text-ink-900 hover:bg-slate-100'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:999"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-crimson-600 to-crimson-800 px-4 py-2.5 text-sm font-bold text-white shadow-lift hover:shadow-glow transition-shadow"
          >
            <PhoneCall size={16} strokeWidth={2.5} />
            Call 999
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-ink-900 hover:bg-slate-100"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-slate-200/70 bg-white"
            aria-label="Mobile"
          >
            <div className="container-portal py-4 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="tel:999"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-crimson-600 to-crimson-800 px-4 py-3 text-sm font-bold text-white shadow-lift"
              >
                <PhoneCall size={16} strokeWidth={2.5} />
                Call 999
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
