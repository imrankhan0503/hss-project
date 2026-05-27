import Image from "next/image";
import { InformationCardsProps } from "@/types/safety";

const InformationCards = ({ title, description, icon, isPolicyBanner }: InformationCardsProps) => {
  return (
    <div className="rounded-3xl border border-primary/10 bg-[linear-gradient(to_right,rgba(8,47,73,0.05)_0%,rgba(8,47,73,0.05)_33%,transparent_100%)] p-6">
      <div className="flex flex-col items-center md:items-start text-center">
        <div className="flex items-center md:justify-start gap-2 md:gap-4">
          <div className="relative h-7 md:h-12 w-7 md:w-12 shrink-0 overflow-hidden">
            <Image src={icon} alt={title} fill className="object-contain" />
          </div>
          <h3 className="text-sm md:text-base font-bold text-primary text-center md:text-start">
            {title}
          </h3>
        </div>
        <p className={`mt-2 ${isPolicyBanner ? 'text-base' : 'text-sm'} leading-6 text-primary/80 text-center md:text-start`}>
          {description}
        </p>
      </div>
    </div>
  )
}
export default InformationCards;