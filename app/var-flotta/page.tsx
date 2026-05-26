import Image from "next/image"
import VarFlottaTop from "../../assets/images/background/vår-flotta-bg.jpg"
import BoatsInformation from "@/components/VarFlota/BoatsInformation"
import LocationsInformation from "@/components/VarFlota/LocationsInformation"
const VarFlotta = () => {

    return (

        <main>

            <section className="relative w-full h-[254px] overflow-hidden">


                <Image
                    src={VarFlottaTop}
                    alt="Vår Flotta Background"
                    fill
                    priority
                    className="object-cover"
                />


                <div className="absolute inset-0 bg-[#00355F]/60 z-10" />


                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">

                    <h1 className="text-[#F4AB00] text-3xl md:text-5xl font-semibold">

                        Vår Flotta & Lokaler

                    </h1>

                    <p className="mt-4 text-[#F4AB00] text-sm md:text-xl font-medium max-w-2xl">

                        Utforska våra båtar och de platser där vi samlas och seglar

                    </p>

                </div>

            </section>

            <BoatsInformation />
            <LocationsInformation />
        </main>

    )
}

export default VarFlotta