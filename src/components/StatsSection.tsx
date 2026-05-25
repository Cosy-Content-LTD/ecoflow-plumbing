import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience", description: "Serving Westminster since 2014" },
  { value: 1200, suffix: "+", label: "Jobs Completed", description: "Residential &amp; commercial" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Based on post-job surveys" },
  { value: 60, suffix: "min", label: "Avg. Response Time", description: "Across London coverage zone" },
];

function StatItem({ value, suffix, label, description, index }: { value: number; suffix: string; label: string; description: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, inView, 1800);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="text-center p-8 rounded-[2rem] bg-background border border-border/40 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      <div className="font-display font-black text-6xl sm:text-7xl text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="font-bold text-lg text-heading mb-1">{label}</div>
      <div className="text-foreground/60 text-sm font-medium" dangerouslySetInnerHTML={{ __html: description }} />
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary block mb-3">By The Numbers</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-heading tracking-tight">
            A Decade of Measurable Results
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
