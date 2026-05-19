import Image from "next/image";
import AnmalInterestTop from "../../assets/images/anmal-bg/anmal-bg-top.svg"

const Page = () => {
  return (
    <div className="w-full">

      <Image 
             src={AnmalInterestTop}
              alt="anmal-interest background image"
              width={1440}
              height={253.731}
              priority 
              className="w-full h-auto block"/>
    
    </div>
  )
}

export default Page