'use client'

import Image from "next/image";
import Link from "next/link";
import { ScoutGroupCardProps } from "@/types/home";
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const ScoutGroupCard = ({ title, description, color, icon, href }: ScoutGroupCardProps) => {
  useLang()
  return (
    <>
      <div className={`${color} rounded-[20px] md:rounded-3xl px-6 py-8 md:py-10 flex flex-col items-center text-center min-h-[320px] md:min-h-96 shadow-[0px_10px_20px_rgba(0,0,0,0.05)]`}>
        <div className="h-28 md:h-30 flex items-center jsutify-center">
          <Image src={icon} alt={title} className="w-26 md:w-28 h-auto object-contain" />
        </div>
        <div className="mt-6 flex flex-col items-center gap-3">
          <h3 className="text-background text-xl md:text-2xl font-semibold md:font-bold">{title}</h3>
          <p className="text-background text-lg font-normal">{description}</p>
        </div>
        <Link href={href} className="mt-auto bg-secondary text-primary text-base font-medium rounded-full px-6 py-2 md:px-6 md:py-4 hover:bg-primary hover:text-background">{`${t('homepage.groups.buttonText')} ${title.toLowerCase()}`}</Link>
      </div>
    </>
  )
}
export default ScoutGroupCard;