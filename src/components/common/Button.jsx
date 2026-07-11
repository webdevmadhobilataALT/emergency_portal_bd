import { motion } from 'framer-motion'

const variants = {
  primary:
    'bg-gradient-to-b from-crimson-600 to-crimson-800 text-white shadow-lift hover:shadow-glow hover:from-crimson-500 hover:to-crimson-700',
  secondary:
    'bg-white text-ink-900 border border-slate-200 hover:border-crimson-300 hover:text-crimson-700 shadow-soft',
  ghost: 'bg-transparent text-ink-900 hover:bg-slate-100',
  outlineLight: 'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm',
}

export default function Button({ children, variant = 'primary', className = '', icon: Icon, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -1 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson-500 focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={18} strokeWidth={2.25} />}
      {children}
    </motion.button>
  )
}
