import Image from "next/image";
import VerksamhetTop from "../../assets/images/verksamhet-top/verksamhet-top.svg"

const Page = () => {
  return (
    <div className="w-full">

      <Image 
             src={VerksamhetTop}
              alt="anmal-interest background image"
              width={1440}
              height={253.731}
              priority 
              className="w-full h-auto block"/>
    
    </div>
  )
}

export default Page