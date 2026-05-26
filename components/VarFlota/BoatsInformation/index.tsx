import BoatOneBG from '@/assets/images/var-flotta-images/boat-one.jpg'
import BoatTwoBG from '@/assets/images/var-flotta-images/boat-two.jpg'
import BoatThreeBG from '@/assets/images/var-flotta-images/boat-three.jpg'
import Icon from '@/assets/images/icons/boat.svg'
import FleetCard from './FleetCard'

const boatInformationSectionData = [
    {
        id: 1,
        icon: Icon,
        title: "Vår Flotta",
        description:
            "Vi är stolta över att ha en av områdets mest välutrustade flottor. Med 18 båtar i olika modeller finns vi här för dig, hela vägen från nybörjare till erfaren seglare.",

        bulletPoints: [
            "12 utbildningsjollar (Optimist & 2-krona)",
            "5 större kölbåtar (H-båt & Viggen)",
            "1 motorbåt för säkerhet (Big Buster)",
        ],
    },
    {
        id: 2,
        title: 'Optimist',
        subtitle: 'Här börjar äventyret för våra minsta seglare',
        image: BoatOneBG
    },
    {
        id: 3,
        title: '2-kronor',
        subtitle: 'Perfekt för lagarbete och fortsättningskurser',
        image: BoatTwoBG
    },
    {
        id: 4,
        title: 'Kölbåtar',
        subtitle: 'Våra största båtar för långfärder och segling i skärgården',
        image: BoatThreeBG
    }
]

const BoatsInformation = () => {
  return (
    <section className="w-full px-6 py-12 md:px-28">
      <div className="mx-auto grid max-w-[1200px] gap-y-12 gap-x-14 md:grid-cols-2">
        {boatInformationSectionData.map((card) => (
          <FleetCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default BoatsInformation