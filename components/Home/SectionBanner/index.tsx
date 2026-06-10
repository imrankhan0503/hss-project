'use client'

import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const SectionBanner = () => {
  const lang = useLang()
  return (
    <div className="w-full h-14 py-6 md:py-10 bg-primary flex items-center justify-center">
      <h2 className="text-center text-secondary text-xl md:text-3xl font-semibold md:font-bold">{t('homepage.banner.title', lang)}</h2>
    </div>
  )
}

export default SectionBanner;