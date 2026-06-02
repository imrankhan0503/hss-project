import SafetySection from "@/components/Foraldrar/SafetySection";
import DocumentsStorage from "@/components/Foraldrar/DocumentsDownloads";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";

const ForaldrarPage = () => {
  return (
    <main>
      <HeroSection {...heroSectionData.foraldrar} />

      <SafetySection />
      <DocumentsStorage />
    </main>
  );
};

export default ForaldrarPage;