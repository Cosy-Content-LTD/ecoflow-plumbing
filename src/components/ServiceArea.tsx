import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";

const areas = [
  "Westminster",
  "Whitehall",
  "Covent Garden",
  "City of Westminster",
  "Greater London",
  "Old Admiralty Building",
  "SW1A & Surrounding Postcodes",
  "Central London",
];

export default function ServiceArea() {
  return (
    <section id="coverage" className="py-32 bg-section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary block mb-4">Service Coverage</span>
            <h2 className="font-display font-black text-5xl sm:text-6xl text-heading tracking-tight leading-none mb-6">
              Based in
              <br />
              <span className="text-primary">Westminster,</span>
              <br />
              Serving London
            </h2>
            <p className="text-foreground/65 text-lg font-medium leading-relaxed mb-8">
              EcoFlow Plumbing is headquartered in the heart of Westminster. We service residential and commercial properties across Central London with fast, reliable response times.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 font-medium text-sm">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border/40">
              <MapPin className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-heading text-sm mb-1">Our Address</p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Old Admiralty Building, Whitehall, Westminster,
                  <br />
                  London SW1A 2DY, United Kingdom
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map image with rotated frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute -inset-3 rounded-[2.5rem] bg-primary/15 border border-primary/30"
                style={{ transform: "rotate(4deg)" }}
              />
              <div
                className="absolute -inset-6 rounded-[3rem] bg-accent/10 border border-accent/20"
                style={{ transform: "rotate(-3deg)" }}
              />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80"
                  alt="Plumber servicing a London property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent p-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-black text-sm">Westminster HQ</p>
                      <p className="text-white/70 text-xs">SW1A 2DY &bull; London</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
