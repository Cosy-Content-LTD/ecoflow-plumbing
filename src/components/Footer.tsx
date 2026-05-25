import { Droplets, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block font-display font-black text-2xl text-white tracking-tight">EcoFlow</span>
                <span className="block font-display text-xs font-bold uppercase tracking-widest text-accent">Plumbing</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Certified plumbing professionals serving Westminster and Greater London. Fully insured, eco-conscious, and committed to quality craftsmanship.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 text-xs font-bold">G</div>
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 text-xs font-bold">in</div>
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 text-xs font-bold">f</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-5">Services</h4>
            <ul className="space-y-3">
              {["General Repairs", "Boiler Servicing", "Pipe Installation", "Bathroom Fitting", "Emergency Plumbing", "Eco-Flow Solutions"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/60 hover:text-white text-sm transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-accent mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:0234567891" className="text-white/60 hover:text-white text-sm transition-colors">0234 567 891</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">hello@ecoflowplumbing.co.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">Old Admiralty Building, Whitehall, Westminster, London SW1A 2DY</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">&copy; 2024 EcoFlow Plumbing. All rights reserved.</p>
          <p className="text-white/40 text-xs">Fully Insured &bull; Certified Professionals &bull; Westminster, London</p>
        </div>
      </div>
    </footer>
  );
}
