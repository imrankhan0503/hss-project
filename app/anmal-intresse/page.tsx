import Steps from "@/components/AnmalanIntresse/Steps";
import InterestForm from "@/components/AnmalanIntresse/InterestForm";

const AnmalIntresse = () => {
<<<<<<< HEAD

  return (

=======

     return (

>>>>>>> 001-feature-navigation
        <main className="bg-primary/5 w-full overflow-x-hidden">

            <section className="w-full min-h-[220px] md:h-[254px] bg-[#00355F] flex items-center justify-center py-10">

                <div className="text-center max-w-3xl flex flex-col px-4 overflow-hidden">

                    <h1 className="text-[#F4AB00] text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">

                        Anmäl Intresse

          </h1>

                    <p className="mt-3 md:mt-4 text-[#F4AB00] text-sm sm:text-base md:text-xl font-medium leading-relaxed">

                        Börja din resa med Hässelby Strands Sjöscoutkår idag

          </p>

        </div>

      </section>

      <Steps />
      <div className="flex justify-center px-4 py-16">
        <InterestForm />
      </div>

    </main>

  )

}

export default AnmalIntresse;
