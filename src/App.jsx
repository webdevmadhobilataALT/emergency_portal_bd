import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Hospitals from './pages/Hospitals.jsx'
import BloodDonation from './pages/BloodDonation.jsx'
import EmergencyNumbers from './pages/EmergencyNumbersPage.jsx'
import ReportEmergency from './pages/ReportEmergency.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            borderRadius: '12px',
          },
        }}
      />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/blood-donation" element={<BloodDonation />} />
          <Route path="/emergency-numbers" element={<EmergencyNumbers />} />
          <Route path="/report" element={<ReportEmergency />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
