export type PostProps = {
  mediaUrl: string,
  caption:string,
  permalink:string

}

export type PostDataProps = PostProps & {
  id: number
}