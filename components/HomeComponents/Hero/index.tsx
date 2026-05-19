import BackgroundImage from '@/assets/images/background/home-bg.png'
import Image from 'next/image';
import Link from 'next/link';

const HomeHero = () => {
  return (
    <section className="relative w-full h-[250px] md:h-[741px] overflow-hidden">
      <Image className="w-full h-full left-0 top-0 absolute object-cover" src={BackgroundImage} alt="a girl tying a knot" />
      <div className="inset-0 absolute bg-(--hero-overlay)/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-8 md:px-20 text-background">
        <h1 className="max-w-md text-xl md:text-5xl font-bold leading-tight md:leading-[65px]">
          Hässelby Strands
          <br />
          Sjöscoutkår
        </h1>
        <p className="mt-4 md:mt-6 text-sm md:text-xl font-normal md:font-semibold leading-6 md:leading-8 max-w-md">
          Upptäck havet, utveckla ledarskap och skapa livslånga minnen tillsammans med oss.
        </p>
        <div className="flex justify-center md:justify-start gap-3 md:gap-5 mt-6 md:mt-10">
          <Link href='https://www.scoutnet.se/register/in/group/764' className="w-28 md:w-40 h-9 md:h-12 flex items-center justify-center rounded-full bg-background text-primary font-bold text-xs md:text-base">Bil Scout</Link>
          <Link href='/verksamhet' className="w-28 md:w-40 h-9 md:h-12 flex items-center justify-center rounded-full border-2 border-secondary text-secondary font-bold text-xs md:text-base">Läs mer</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeHero;