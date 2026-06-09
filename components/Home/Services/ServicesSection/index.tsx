'use client'

import SailingIcon from '@/assets/images/homepage/segling.svg'
import PeopleIcon from '@/assets/images/homepage/gemenskap.svg'
import GrowthIcon from '@/assets/images/homepage/utveckling.svg'
import ServiceCard from '../ServiceCard'
import { ServiceCardData } from '@/types/home';
import { useLang } from "@/i18n/useLang";
import { t } from "@/i18n/t";

const ServicesSection = () => {
  useLang()

  const servicesSectionData: ServiceCardData[] = [
  {
    id: 1,
    title: t('homepage.services.sailing.title'),
    description: t('homepage.services.sailing.description'),
    icon: SailingIcon,
    resize: true
  },
  {
    id: 2,
    title: t('homepage.services.community.title'),
    description: t('homepage.services.community.description'),
    icon: PeopleIcon
  },
  {
    id: 3,
    title: t('homepage.services.development.title'),
    description: t('homepage.services.development.description'),
    icon: GrowthIcon
  },
]

  return (
    <section className="py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto">
        {servicesSectionData && servicesSectionData.map(s => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  )
}

export default ServicesSection;