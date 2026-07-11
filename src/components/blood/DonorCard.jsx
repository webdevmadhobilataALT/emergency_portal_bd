import { motion } from 'framer-motion'
import { PhoneCall, BadgeCheck, Droplet } from 'lucide-react'
import Badge from '../common/Badge.jsx'

export default function DonorCard({ d, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-crimson-600 to-crimson-800 text-white font-display font-bold text-sm">
          {d.name.split(' ').map((n) => n[0]).join('')}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="font-display font-bold text-[14.5px] text-ink-900 truncate">{d.name}</h3>
            {d.verified && <BadgeCheck size={14} className="text-pine-600 shrink-0" />}
          </div>
          <p className="text-[12.5px] text-slate-500">{d.city} · {d.donations} donations</p>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-crimson-50 text-crimson-700 font-mono font-bold text-[13px]">
          {d.bloodGroup}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Badge tone={d.available ? 'success' : 'default'}>
          <Droplet size={11} /> {d.available ? 'Available now' : 'Unavailable'}
        </Badge>
      </div>

      <div className="mt-4 flex gap-2">
        <a href="tel:999" className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-b from-crimson-600 to-crimson-800 px-3 py-2.5 text-[12.5px] font-bold text-white shadow-soft hover:shadow-glow transition-shadow">
          <PhoneCall size={13} /> Call
        </a>
        <button className="flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-[12.5px] font-semibold text-slate-600 hover:border-crimson-300 hover:text-crimson-700 transition-colors">
          Request
        </button>
      </div>
    </motion.div>
  )
}
