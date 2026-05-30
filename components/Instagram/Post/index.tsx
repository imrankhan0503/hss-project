import Image, { StaticImageData } from "next/image";

const Post = ({ image }:{image: StaticImageData}) => {
  return (
      <div className="px-3 flex-[0_0_100%] md:flex-[0_0_25%]">
        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image src={image} alt='a photo' fill className="object-cover" />
        </div>
      </div>
  )
}
export default Post;