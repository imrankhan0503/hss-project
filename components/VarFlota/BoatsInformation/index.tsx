'use client'

import BoatOneBG from '@/assets/images/var-flotta-images/boat-one.jpg'
import BoatTwoBG from '@/assets/images/var-flotta-images/boat-two.jpg'
import BoatThreeBG from '@/assets/images/var-flotta-images/boat-three.jpg'
import Icon from '@/assets/images/icons/boat.svg'
import FleetCard from './FleetCard'
import { t } from '@/i18n/t'
import { useLang } from '@/i18n/useLang'

const BoatsInformation = () => {

  useLang()

  const boatsInformationSectionData = [
    {
      id: 1,
      icon: Icon,
      title: t('fleetsection.information.title'),
      description: t('fleetsection.information.description'),
      bulletPoints: [
        t('fleetsection.information.bulletPoints.trainingDinghies'),
        t('fleetsection.information.bulletPoints.keelboats'),
        t('fleetsection.information.bulletPoints.motorboat'),
      ],
    },
    {
      id: 2,
      title: t('fleetsection.boats.optimist.title'),
      subtitle: t('fleetsection.boats.optimist.subtitle'),
      image: BoatOneBG,
    },
    {
      id: 3,
      title: t('fleetsection.boats.twoKronor.title'),
      subtitle: t('fleetsection.boats.twoKronor.subtitle'),
      image: BoatTwoBG,
    },
    {
      id: 4,
      title: t('fleetsection.boats.keelboats.title'),
      subtitle: t('fleetsection.boats.keelboats.subtitle'),
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