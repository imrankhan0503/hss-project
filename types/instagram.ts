import { StaticImageData } from "next/image"

export type PostProps = {
  image: StaticImageData
}

export type PostDataProps = PostProps & {
  id: number
}