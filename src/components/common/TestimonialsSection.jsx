import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials.js'
import SectionTitle from './SectionTitle.jsx'

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container-portal">
        <SectionTitle eyebrow="Real Stories" title="Moments this platform helped" align="center" />
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <Quote size={22} className="text-crimson-200" />
              <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{t.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-crimson-600 to-crimson-800 text-white font-display font-bold text-xs">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-ink-900">{t.name}</p>
                  <p className="text-[12px] text-slate-500">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
