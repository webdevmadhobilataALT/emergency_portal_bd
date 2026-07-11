import { motion } from 'framer-motion'
import { LocateFixed, Shield, Cross, Flame, Home } from 'lucide-react'
import SectionTitle from '../common/SectionTitle.jsx'

const pins = [
  { icon: Shield, top: '30%', left: '22%', tone: 'bg-blue-600' },
  { icon: Cross, top: '55%', left: '65%', tone: 'bg-crimson-600' },
  { icon: Flame, top: '68%', left: '30%', tone: 'bg-orange-500' },
  { icon: Home, top: '25%', left: '70%', tone: 'bg-pine-600' },
  { icon: Shield, top: '45%', left: '45%', tone: 'bg-blue-600' },
]

export default function MapSection() {
  return (
    <section id="map" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container-portal">
        <SectionTitle
          eyebrow="Emergency Map"
          title="See what's nearby, instantly."
          description="Police stations, hospitals, fire units and shelters plotted around your current location."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative h-[420px] rounded-3xl border border-slate-200 overflow-hidden shadow-lift grid-overlay bg-gradient-to-br from-slate-50 to-slate-100"
        >
          {pins.map((p, i) => (
            <span
              key={i}
              style={{ top: p.top, left: p.left }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full ${p.tone} text-white shadow-lift ring-4 ring-white`}
            >
              <p.icon size={15} />
            </span>
          ))}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-crimson-600 ring-4 ring-white" />
            </span>
          </div>

          <button className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[13px] font-semibold text-ink-900 shadow-lift hover:text-crimson-700 transition-colors">
            <LocateFixed size={16} /> Use current location
          </button>

          <div className="absolute bottom-5 left-5 hidden sm:flex gap-3 rounded-xl bg-white/90 backdrop-blur-sm px-4 py-2.5 shadow-soft text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-blue-600" />Police</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-crimson-600" />Hospital</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-orange-500" />Fire</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-pine-600" />Shelter</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
