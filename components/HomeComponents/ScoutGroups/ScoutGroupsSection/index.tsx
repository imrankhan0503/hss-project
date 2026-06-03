'use client'
import { scoutGroupsSectionData } from "@/data/homepageData";
import ScoutGroupCard from "../ScoutGroupCard";
import { useLang } from "@/i18n/useLang";

const ScoutGroupsSection = () => {
  useLang()

  return (
    <section className="px-6 py-12 md:px-[70px] md:py-16 bg-(--primary)/20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-8 mx-auto">
        {scoutGroupsSectionData &&
          scoutGroupsSectionData.map((s) => (
            <ScoutGroupCard key={s.id} {...s} />
          ))}
      </div>
    </section>
  );
};

export default ScoutGroupsSection;
