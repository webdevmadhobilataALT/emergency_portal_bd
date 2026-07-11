import { motion } from 'framer-motion'
import { Star, Navigation, PhoneCall, Bookmark, MapPin } from 'lucide-react'
import Badge from '../common/Badge.jsx'

export default function HospitalCard({ h, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300"
    >
      <div className="h-32 bg-gradient-to-br from-crimson-50 via-white to-pine-50 flex items-center justify-center border-b border-slate-100">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft text-crimson-700">
          <MapPin size={20} />
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-[15px] text-ink-900 leading-snug">{h.name}</h3>
          <button className="shrink-0 text-slate-400 hover:text-crimson-600 transition-colors" aria-label="Bookmark hospital">
            <Bookmark size={16} />
          </button>
        </div>
        <p className="mt-1 text-[13px] text-slate-500">{h.area}</p>

        <div className="mt-3 flex items-center flex-wrap gap-2">
          <Badge tone={h.status === 'Open' ? 'success' : 'default'}>{h.status}</Badge>
          {h.emergency && <Badge tone="danger">ER Available</Badge>}
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-500">
            <Star size={12} fill="currentColor" /> {h.rating}
          </span>
          <span className="text-xs text-slate-400">· {h.distance}</span>
        </div>

        <div className="mt-4 flex gap-2">
          <a href="tel:999" className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-b from-crimson-600 to-crimson-800 px-3 py-2.5 text-[12.5px] font-bold text-white shadow-soft hover:shadow-glow transition-shadow">
            <PhoneCall size={13} /> Call
          </a>
          <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2.5 text-[12.5px] font-semibold text-slate-600 hover:border-crimson-300 hover:text-crimson-700 transition-colors">
            <Navigation size={13} /> Directions
          </button>
        </div>
      </div>
    </motion.div>
  )
}
