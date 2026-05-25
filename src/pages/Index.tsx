import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "@/components/WhyUs";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import ServiceArea from "@/components/ServiceArea";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <StatsSection />
      <ServicesSection />
      <WhyUs />
      <ProcessSection />
      <GallerySection />
      <ServiceArea />
      <ContactSection />
      <Footer />
    </div>
  );
}
