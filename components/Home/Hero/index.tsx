'use client'

import BackgroundImage from '@/assets/images/background/home-bg.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const HomeHero = () => {
  const lang = useLang()
  return (
    <section className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[741px] xl:h-[800px] overflow-hidden">
      <Image 
        src={BackgroundImage} 
        alt="a girl tying a knot"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />
      
      <div className="inset-0 absolute bg-(--hero-overlay)/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 sm:px-12 md:px-20 text-background">
        <h1 className="max-w-md text-2xl sm:text-3xl md:text-5xl font-bold leading-tight md:leading-[65px]">
          Hässelby Strands
          <br />
          Sjöscoutkår
        </h1>
        <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-xl font-normal md:font-semibold leading-6 md:leading-8 max-w-md">
          {t("homepage.hero.subtitle", lang)}
        </p>
        
        <div className="flex justify-center md:justify-start gap-3 md:gap-5 mt-6 md:mt-10">
          <Link target="_blank" href='https://www.scoutnet.se/register/in/group/764' className="px-5 md:px-8 h-12 md:h-14 flex items-center justify-center text-center rounded-full bg-background text-primary font-bold text-xs md:text-base hover:bg-secondary hover:text-background">{t('homepage.hero.primary-cta', lang)}</Link>
          <Link href='/verksamhet' className="px-5 md:px-8 h-12 md:h-14 flex items-center justify-center text-center rounded-full border-2 border-secondary text-secondary font-bold text-xs md:text-base hover:bg-secondary hover:text-primary">{t('homepage.hero.secondary-cta', lang)}</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeHero;