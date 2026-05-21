import Image from "next/image";
import ForaldrarTop from "../../assets/images/background/för-föräldrar-bg.jpg"

const ForaldrarPage = () => {
  return (
    <main>
    
                <section className="relative w-full h-[254px] overflow-hidden">
    
                    
                    <Image
                        src={ForaldrarTop}
                        alt="Vår Flotta Background"
                        fill
                        priority
                        className="object-cover"
                    />
    
                   
                    <div className="absolute inset-0 bg-[#00355F]/60 z-10" />
    
                    
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
    
                        <h1 className="text-[#F4AB00] text-3xl md:text-5xl font-semibold">
    
                            För Föräldrar
    
                        </h1>
    
                        <p className="mt-4 text-[#F4AB00] text-sm md:text-xl font-medium max-w-2xl">
    
                            Information, svar och resurser för er som vårdnadshavare
    
                        </p>
    
                    </div>
                  
                </section>
    
            </main>
    
  )
}

export default ForaldrarPage