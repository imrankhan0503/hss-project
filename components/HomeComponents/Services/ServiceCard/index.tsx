import Image from "next/image";
import { ServiceCardProps } from "@/types/home";

const ServiceCard = ({ title, description, icon ,resize }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
        <Image src={icon} alt={title}  className= {`{${resize ? 'w-10 h-10'  : 'w-14 h-14'} object-contain `}/>
        </div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-base text-primary max-w-sm text-justify">{description}</p>
    </div>
  )
}

export default ServiceCard;