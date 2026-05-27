import Image from 'next/image';
import SafetyLogo from '@/assets/images/icons/security.svg'

const SafetySection = () => {
  return (
    <section className="w-full h-[480px] border-b border-primary/25 py-12 md:py-20">
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
      </div>
    </section>
  )
}
export default SafetySection;