import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { donors } from '../../data/donors.js'
import SectionTitle from '../common/SectionTitle.jsx'
import DonorCard from './DonorCard.jsx'

const bloodGroups = ['All', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']
const cities = ['All Cities', ...new Set(donors.map((d) => d.city))]

export default function BloodDonationSection({ limit }) {
  const [query, setQuery] = useState('')
  const [group, setGroup] = useState('All')
  const [city, setCity] = useState('All Cities')
  const [onlyAvailable, setOnlyAvailable] = useState(false)

  const filtered = useMemo(() => {
    let list = donors.filter((d) => {
      const matchesQuery = d.name.toLowerCase().includes(query.toLowerCase())
      const matchesGroup = group === 'All' || d.bloodGroup === group
      const matchesCity = city === 'All Cities' || d.city === city
      const matchesAvailability = !onlyAvailable || d.available
      return matchesQuery && matchesGroup && matchesCity && matchesAvailability
    })
    return limit ? list.slice(0, limit) : list
  }, [query, group, city, onlyAvailable, limit])

  return (
    <section id="blood-donation" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container-portal">
        <SectionTitle
          eyebrow="Blood Donation Network"
          title="Find a verified donor in minutes."
          description="Search by blood group, city, and availability across a growing network of verified donors."
        />

        <div className="card-surface p-4 md:p-5 mb-8 flex flex-col md:flex-row gap-3">
          <div className="flex-1 flex items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search donor by name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-crimson-400"
          >
            {bloodGroups.map((g) => <option key={g}>{g}</option>)}
          </select>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-700 outline-none focus:border-crimson-400"
          >
            {cities.map((c) => <option key={c}>{c}</option>)}
          </select>
          <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-700 cursor-pointer select-none">
            <input type="checkbox" checked={onlyAvailable} onChange={(e) => setOnlyAvailable(e.target.checked)} className="accent-crimson-600" />
            Available only
          </label>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-sm text-slate-500 py-12">No donors match your filters right now. Try widening your search.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((d, i) => <DonorCard key={d.id} d={d} index={i} />)}
          </div>
        )}
      </div>
    </section>
  )
}
