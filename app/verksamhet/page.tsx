"use client";

import VerksamhetCards from "@/components/Verksamhet/VerksamhetCards";
import CcSchedule from "@/components/Verksamhet/CcSchedule";
import { getGroups } from "@/data/hssdata";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const VerksamhetPage = () => {
  const lang = useLang();
  const data = heroSectionData.verksamhet
  const groups = getGroups(lang);

  return (
    <main>
      <HeroSection title={t(data.titleKey, lang)}
        subtitle={t(data.subtitleKey, lang)}
        image={data.image}
      />
      <VerksamhetCards groups={groups} />
      <CcSchedule groups={groups} />
    </main>
  );
};

export default VerksamhetPage;