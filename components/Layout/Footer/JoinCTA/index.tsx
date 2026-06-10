'use client'

import Link from "next/link"
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const JoinCTASection = () => {
  const lang = useLang()

  return (
    <section className="bg-primary px-6 py-12 md:py-16">
      <div className="w-full mx-auto flex flex-col items-center text-center">
        <h2 className="text-secondary text-2xl md:text-3xl font-bold"> {t('homepage.interest.heading', lang)} </h2>
        <h4 className="mt-6 text-secondary text-lg md:text-xl font-medium"> {t('homepage.interest.subHeading', lang)}</h4>
        <Link target="_blank" href='https://www.scoutnet.se/register/in/group/764' className="mt-8 py-3 md:py-4 px-10 md:px-14 bg-secondary border-2 border-secondary rounded-full text-primary text-xl font-bold hover:border-secondary hover:bg-background hover:text-secondary">{t('homepage.interest.buttonText', lang)}</Link>
      </div>
    </section>
  )
}

export default JoinCTASection;