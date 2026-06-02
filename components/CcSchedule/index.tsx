"use client";

import { VerksamhetGroup } from "../../data/hssdata";

interface Props {
  groups: VerksamhetGroup[];
}

export default function CcSchedule({ groups }: Props) {
  return (
    <div className="w-full flex justify-center px-4 md:px-8 mt-6 md:mt-8">
      <div
        className="w-full max-w-[900px] border border-[#F4AB00]/40 rounded-[20px] md:rounded-[24px] px-4 py-6 md:px-14 md:py-12"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(244,171,0,0.08) 0%, rgba(244,171,0,0.03) 50%, transparent 75%), #FEFDF8",
        }}
      >
        <div className="grid grid-cols-3 md:grid-cols-4 text-center mb-5">
          <p className="text-[#00355F] font-bold text-[15px] md:text-[20px]">
            Dag
          </p>
          <p className="text-[#00355F] font-bold text-[15px] md:text-[20px]">
            Avdelning
          </p>
          <p className="text-[#00355F] font-bold text-[15px] md:text-[20px]">
            Tid
          </p>
          <p className="text-[#00355F] font-bold hidden md:block md:text-[20px]">
            Plats
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {groups.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 md:grid-cols-4 text-center items-center"
            >
              <p className="text-[#00355F] font-semibold text-[13px] md:text-[18px]">
                {item.meetingDays}
              </p>
              <p
                className="font-bold text-[13px] md:text-[18px]"
                style={{ color: item.bulletColor }}
              >
                {item.title}
              </p>
              <p className="text-[#00355F] font-semibold text-[13px] md:text-[18px]">
                {item.meetingTime}
              </p>
              <p className="text-[#00355F] font-semibold hidden md:block md:text-[18px]">
                Scoutlokalen Ruffen
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
