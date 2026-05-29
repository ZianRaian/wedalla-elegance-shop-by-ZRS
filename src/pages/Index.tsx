import Navbar from "@/components/wedalla/Navbar";
import HeroSection from "@/components/wedalla/HeroSection";
import AboutSection from "@/components/wedalla/AboutSection";
import EventsSection from "@/components/wedalla/EventsSection";
import ServicesSection from "@/components/wedalla/ServicesSection";
import PlansSection from "@/components/wedalla/PlansSection";
import GallerySection from "@/components/wedalla/GallerySection";
import TestimonialsSection from "@/components/wedalla/TestimonialsSection";
import AmbassadorsSection from "@/components/wedalla/AmbassadorsSection";
import TeamSection from "@/components/wedalla/TeamSection";
import ContactSection from "@/components/wedalla/ContactSection";
import Footer from "@/components/wedalla/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #07070C 0%, #12133A 20%, #2D1E6F 40%, #1A1050 55%, #2D1E6F 70%, #12133A 85%, #07070C 100%)' }}>
      <Navbar />
      <HeroSection />
      <div id="about"><AboutSection /></div>
      <div id="events"><EventsSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="plans"><PlansSection /></div>
      <div id="gallery"><GallerySection /></div>
      <div id="testimonials"><TestimonialsSection /></div>
      <div id="ambassadors"><AmbassadorsSection /></div>
      <div id="team"><TeamSection /></div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
