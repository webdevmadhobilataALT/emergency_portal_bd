import { motion } from 'framer-motion'
import { CloudRain, Flame, CarFront, Wind, Zap, Waves, MapPin, Clock } from 'lucide-react'
import { alerts } from '../../data/alerts.js'
import SectionTitle from '../common/SectionTitle.jsx'
import Badge from '../common/Badge.jsx'

const iconMap = {
  Flood: Waves,
  Cyclone: Wind,
  Fire: Flame,
  'Road Accident': CarFront,
  'Weather Warning': CloudRain,
  'Power Outage': Zap,
}

const priorityTone = { High: 'danger', Medium: 'warning', Low: 'default' }

export default function AlertsSection() {
  return (
    <section id="alerts" className="py-16 md:py-24 bg-white">
      <div className="container-portal">
        <SectionTitle
          eyebrow="Live Alerts"
          title="What's happening right now."
          description="Real-time disaster and safety alerts reported across divisions, updated as response teams confirm them."
        />
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-200 hidden sm:block" />
          <div className="space-y-4">
            {alerts.map((a, i) => {
              const Icon = iconMap[a.type] || Zap
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative sm:pl-12"
                >
                  <span className={`hidden sm:flex absolute left-0 top-4 h-8 w-8 items-center justify-center rounded-full border-2 border-white ring-2 ${
                    a.priority === 'High' ? 'bg-crimson-600 ring-crimson-200' : a.priority === 'Medium' ? 'bg-amber-500 ring-amber-200' : 'bg-slate-400 ring-slate-200'
                  } text-white z-10`}>
                    <Icon size={14} />
                  </span>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-shadow duration-300">
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                      <div className="flex items-center gap-2">
                        <span className="sm:hidden flex h-7 w-7 items-center justify-center rounded-full bg-crimson-50 text-crimson-700">
                          <Icon size={13} />
                        </span>
                        <h3 className="font-display font-bold text-[15px] text-ink-900">{a.type}</h3>
                        <Badge tone={priorityTone[a.priority]}>{a.priority}</Badge>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <Clock size={12} /> {a.time}
                      </span>
                    </div>
                    <p className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-slate-600">
                      <MapPin size={13} className="text-crimson-600" /> {a.location}
                    </p>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">{a.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
