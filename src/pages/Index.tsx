import Header from "@/components/Header";
import HeroMonograph from "@/components/HeroMonograph";
import ArchitecturalBento from "@/components/ArchitecturalBento";
import SelectedResidences from "@/components/SelectedResidences";
import SignatureSeriesSection from "@/components/SignatureSeriesSection";
import ClientPerspectives from "@/components/ClientPerspectives";
import PrivateInquirySection from "@/components/PrivateInquirySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121413] selection:bg-[#1B3B2B] selection:text-[#FAFAFA] overflow-x-hidden">
      <Header />
      <main>
        <HeroMonograph />
        <ArchitecturalBento />
        <SelectedResidences />
        <SignatureSeriesSection />
        <ClientPerspectives />
        <PrivateInquirySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
