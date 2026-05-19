import { StaticImageData } from "next/image";

type ServiceCardProps = {
  title: string,
  description: string,
  icon: StaticImageData
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
        <img src={icon.src} alt={title}  className="w-10 h-10" />
        </div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-base text-primary max-w-sm">{description}</p>
    </div>
  )
}

export default ServiceCard;