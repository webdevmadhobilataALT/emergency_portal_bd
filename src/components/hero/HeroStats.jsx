import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { PhoneCall, Cross, Droplet, Home } from 'lucide-react'

const stats = [
  { icon: PhoneCall, value: 12, suffix: '', label: 'Emergency Numbers' },
  { icon: Cross, value: 480, suffix: '+', label: 'Verified Hospitals' },
  { icon: Droplet, value: 9200, suffix: '+', label: 'Registered Blood Donors' },
  { icon: Home, value: 630, suffix: '+', label: 'Disaster Shelters' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className="font-mono">
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function HeroStats() {
  return (
    <section className="relative -mt-2 pb-4">
      <div className="container-portal">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="card-surface p-5 md:p-6 hover:shadow-lift transition-shadow duration-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-crimson-50 text-crimson-700">
                <Icon size={18} strokeWidth={2.25} />
              </span>
              <p className="mt-4 text-2xl md:text-3xl font-extrabold text-ink-900 tracking-tight">
                <Counter value={value} suffix={suffix} />
              </p>
              <p className="mt-1 text-[13px] text-slate-500">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
