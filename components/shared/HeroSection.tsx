import Image, { StaticImageData } from "next/image";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  image?: StaticImageData;
};

const HeroSection = ({
  title,
  subtitle,
  image,
}: HeroSectionProps) => {
  if (image) {
    return (
      <section className="relative w-full h-[254px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#00355F]/60 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[#F4AB00] text-3xl md:text-5xl font-semibold">
            {title}
          </h1>

          <p className="mt-4 text-[#F4AB00] text-sm md:text-xl font-medium max-w-2xl">
            {subtitle}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-[220px] md:h-[254px] bg-[#00355F] flex items-center justify-center py-10 px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-[#F4AB00] text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          {title}
        </h1>

        <p className="mt-3 md:mt-4 text-[#F4AB00] text-sm sm:text-base md:text-xl font-medium leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;