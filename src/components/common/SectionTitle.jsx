import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-10 md:mb-14 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] ${light ? 'text-crimson-300' : 'text-crimson-700'}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-crimson-300' : 'bg-crimson-600'} animate-pulse-slow`} />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.1] ${light ? 'text-white' : 'text-ink-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
