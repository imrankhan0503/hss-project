"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import VerksamhetCards from "../../components/VerksamhetCards";
import CcSchedule from "../../components/CcSchedule";
import { groups } from "../../data/hssdata";
import HeroSection from "@/components/shared/HeroSection";
import { heroSectionData } from "@/data/heroSectionData";

const VerksamhetPage = () => {
  const searchParams = useSearchParams();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const expand = searchParams.get("expand");
    if (expand) setExpandedId(expand);
  }, [searchParams]);

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