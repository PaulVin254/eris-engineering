import HeroSection from "@/components/HeroSection";
import { HeroSection21Dev } from "@/components/ui/hero-section-21dev";
import HomeGallerySection from "@/components/HomeGallerySection";
import ProjectShowcaseSection from "@/components/ProjectShowcaseSection";
import StorySection from "@/components/StorySection";
import ProcessSection from "@/components/ProcessSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection21Dev />
      <HomeGallerySection />
      <ProjectShowcaseSection />
      <StorySection />
      <ProcessSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <LeadMagnetSection />
      <Footer />
    </div>
  );
};

export default Index;
