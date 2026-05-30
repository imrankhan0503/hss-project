import Image from "next/image";
import InstagramLogo from '@/assets/images/icons/Instagram.svg'

const InstagramSection = () => {
  return (
    <section className="w-full px-6 py-12 md:px-[70]">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
        <Image src={InstagramLogo} alt="instagram logo" className="w-9 md:w-12 h-9 md:h-12" />
        <h2 className="text-xl md:text-2xl font-bold text-primary">
          Live från havet
        </h2>
      </div>
    </section>
  )
}
export default InstagramSection;