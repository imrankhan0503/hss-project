import { StaticImageData } from "next/image"

export type InformationCardsProps = {
  icon: StaticImageData
  title: string,
  description: string,
  isPolicyBanner?: boolean
}

export type InformationCardsData = InformationCardsProps & {
  id: number
}