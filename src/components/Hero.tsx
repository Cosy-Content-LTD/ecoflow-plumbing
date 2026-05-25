import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1600&q=80')` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-2 mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Fully Insured &amp; Certified</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-none tracking-tight mb-6"
          >
            London&apos;s
            <br />
            <span className="text-accent">Trusted</span>
            <br />
            Plumbing
            <br />
            Experts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg font-medium leading-relaxed mb-8 max-w-md"
          >
            EcoFlow Plumbing delivers certified, eco-conscious plumbing solutions across Westminster and Greater London. Over 10 years of precision craftsmanship.
          </motion.p>

          {/* Trust Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-8"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-white/70 text-sm font-bold ml-1">5-Star Rated in Westminster</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:0234567891"
              className="flex items-center justify-center gap-3 bg-accent text-white font-black text-base px-8 py-5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now: 0234 567 891
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-bold text-base px-8 py-5 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right: rotated photo frame accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          {/* Rotated decorative card */}
          <div className="relative w-full max-w-sm mx-auto">
            <div
              className="absolute inset-0 rounded-[2rem] bg-accent/30 border border-accent/50"
              style={{ transform: "rotate(6deg)" }}
            />
            <div
              className="absolute inset-0 rounded-[2rem] bg-primary/20 border border-primary/40"
              style={{ transform: "rotate(-4deg)" }}
            />
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80"
                alt="Professional plumber at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-heading text-sm">10+ Years Experience</p>
                    <p className="text-foreground/60 text-xs font-medium">Westminster&apos;s #1 Plumber</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
