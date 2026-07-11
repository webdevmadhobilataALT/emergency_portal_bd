import { hospitals } from '../../data/hospitals.js'
import SectionTitle from '../common/SectionTitle.jsx'
import HospitalCard from './HospitalCard.jsx'

export default function HospitalsSection({ limit }) {
  const list = limit ? hospitals.slice(0, limit) : hospitals
  return (
    <section id="hospitals" className="py-16 md:py-24 bg-white">
      <div className="container-portal">
        <SectionTitle
          eyebrow="Nearby Hospitals"
          title="Verified emergency rooms near you."
          description="Live status, ratings and one-tap directions to the closest hospitals with active emergency departments."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((h, i) => (
            <HospitalCard key={h.id} h={h} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
