import { motion } from "framer-motion";
import { PhoneCall, ClipboardList, Wrench, ThumbsUp } from "lucide-react";

const steps = [
  { icon: PhoneCall, number: "01", title: "Call or Enquire", desc: "Reach us by phone or online form. We&apos;ll gather details about your plumbing issue quickly." },
  { icon: ClipboardList, number: "02", title: "Free Assessment", desc: "A certified plumber reviews your needs and provides a transparent, itemised quote." },
  { icon: Wrench, number: "03", title: "Expert Repair", desc: "Our professional arrives on time, fully equipped, and resolves the issue to the highest standard." },
  { icon: ThumbsUp, number: "04", title: "Guaranteed Finish", desc: "We sign off every job with a quality check and a workmanship guarantee for your peace of mind." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary block mb-3">How It Works</span>
          <h2 className="font-display font-black text-5xl sm:text-6xl text-heading tracking-tight">
            Simple. Reliable. Done Right.
          </h2>
          <p className="mt-4 text-foreground/65 text-lg max-w-2xl mx-auto">
            From first contact to final sign-off, our 4-step process ensures a seamless, stress-free experience.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-border/60" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl z-10 relative">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-3 font-display font-black text-xs text-primary/50 bg-background rounded-full border border-border/50 w-7 h-7 flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-heading mb-2">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
