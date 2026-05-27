import Image from 'next/image';
import SafetyLogo from '@/assets/images/icons/security.svg'
import EducationLogo from '@/assets/images/icons/education.svg'
import SecurityRoutineLogo from '@/assets/images/icons/safety_routines.svg'
import InsuranceLogo from '@/assets/images/icons/insurance.svg'
import VestLogo from '@/assets/images/icons/vest.svg'
import { InformationCardsData } from '@/types/safety';
import InformationCards from './InfoCards';

const cardsData: InformationCardsData[] = [
  {
    id: 1,
    title: 'Utbildade Ledare',
    description: 'Alla ledare genomgår utbildning i Trygga Möten och första hjälpen.',
    icon: EducationLogo
  },
  {
    id: 2,
    title: 'Säkerhetsrutiner',
    description: 'Tydliga rutiner för segling, läger och alla aktiviteter följs strikt.',
    icon: SecurityRoutineLogo
  },
  {
    id: 3,
    title: 'Försäkring',
    description: 'Alla scouter omfattas av Sveriges Scoutförbunds gruppförsäkring.',
    icon: InsuranceLogo
  }

]

const SafetySection = () => {
  return (
    <section className="w-full border-b border-primary/25 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex items-center justify-center gap-0.5 md:mb-14 md:items-start md:justify-start md:gap-6">
          <div className="relative h-7 md:h-14 w-7 md:w-14 shrink-0 overflow-hidden">
            <Image src={SafetyLogo} alt='a shield' />
          </div>
          <div>
            <h2 className='text-base md:text-2xl font-bold text-primary'>
              Trygga Möten & Säkerhet
            </h2>
            <p className='text-base text-primary/80 mt-2 hidden md:block'>
              Vi arbetar aktivkt för att skapa en trygg och säker miljö för alla scouter
            </p>
          </div>
        </div>
        <div className='grid gap-6 lg:grid-cols-3'>
          {cardsData && cardsData.map(c => (
            <InformationCards key={c.id} {...c} />
          ))}
        </div>
        <div className='mt-6'>
        <InformationCards icon={VestLogo} title='Flytväst Policy' description='Alla scouter ska alltid använda godkänd flytväst vid aktiviteter på eller vid vatten. Flytvästen ska vara rätt storlek och korrekt påtagen.' isPolicyBanner/>
        </div>
      </div>
    </section>
  )
}
export default SafetySection;