import { PostProps } from "@/types/instagram";
import Link from "next/link";

const Post = ({ mediaUrl ,permalink ,caption }: PostProps) => {
  return (
    <div className="px-3 flex-[0_0_100%] md:flex-[0_0_25%]">
      <Link href={permalink} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-square max-w-[250px] rounded-2xl overflow-hidden mx-auto">
          <img src={mediaUrl} alt={caption} className="object-cover transition-transform duration-300 hover:scale-105 w-full h-full" />
        </div>
      </Link>
    </div>
  )
}
export default Post;