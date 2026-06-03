'use client'

import { servicesSectionData } from '@/data/homepageData';
import ServiceCard from '../ServiceCard'
import { useLang } from "@/i18n/useLang";

const ServicesSection = () => {
  useLang()

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