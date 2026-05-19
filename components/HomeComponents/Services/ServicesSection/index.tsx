import SailingIcon from '@/assets/images/homepage/segling_aventyr.svg'
import PeopleIcon from '@/assets/images/homepage/gemenskap.svg'
import GrowthIcon from '@/assets/images/homepage/utveckling.svg'
import ServiceCard from '../ServiceCard'

const servicesSectionData = [
  {
    id: 1,
    title: 'Segling & Äventyr',
    description: 'Lär dig segla och upptäck skärgården tillsammans med oss. Vi använder våra jollar som Optimist, Trissjolle, Avanti och 606 för att utveckla både kunskap och äventyrsglädje.',
    icon: SailingIcon
  },
  {
    id: 2,
    title: 'Gemenskap',
    description: 'Hos oss blir du en del av en stark gemenskap där vi hjälper varandra, har roligt tillsammans och bygger vänskaper som ofta varar hela livet. Vi har över 75 års scoutingtradition i Hässelby Strand.',
    icon: PeopleIcon
  },
  {
    id: 3,
    title: 'Utveckling',
    description: 'Utmana dig själv, lär dig nya färdigheter och väx som person. Hos oss får du möjlighet att ta märken, leda andra och utvecklas i din egen takt.',
    icon: GrowthIcon
  },
]

const ServicesSection = () => {

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