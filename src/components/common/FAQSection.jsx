import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/faq.js'
import SectionTitle from './SectionTitle.jsx'

export default function FAQSection() {
  const [openId, setOpenId] = useState(faqs[0].id)

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container-portal max-w-3xl">
        <SectionTitle eyebrow="FAQ" title="Common questions" align="center" />
        <div className="space-y-3">
          {faqs.map((f) => {
            const isOpen = openId === f.id
            return (
              <div key={f.id} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft">
                <button
                  onClick={() => setOpenId(isOpen ? null : f.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-[14.5px] text-ink-900">{f.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-crimson-600' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-[13.5px] leading-relaxed text-slate-500">{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
