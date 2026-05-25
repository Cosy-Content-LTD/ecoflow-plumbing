import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, Leaf, Phone } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Award, label: "Certified Professionals" },
  { icon: Clock, label: "Same-Day Response" },
  { icon: Leaf, label: "Eco-Conscious Methods" },
  { icon: Phone, label: "24/7 Emergency Line" },
];

export default function TrustBar() {
  return (
    <section className="bg-secondary py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <b.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-white font-bold text-sm uppercase tracking-widest">{b.label}</span>
              {i < badges.length - 1 && (
                <div className="hidden md:block w-px h-6 bg-white/20 ml-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
