'use client'

import BoatsInformation from "@/components/VarFlota/BoatsInformation";
import LocationsInformation from "@/components/VarFlota/LocationsInformation";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const VarFlotta = () => {
  useLang()
    const data = heroSectionData.varFlotta

  return (
    <main>
      <HeroSection title={t(data.titleKey)}
        subtitle={t(data.subtitleKey)}
        image={data.image} />
      <BoatsInformation />
      <LocationsInformation />
    </main>
  );
};

export default VarFlotta;
