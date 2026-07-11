import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, Copy, Check } from 'lucide-react'
import toast from 'react-hot-toast'
import Badge from '../common/Badge.jsx'

export default function EmergencyNumberCard({ item, index = 0 }) {
  const [copied, setCopied] = useState(false)
  const isWebsite = /\.[a-z]{2,}$/i.test(item.number.trim()) && !/^\d/.test(item.number.trim())

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(item.number)
      setCopied(true)
      toast.success(`${item.number} copied to clipboard`)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      toast.error('Could not copy number')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft hover:shadow-lift transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-[15px] text-ink-900">{item.service}</h3>
          <p className="mt-1 text-[13px] text-slate-500 leading-relaxed">{item.description}</p>
        </div>
        <Badge tone="success">{item.available}</Badge>
      </div>

      <p className={`mt-4 font-mono ${isWebsite ? 'text-lg' : 'text-3xl'} font-bold text-crimson-700 tracking-tight break-all`}>{item.number}</p>

      <div className="mt-4 flex gap-2">
        {isWebsite ? (
          <a
            href={`https://${item.number}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-crimson-600 to-crimson-800 px-4 py-2.5 text-[13px] font-bold text-white shadow-soft hover:shadow-glow transition-shadow"
          >
            Visit portal
          </a>
        ) : (
          <a
            href={`tel:${item.number}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-crimson-600 to-crimson-800 px-4 py-2.5 text-[13px] font-bold text-white shadow-soft hover:shadow-glow transition-shadow"
          >
            <PhoneCall size={14} /> Call
          </a>
        )}
        <button
          onClick={copyNumber}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 text-[13px] font-semibold text-slate-600 hover:border-crimson-300 hover:text-crimson-700 transition-colors"
          aria-label="Copy number"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    </motion.div>
  )
}
