import { StaticImageData } from "next/image"

export type PostProps = {
  media_url: StaticImageData,
  caption:string,
  permalink:string

}

export type PostDataProps = PostProps & {
  id: number
}