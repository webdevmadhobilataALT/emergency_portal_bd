import { motion } from 'framer-motion'
import { PhoneCall, MapPinned, ShieldCheck, BadgeCheck, Clock, Droplet, Ambulance, Shield, Flame } from 'lucide-react'
import Button from '../common/Button.jsx'

const trustBadges = [
  { icon: ShieldCheck, label: 'Government Information' },
  { icon: BadgeCheck, label: 'Verified Hospitals' },
  { icon: Clock, label: '24/7 Emergency Support' },
  { icon: Droplet, label: 'Blood Network' },
]

const floatCards = [
  { icon: Ambulance, label: 'Ambulance dispatched', sub: '2 min away', className: 'top-6 -left-4 md:-left-10', delay: 0.2 },
  { icon: Shield, label: 'Police unit responding', sub: 'Dhanmondi Zone', className: 'bottom-24 -right-4 md:-right-10', delay: 0.4 },
  { icon: Flame, label: 'Fire team on route', sub: 'ETA 4 min', className: 'bottom-0 left-6 md:left-10', delay: 0.6 },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_60%_60%_at_60%_20%,black,transparent)] opacity-70" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-crimson-100/60 blur-3xl" />
      <div className="absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-pine-50 blur-3xl" />

      <div className="container-portal relative py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-crimson-200 bg-crimson-50 px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wide text-crimson-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-crimson-600 animate-pulse-slow" />
            Live national dispatch network
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[2.6rem] leading-[1.05] sm:text-6xl font-extrabold tracking-tight text-ink-900"
          >
            Emergency help,
            <br />
            <span className="text-crimson-700">one click away.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-slate-600 max-w-lg"
          >
            Reach police, ambulance and fire services instantly. Find verified hospitals, blood donors, disaster shelters, first aid guidance and live alerts — all in one trusted place, built for every citizen of Bangladesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button variant="primary" icon={PhoneCall} onClick={() => (window.location.href = 'tel:999')}>
              Emergency Numbers
            </Button>
            <Button variant="secondary" icon={MapPinned}>
              Find Nearby Hospital
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid grid-cols-2 gap-3 max-w-md"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
                <Icon size={15} className="text-pine-600 shrink-0" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Signature element: live dispatch console */}
          <div className="relative rounded-3xl bg-gradient-to-b from-ink-900 to-ink-800 p-7 shadow-lift border border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">Dispatch Console</span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-pine-400">
                <span className="h-1.5 w-1.5 rounded-full bg-pine-400 animate-pulse-slow" /> Online
              </span>
            </div>

            <div className="mt-6 text-center">
              <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">National Emergency</p>
              <p className="mt-1 font-mono text-7xl font-semibold text-white tracking-tight">999</p>
              <p className="mt-1 text-xs text-slate-400">Free · 24/7 · Anywhere in Bangladesh</p>
            </div>

            <a
              href="tel:999"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-crimson-600 hover:bg-crimson-500 py-3.5 text-sm font-bold text-white transition-colors"
            >
              <PhoneCall size={16} /> Call now
            </a>

            <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
              {['Ambulance dispatched · Mirpur-10', 'Police unit en route · Gulshan', 'Fire team cleared · Uttara'].map((t) => (
                <p key={t} className="font-mono text-[11px] text-slate-500 truncate">▸ {t}</p>
              ))}
            </div>
          </div>

          {floatCards.map(({ icon: Icon, label, sub, className, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + delay }}
              className={`hidden md:flex absolute ${className} items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift border border-slate-100 w-56`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crimson-50 text-crimson-700">
                <Icon size={16} />
              </span>
              <div className="min-w-0">
                <p className="text-[12.5px] font-semibold text-ink-900 truncate">{label}</p>
                <p className="text-[11px] text-slate-500 truncate">{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
