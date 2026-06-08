"use client";

import { VerksamhetGroup } from "../../data/hssdata";
import { t } from "@/i18n/t";
import { useLang } from "@/i18n/useLang";

interface Props {
  groups: VerksamhetGroup[];
}

export default function CcSchedule({ groups }: Props) {
  const lang = useLang();

  return (
    <div
      className="w-full max-w-[900px] mx-auto px-4 mt-12 mb-12 md:mb-20"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <div
        className="w-full border border-[#F4AB00]/40 rounded-[20px] px-3 py-6 md:px-8 md:py-8"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(244,171,0,0.08) 0%, rgba(244,171,0,0.03) 50%, transparent 75%), #FEFDF8",
          boxShadow: "0 1px 4px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="grid grid-cols-3 text-center mb-4 md:mb-2 pb-3">
          <p className="text-primary font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            {t("verksamhet.day", lang)}
          </p>
          <p className="text-primary font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            {t("verksamhet.division", lang)}
          </p>
          <p className="text-primary font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]">
            {t("verksamhet.place", lang)}
          </p>
        </div>

        <div className="flex flex-col gap-5 md:gap-2">
          {groups.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 text-center items-start min-h-[32px]"
            >
              <p className="text-primary font-medium text-[13px] md:text-[15px] lg:text-[16px]">
                {item.meetingDays}
              </p>
              <p
                className="font-bold text-[13px] md:text-[15px] lg:text-[16px]"
                style={{ color: item.bulletColor }}
              >
                {item.title}
              </p>
              <p className="text-primary font-medium text-[13px] md:text-[15px] lg:text-[16px]">
                {t("verksamhet.meetingPlace", lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}