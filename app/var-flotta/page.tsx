import Image from "next/image";
import VarFlottaTop from "../../assets/images/vår-flotta-images/Top.svg"

const Page = () => {
  return (
    <div className="w-full">

      <Image 
             src={VarFlottaTop}
              alt="anmal-interest background image"
              width={1440}
              height={253.731}
              priority 
              className="w-full h-auto block"/>
    
    </div>
  )
}

export default Page