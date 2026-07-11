import { Link } from 'react-router-dom'
import { Siren, Globe, MessageCircle, Send, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink-900 text-slate-300">
      <div className="container-portal py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-crimson-600 text-white">
              <Siren size={16} strokeWidth={2.5} />
            </span>
            <span className="font-display font-extrabold text-white text-[15px]">Emergency Portal BD</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Verified emergency numbers, hospitals, blood donors and shelter information for citizens across Bangladesh.
          </p>
          <div className="flex gap-3 mt-5">
            {[Globe, MessageCircle, Send].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-crimson-600 transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/hospitals" className="hover:text-white transition-colors">Hospitals</Link></li>
            <li><Link to="/blood-donation" className="hover:text-white transition-colors">Blood Donation</Link></li>
            <li><Link to="/report" className="hover:text-white transition-colors">Report Emergency</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="/#first-aid" className="hover:text-white transition-colors">First Aid Guide</a></li>
            <li><a href="/#alerts" className="hover:text-white transition-colors">Live Alerts</a></li>
            <li><a href="/emergency-numbers" className="hover:text-white transition-colors">All Emergency Numbers</a></li>
            <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={14} className="text-crimson-400" /> 999 (National Emergency)</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-crimson-400" /> support@emergencyportal.bd</li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-crimson-400" /> Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-portal flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Emergency Portal BD. Not a substitute for official emergency dispatch — always call 999 first.</p>
          <p>Built for citizens, by citizens.</p>
        </div>
      </div>
    </footer>
  )
}
