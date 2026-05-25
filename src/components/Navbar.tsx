import { useState, useEffect } from "react";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Coverage", href: "#coverage" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Droplets className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <span className="block font-display font-black text-xl text-heading tracking-tight">EcoFlow</span>
            <span className="block font-display text-xs font-bold uppercase tracking-widest text-primary">Plumbing</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-sm font-bold uppercase tracking-widest text-foreground/70 hover:text-primary transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:0234567891"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <Phone className="w-4 h-4" />
          0234 567 891
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/98 backdrop-blur-md shadow-xl border-t border-border/30 px-6 py-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:0234567891"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-5 py-3 rounded-full shadow-lg w-fit mt-2"
            >
              <Phone className="w-4 h-4" />
              0234 567 891
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
