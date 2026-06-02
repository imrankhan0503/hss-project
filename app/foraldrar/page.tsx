'use client'

import SafetySection from "@/components/Foraldrar/SafetySection";
import DocumentsStorage from "@/components/Foraldrar/DocumentsDownloads";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const ForaldrarPage = () => {
  useLang()
  const data = heroSectionData.foraldrar
  return (
    <main>
      <HeroSection  title={t(data.titleKey)}
        subtitle={t(data.subtitleKey)}
        image={data.image} /> 

      <SafetySection />
      <DocumentsStorage />
    </main>
  );
};

export default ForaldrarPage;