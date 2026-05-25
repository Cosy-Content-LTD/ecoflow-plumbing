import { motion } from "framer-motion";
import { Wrench, Flame, Droplets, ShowerHead, AlertTriangle, Recycle } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Plumbing Repairs",
    desc: "From leaking taps to burst pipes, our certified plumbers handle all residential and commercial repair needs with precision.",
  },
  {
    icon: Flame,
    title: "Boiler Servicing",
    desc: "Annual boiler servicing, repair, and installation by Gas Safe registered engineers. Keep your heating efficient and safe.",
  },
  {
    icon: Droplets,
    title: "Pipe Installation",
    desc: "Full pipe re-routing, installation, and replacement using durable, eco-friendly materials that stand the test of time.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Fitting",
    desc: "Complete bathroom installations from scratch or refurbishments — showers, baths, basins, and tiling all handled.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    desc: "Around-the-clock emergency response for London properties. We arrive fast, diagnose quickly, fix it right.",
  },
  {
    icon: Recycle,
    title: "Eco-Flow Solutions",
    desc: "Water-saving installations, sustainable drainage systems, and green upgrades to reduce your environmental footprint.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary block mb-4">What We Do</span>
            <h2 className="font-display font-black text-5xl sm:text-6xl text-heading tracking-tight leading-none mb-6">
              Complete
              <br />
              <span className="text-primary">Plumbing</span>
              <br />
              Services
            </h2>
            <p className="text-foreground/70 text-lg font-medium leading-relaxed mb-8">
              Every plumbing challenge, handled with expertise. From emergency callouts to full installations, EcoFlow Plumbing is your single point of contact.
            </p>
            <a
              href="tel:0234567891"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-4 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Book a Service
            </a>
          </motion.div>

          {/* Right grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-7 rounded-[2rem] bg-section-alt border border-border/40 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-heading mb-2">{s.title}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
