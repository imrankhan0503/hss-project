"use client";

import { useState } from "react";
import VerksamhetCards from "../../components/VerksamhetCards";
import CcSchedule from "../../components/CcSchedule";
import { groups } from "../../data/hssdata";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";

const VerksamhetPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <main className="pb-16">
      <HeroSection {...heroSectionData.verksamhet} />

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