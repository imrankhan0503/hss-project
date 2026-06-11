'use client'

import Image from 'next/image'
import SafetyLogo from '@/assets/images/icons/security.svg'
import EducationLogo from '@/assets/images/icons/education.svg'
import SecurityRoutineLogo from '@/assets/images/icons/safety_routines.svg'
import InsuranceLogo from '@/assets/images/icons/insurance.svg'
import VestLogo from '@/assets/images/icons/vest.svg'
import { InformationCardsData } from '@/types/safety'
import InformationCards from './InfoCards'
import ButtonLinks from './Buttons'
import { t } from '@/i18n/t'
import { useLang } from '@/i18n/useLang'

const SafetySection = () => {
  const lang = useLang()

  const cardsData: InformationCardsData[] = [
    {
      id: 1,
      title: t('safetydocuments.safetysecurity.cards.trainedLeaders.title', lang),
      description: t('safetydocuments.safetysecurity.cards.trainedLeaders.description', lang),
      icon: EducationLogo,
    },
    {
      id: 2,
      title: t('safetydocuments.safetysecurity.cards.safetyRoutines.title', lang),
      description: t('safetydocuments.safetysecurity.cards.safetyRoutines.description', lang),
      icon: SecurityRoutineLogo,
    },
    {
      id: 3,
      title: t('safetydocuments.safetysecurity.cards.insurance.title', lang),
      description: t('safetydocuments.safetysecurity.cards.insurance.description', lang),
      icon: InsuranceLogo,
    },
  ]

  return (
    <section className="w-full border-b border-primary/25 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex items-center justify-center gap-0.5 md:mb-14 md:items-start md:justify-start md:gap-6">
          <div className="relative h-7 md:h-14 w-7 md:w-14 shrink-0 overflow-hidden">
            <Image src={SafetyLogo} alt="a shield" />
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              {t('safetydocuments.safetysecurity.title', lang)}
            </h2>

            <p className="text-base text-primary/80 mt-2 hidden md:block">
              {t('safetydocuments.safetysecurity.subtitle', lang)}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cardsData.map((c) => (
            <InformationCards key={c.id} {...c} />
          ))}
        </div>

        <div className="mt-6">
          <InformationCards
            icon={VestLogo}
            title={t('safetydocuments.safetysecurity.policyBanner.title', lang)}
            description={t('safetydocuments.safetysecurity.policyBanner.description', lang)}
            isPolicyBanner
          />
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center md:items-center md:gap-12">
          <ButtonLinks
            text={t('safetydocuments.safetysecurity.buttons.webTraining', lang)}
            link="https://www.scouternasfolkhogskola.se/kurser-utbildningar/webbutbildningar/"
          />

          <ButtonLinks
            text={t('safetydocuments.safetysecurity.buttons.scoutTraining', lang)}
            link="https://www.scouternasfolkhogskola.se/kurser-utbildningar/scoututbildningar/"
          />
        </div>
      </div>
    </section>
  )
}

export default SafetySection