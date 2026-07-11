import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { emergencyGroups } from '../../data/emergencyNumbers.js'
import SectionTitle from '../common/SectionTitle.jsx'
import EmergencyNumberCard from './EmergencyNumberCard.jsx'

export default function EmergencyNumbers({ limit, showSearch = false }) {
  const [query, setQuery] = useState('')

  const groups = useMemo(() => {
    let g = emergencyGroups
    if (query.trim()) {
      const q = query.toLowerCase()
      g = emergencyGroups
        .map((group) => ({
          ...group,
          numbers: group.numbers.filter(
            (n) => n.service.toLowerCase().includes(q) || n.description.toLowerCase().includes(q) || n.number.toLowerCase().includes(q)
          ),
        }))
        .filter((group) => group.numbers.length > 0)
    }
    if (limit) {
      const flat = g.flatMap((group) => group.numbers).slice(0, limit)
      return [{ id: 'flat', label: null, numbers: flat }]
    }
    return g
  }, [query, limit])

  return (
    <section id="numbers" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container-portal">
        <SectionTitle
          eyebrow="Quick Dial"
          title={limit ? 'Emergency numbers, ready to call.' : 'Every government helpline, in one place.'}
          description={
            limit
              ? 'Every number here is toll-free and staffed around the clock. Tap to call directly or copy it for later.'
              : 'From police and cyber crime to WASA, electricity, banking fraud and expatriate support — verified numbers, organized by what you need. Always dial 999 first for life-threatening emergencies.'
          }
        />

        {showSearch && (
          <div className="mb-8 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 max-w-md shadow-soft">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search a service, e.g. WASA, cyber crime, gas"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        )}

        {groups.every((g) => g.numbers.length === 0) ? (
          <p className="text-center text-sm text-slate-500 py-12">No services match your search.</p>
        ) : (
          <div className="space-y-12">
            {groups.map((group) => (
              <div key={group.id}>
                {group.label && (
                  <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-crimson-700">
                    {group.label}
                  </h3>
                )}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.numbers.map((item, i) => (
                    <EmergencyNumberCard key={item.id} item={item} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {limit && (
          <div className="mt-8 text-center">
            <a
              href="/emergency-numbers"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-crimson-700 hover:text-crimson-800"
            >
              View all 20+ government services →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
