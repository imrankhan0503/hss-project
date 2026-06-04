"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import VerksamhetCards from "../../components/VerksamhetCards";
import CcSchedule from "../../components/CcSchedule";
import { getGroups } from "../../data/hssdata";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const VerksamhetContent = () => {
  const lang = useLang();
  const data = heroSectionData.verksamhet
  const searchParams = useSearchParams();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const expand = searchParams.get("expand");
    if (expand) setExpandedId(expand);
  }, [searchParams]);

const groups = getGroups(lang);

  return (
<<<<<<< HEAD
    <main className="pb-16">
      <HeroSection title={t(data.titleKey, lang)}
              subtitle={t(data.subtitleKey, lang)}
=======
    <main>
      <HeroSection title={t(data.titleKey, lang)}
              subtitle={t(data.subtitleKey, lang)}
              image={data.image}
>>>>>>> feature/023-ccschedule-language
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

const VerksamhetPage = () => {
  return (
    <Suspense fallback={<div className="text-center py-20">Laddar...</div>}>
      <VerksamhetContent />
    </Suspense>
  );
};

export default VerksamhetPage;