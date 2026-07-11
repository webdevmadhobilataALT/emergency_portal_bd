import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { CheckCircle2, ImagePlus, Loader2, Send } from 'lucide-react'
import SectionTitle from '../common/SectionTitle.jsx'

const divisions = ['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna', 'Barishal', 'Sylhet', 'Rangpur', 'Mymensingh']
const categories = ['Medical', 'Fire', 'Crime', 'Cyber Crime', 'Women Harassment', 'Flood', 'Cyclone', 'Road Accident', 'Electricity', 'Gas Leak', 'Water/WASA', 'Internet/Telecom', 'Other']

export default function ReportEmergencySection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async () => {
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
    toast.success('Report sent to the response team')
    reset()
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <section id="report" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container-portal">
        <SectionTitle
          eyebrow="Report Emergency"
          title="Tell us what's happening."
          description="Your report routes directly to the nearest response coordination team. For anything life-threatening, call 999 first."
          align="center"
        />

        <div className="max-w-2xl mx-auto">
          <div className="card-surface p-6 md:p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 flex flex-col items-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pine-50 text-pine-600">
                    <CheckCircle2 size={32} />
                  </span>
                  <h3 className="mt-5 font-display font-bold text-xl text-ink-900">Report received</h3>
                  <p className="mt-2 text-sm text-slate-500 max-w-sm">
                    A coordination team has your details. Keep your phone nearby in case they need to reach you.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" error={errors.name}>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="form-input"
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Phone number" error={errors.phone}>
                      <input
                        {...register('phone', { required: 'Phone number is required' })}
                        className="form-input"
                        placeholder="01XXX-XXXXXX"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Division" error={errors.division}>
                      <select {...register('division', { required: true })} className="form-input">
                        <option value="">Select division</option>
                        {divisions.map((d) => <option key={d}>{d}</option>)}
                      </select>
                    </Field>
                    <Field label="District" error={errors.district}>
                      <input {...register('district', { required: true })} className="form-input" placeholder="Your district" />
                    </Field>
                  </div>

                  <Field label="Exact location" error={errors.location}>
                    <input {...register('location', { required: true })} className="form-input" placeholder="Landmark, road, or area" />
                  </Field>

                  <Field label="Category" error={errors.category}>
                    <select {...register('category', { required: true })} className="form-input">
                      <option value="">Select category</option>
                      {categories.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </Field>

                  <Field label="Description" error={errors.description}>
                    <textarea
                      {...register('description', { required: 'Please describe the emergency' })}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="What's happening? Include as much detail as you can."
                    />
                  </Field>

                  <label className="flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-300 py-6 text-sm text-slate-500 cursor-pointer hover:border-crimson-300 hover:text-crimson-700 transition-colors">
                    <ImagePlus size={18} />
                    Upload a photo (optional)
                    <input type="file" accept="image/*" className="hidden" />
                  </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-crimson-600 to-crimson-800 py-3.5 text-sm font-bold text-white shadow-lift hover:shadow-glow transition-shadow disabled:opacity-70"
                  >
                    {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                    {submitting ? 'Sending report…' : 'Submit report'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-[13px] font-semibold text-slate-700 mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-crimson-600">{error.message || 'This field is required'}</p>}
    </div>
  )
}
