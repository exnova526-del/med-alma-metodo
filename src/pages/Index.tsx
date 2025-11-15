import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AnnaProfileSection from "@/components/AnnaProfileSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import GalleryCarouselSection from "@/components/GalleryCarouselSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <AnnaProfileSection />
      <AboutSection />
      <CoursesSection />
      <GalleryCarouselSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
