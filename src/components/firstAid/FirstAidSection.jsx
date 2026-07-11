import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { firstAidTopics } from '../../data/firstAid.js'
import SectionTitle from '../common/SectionTitle.jsx'

export default function FirstAidSection() {
  return (
    <section id="first-aid" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container-portal">
        <SectionTitle
          eyebrow="First Aid Knowledge Base"
          title="What to do in the first five minutes."
          description="Clear, step-by-step guidance for the moments before help arrives. Learn it now, before you need it."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {firstAidTopics.map((f, i) => {
            const Icon = Icons[f.icon] || Icons.HeartPulse
            return (
              <motion.button
                key={f.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
                whileHover={{ y: -4 }}
                className="group text-left rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift hover:border-crimson-200 transition-all duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-crimson-50 text-crimson-700 group-hover:bg-crimson-600 group-hover:text-white transition-colors">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3 className="mt-4 font-display font-bold text-[15px] text-ink-900">{f.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{f.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-crimson-700">
                  Read more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
