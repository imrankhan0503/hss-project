import { StaticImageData } from "next/image"

export type ServiceCardProps = {
  title: string,
  description: string,
  icon: StaticImageData,
  resize?: boolean
}
export type ServiceCardData = ServiceCardProps & {
  id: number
}

export type ScoutGroupCardProps = {
  title: string,
  description: string,
  color: string,
  href: string,
  icon: StaticImageData
}

export type ScoutGroupCardData = ScoutGroupCardProps & {
  id: number
}