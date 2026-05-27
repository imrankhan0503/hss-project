"use client";

import { useState } from "react";
import VerksamhetCards from "../../components/VerksamhetCards";
import { groups } from "../../data/hssdata";

export default function VerksamhetPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <main>
      <section className="w-full min-h-[220px] md:h-[254px] bg-[#00355F] flex items-center justify-center px-4 py-10">
        <div className="text-center max-w-3xl">
          <h1 className="text-[#F4AB00] text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
            Vår Verksamhet
          </h1>
          <p className="mt-3 md:mt-4 text-[#F4AB00] text-sm sm:text-base md:text-xl font-medium">
            Från 8 år till vuxen - vi har aktiviteter för alla åldrar
          </p>
        </div>
      </section>

      <VerksamhetCards
        groups={groups}
        expandedId={expandedId}
        onExpand={(id) => setExpandedId(id)}
      />
    </main>
  );
}
