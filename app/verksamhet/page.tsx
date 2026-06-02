"use client";

import { useState } from "react";
import VerksamhetCards from "../../components/VerksamhetCards";
import CcSchedule from "../../components/CcSchedule";
import { groups } from "../../data/hssdata";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const VerksamhetPage = () => {
  useLang()
  const data = heroSectionData.verksamhet
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <main className="pb-16">
      <HeroSection title={t(data.titleKey)}
              subtitle={t(data.subtitleKey)}
               />

      <VerksamhetCards
        groups={groups}
        expandedId={expandedId}
        onExpand={(id) => setExpandedId(id)}
      />

      <CcSchedule groups={groups} />
    </main>
  );
};

export default VerksamhetPage;