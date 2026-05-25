import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Leaf, Clock4 } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Fully Insured", body: "Every job is covered by comprehensive public liability insurance. You&apos;re fully protected." },
  { icon: CheckCircle2, title: "Certified Professionals", body: "Our team holds all relevant industry certifications and undergoes continuous training." },
  { icon: Leaf, title: "Eco-Conscious", body: "We use sustainable materials and water-saving solutions to minimise environmental impact." },
  { icon: Clock4, title: "Always On Time", body: "We respect your schedule. Punctual arrivals and clear time estimates — every time." },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-secondary overflow-hidden relative">
      {/* Rotated background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ transform: "translate(-50%, -50%) rotate(-12deg)" }}
      >
        <span className="font-display font-black text-[12rem] text-white/5 whitespace-nowrap">ECOFLOW</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image block with rotated frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative max-w-md">
              {/* Rotated decorative frame */}
              <div
                className="absolute -inset-4 rounded-[2.5rem] border-4 border-accent/40"
                style={{ transform: "rotate(-3deg)" }}
              />
              <div
                className="absolute -inset-8 rounded-[2.5rem] border-2 border-primary/20"
                style={{ transform: "rotate(2deg)" }}
              />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                  alt="Expert plumber working on pipes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              </div>
              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 -right-8 bg-accent text-white rounded-2xl p-5 shadow-2xl"
                style={{ transform: "rotate(3deg)" }}
              >
                <div className="font-display font-black text-4xl">10+</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-90">Years Trusted</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Reasons */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-accent block mb-4">Why EcoFlow</span>
              <h2 className="font-display font-black text-5xl text-white tracking-tight leading-none mb-12">
                The Standard
                <br />
                <span className="text-accent">Others Measure</span>
                <br />
                Against
              </h2>
            </motion.div>

            <div className="space-y-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <r.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-1">{r.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: r.body }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
