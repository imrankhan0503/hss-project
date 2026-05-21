import Image from "next/image";
import ForaldrarTop from "../../assets/images/for-foraldrar-top/for-foraldrar-top.svg"

const ForaldrarPage = () => {
  return (
    <div className="w-full">

      <Image 
             src={ForaldrarTop}
              alt="anmal-interest background image"
              width={1440}
              height={253.731}
              priority 
              className="w-full h-auto block"/>
    
    </div>
  )
}

export default ForaldrarPage