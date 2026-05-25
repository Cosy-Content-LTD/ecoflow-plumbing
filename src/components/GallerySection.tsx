import { motion } from "framer-motion";

export default function GallerySection() {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary block mb-3">Our Work</span>
          <h2 className="font-display font-black text-5xl sm:text-6xl text-heading tracking-tight leading-none">
            Craftsmanship
            <br />
            <span className="text-primary">You Can See</span>
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 rounded-[2rem] overflow-hidden aspect-[4/3] relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
              alt="Plumbing installation work"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Right column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-[2rem] overflow-hidden aspect-square relative group flex-1"
            >
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                alt="Professional plumbing tools and equipment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>

            {/* Rotated text card */}
            <motion.div
              initial={{ opacity: 0, rotate: -6 }}
              whileInView={{ opacity: 1, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="bg-primary rounded-[2rem] p-8 flex-1 flex flex-col justify-between"
              style={{ transform: "rotate(-2deg)" }}
            >
              <p className="font-display font-black text-3xl text-white leading-tight">
                &quot;Quality work,
                <br />
                every single time.&quot;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-black text-xs">EF</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">EcoFlow Plumbing</p>
                  <p className="text-white/60 text-xs">Westminster, London</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
