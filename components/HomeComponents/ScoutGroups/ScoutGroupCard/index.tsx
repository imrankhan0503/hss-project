import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ScoutGroupCardProps = {
  title: string,
  description: string,
  color: string,
  href: string,
  icon: StaticImageData
}

const ScoutGroupCard = ({ title, description, color, icon, href }: ScoutGroupCardProps) => {
  return (
    <>
      <div className={`${color} rounded-[20px] md:rounded-3xl px-6 py-8 md:py-10 flex flex-col items-center text-center min-h-[320px] md:min-h-96 shadow-[0px_10px_20px_rgba(0,0,0,0.05)]`}>
        <Image src={icon} alt={title} className="w-28 md:w-32 h-auto object-contain" />
        <div className="mt-6 flex flex-col items-center gap-3">
          <h3 className="text-primary text-xl md:text-2xl font-semibold md:font-bold">{title}</h3>
          <p className="text-primary text-base font-normal">{description}</p>
        </div>
        <Link href={href} className="mt-auto bg-secondary text-primary text-sm md:text-base font-medium rounded-full px-6 py-2 md:px-8 md:py-3">Läs mer</Link>
      </div>
    </>
  )
}
export default ScoutGroupCard;