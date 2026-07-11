import { motion } from 'framer-motion'
import { Users, Navigation2, Home } from 'lucide-react'
import { shelters } from '../../data/shelters.js'
import SectionTitle from '../common/SectionTitle.jsx'
import Badge from '../common/Badge.jsx'

export default function SheltersSection() {
  return (
    <section id="shelters" className="py-16 md:py-24 bg-white">
      <div className="container-portal">
        <SectionTitle
          eyebrow="Disaster Shelters"
          title="Safety, mapped in advance."
          description="Know your nearest cyclone and flood shelter before you need it — capacity and live status included."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {shelters.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all duration-300"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine-50 text-pine-700">
                <Home size={20} />
              </span>
              <h3 className="mt-4 font-display font-bold text-[14.5px] text-ink-900 leading-snug">{s.name}</h3>
              <div className="mt-3 flex items-center gap-3 text-[12.5px] text-slate-500">
                <span className="inline-flex items-center gap-1"><Users size={13} /> {s.capacity}</span>
                <span>· {s.distance}</span>
              </div>
              <div className="mt-3">
                <Badge tone={s.status === 'Open' ? 'success' : 'warning'}>{s.status}</Badge>
              </div>
              <button className="mt-4 w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2.5 text-[12.5px] font-semibold text-slate-600 hover:border-crimson-300 hover:text-crimson-700 transition-colors">
                <Navigation2 size={13} /> Navigate
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
