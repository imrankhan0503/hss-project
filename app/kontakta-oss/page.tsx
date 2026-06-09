'use client'

import InterestForm from "@/components/AnmalanIntresse/InterestForm"
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const ContactPage = () => {
  useLang()
  const data = heroSectionData.kontaktaOss
  return (
    <div className="w-full">
      <HeroSection title={t(data.titleKey)}
        subtitle={t(data.subtitleKey)}
        image={data.image}
      />

      <div className="flex justify-center px-4 py-12 bg-primary/5">
        <InterestForm />
      </div>
    </div>

  )
}

export default ContactPage;