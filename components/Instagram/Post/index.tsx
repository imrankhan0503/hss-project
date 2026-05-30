import { PostProps } from "@/types/instagram";
import Image from "next/image";
import Link from "next/link";

const Post = ({ image }: PostProps) => {
  return (
    <div className="px-3 flex-[0_0_100%] md:flex-[0_0_25%]">
      <Link href='https://www.instagram.com/tictacisthename/' target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-square max-w-[250px] rounded-2xl overflow-hidden mx-auto">
          <Image src={image} alt='a photo' fill className="object-cover transition-transform duration-300 hover:scale-105" />
        </div>
      </Link>
    </div>
  )
}
export default Post;