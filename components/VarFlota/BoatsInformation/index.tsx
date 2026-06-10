'use client'

import BoatOneBG from '@/assets/images/var-flotta-images/boat-one.jpg'
import BoatTwoBG from '@/assets/images/var-flotta-images/boat-two.jpg'
import BoatThreeBG from '@/assets/images/var-flotta-images/boat-three.jpg'
import Icon from '@/assets/images/icons/boat.svg'
import FleetCard from './FleetCard'
import { t } from '@/i18n/t'
import { useLang } from '@/i18n/useLang'

const BoatsInformation = () => {

  const lang = useLang()

  const boatsInformationSectionData = [
    {
      id: 1,
      icon: Icon,
      title: t('fleetsection.information.title', lang),
      description: t('fleetsection.information.description', lang),
      bulletPoints: [
        t('fleetsection.information.bulletPoints.trainingDinghies', lang),
        t('fleetsection.information.bulletPoints.keelboats', lang),
        t('fleetsection.information.bulletPoints.motorboat', lang),
      ],
    },
    {
      id: 2,
      title: t('fleetsection.boats.optimist.title', lang),
      subtitle: t('fleetsection.boats.optimist.subtitle', lang),
      image: BoatOneBG,
    },
    {
      id: 3,
      title: t('fleetsection.boats.twoKronor.title', lang),
      subtitle: t('fleetsection.boats.twoKronor.subtitle', lang),
      image: BoatTwoBG,
    },
    {
      id: 4,
      title: t('fleetsection.boats.keelboats.title', lang),
      subtitle: t('fleetsection.boats.keelboats.subtitle', lang),
      image: BoatThreeBG,
    }
  ]


  return (
    <section className="w-full px-6 py-12 md:px-28">
      <div className="mx-auto grid max-w-300 gap-y-12 gap-x-14 md:grid-cols-2 md:auto-rows-fr">
        {boatsInformationSectionData.map((card) => (
          <FleetCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default BoatsInformation