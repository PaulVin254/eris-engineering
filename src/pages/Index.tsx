import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ProcessSection from "@/components/ProcessSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
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
