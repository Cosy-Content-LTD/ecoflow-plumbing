import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary block mb-4">Get In Touch</span>
            <h2 className="font-display font-black text-5xl sm:text-6xl text-heading tracking-tight leading-none mb-6">
              Ready to
              <br />
              <span className="text-primary">Fix It?</span>
            </h2>
            <p className="text-foreground/65 text-lg font-medium leading-relaxed mb-10">
              Contact EcoFlow Plumbing today for a free, no-obligation quote. We respond promptly and arrive on schedule.
            </p>

            <div className="space-y-5">
              <a
                href="tel:0234567891"
                className="flex items-center gap-4 p-5 rounded-2xl bg-section-alt border border-border/40 hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-0.5">Call Us</p>
                  <p className="font-black text-lg text-heading">0234 567 891</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-section-alt border border-border/40">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-0.5">Email</p>
                  <p className="font-black text-lg text-heading">hello@ecoflowplumbing.co.uk</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-section-alt border border-border/40">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-0.5">Address</p>
                  <p className="font-bold text-sm text-heading">Old Admiralty Building, Whitehall, Westminster, London SW1A 2DY</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-section-alt rounded-[2rem] border border-border/40 p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display font-black text-3xl text-heading mb-2">Message Sent!</h3>
                  <p className="text-foreground/60">We&apos;ll be in touch within the hour.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-black text-2xl text-heading mb-6">Get a Free Quote</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="07xxx xxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Service Required</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    >
                      <option>General Plumbing Repair</option>
                      <option>Boiler Service</option>
                      <option>Pipe Installation</option>
                      <option>Bathroom Fitting</option>
                      <option>Emergency Plumbing</option>
                      <option>Eco-Flow Solutions</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-foreground/60 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Describe your plumbing issue..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black text-base py-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
