import Hero from '../components/hero/Hero.jsx'
import HeroStats from '../components/hero/HeroStats.jsx'
import EmergencyCategories from '../components/emergency/EmergencyCategories.jsx'
import EmergencyNumbers from '../components/emergency/EmergencyNumbers.jsx'
import AlertsSection from '../components/alerts/AlertsSection.jsx'
import FirstAidSection from '../components/firstAid/FirstAidSection.jsx'
import HospitalsSection from '../components/hospital/HospitalsSection.jsx'
import BloodDonationSection from '../components/blood/BloodDonationSection.jsx'
import SheltersSection from '../components/shelter/SheltersSection.jsx'
import ReportEmergencySection from '../components/report/ReportEmergencySection.jsx'
import MapSection from '../components/map/MapSection.jsx'
import FAQSection from '../components/common/FAQSection.jsx'
import TestimonialsSection from '../components/common/TestimonialsSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <HeroStats />
      <EmergencyCategories />
      <EmergencyNumbers limit={6} />
      <AlertsSection />
      <FirstAidSection />
      <HospitalsSection limit={3} />
      <BloodDonationSection limit={3} />
      <SheltersSection />
      <MapSection />
      <ReportEmergencySection />
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}
