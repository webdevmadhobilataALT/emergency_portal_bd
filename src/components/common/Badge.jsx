export default function Badge({ children, tone = 'default', className = '' }) {
  const tones = {
    default: 'bg-slate-100 text-slate-700 border-slate-200',
    danger: 'bg-crimson-50 text-crimson-700 border-crimson-200',
    success: 'bg-pine-50 text-pine-700 border-pine-100',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}
