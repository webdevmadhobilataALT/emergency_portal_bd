import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { categories } from '../../data/categories.js'
import SectionTitle from '../common/SectionTitle.jsx'

export default function EmergencyCategories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-portal">
        <SectionTitle
          eyebrow="Response Categories"
          title="Every emergency service, organized."
          description="Choose a category to see verified contact numbers, response teams, and what to expect when you call."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((c, i) => {
            const Icon = Icons[c.icon] || Icons.Siren
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft hover:shadow-lift hover:border-crimson-200 transition-all duration-300"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-crimson-500 to-crimson-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-crimson-50 text-crimson-700 group-hover:bg-crimson-600 group-hover:text-white transition-colors">
                    <Icon size={20} strokeWidth={2.25} />
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-crimson-600 transition-colors">
                    {c.number}
                  </span>
                </div>
                <h3 className="mt-4 font-display font-bold text-[15px] text-ink-900">{c.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{c.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
