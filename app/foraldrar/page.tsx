'use client'

import SafetySection from "@/components/Foraldrar/SafetySection";
import GeneralQuestions from "@/components/Foraldrar/GeneralQuestions";
import DocumentsStorage from "@/components/Foraldrar/DocumentsDownloads";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const ForaldrarPage = () => {
  const lang = useLang()
  const data = heroSectionData.foraldrar
  return (
    <main>
      <HeroSection title={t(data.titleKey, lang)}
        subtitle={t(data.subtitleKey, lang)}
        image={data.image} />

      <SafetySection />
      <GeneralQuestions />
      <DocumentsStorage />
    </main>
  );
};

export default ForaldrarPage;