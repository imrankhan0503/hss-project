import Image, { StaticImageData } from "next/image";

type ServiceCardProps = {
  title: string,
  description: string,
  icon: StaticImageData
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
        <Image src={icon} alt={title}  className="w-14 h-14" />
        </div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-base text-primary max-w-sm text-justify">{description}</p>
    </div>
  )
}

export default ServiceCard;