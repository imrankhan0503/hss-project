import Steps from "@/components/AnmalanIntresse/Steps";
import InterestForm from "@/components/AnmalanIntresse/InterestForm";

const AnmalIntresse = () => {

  return (

    <main className="bg-primary/5 w-full overflow-x-hidden">

      <section className="w-full bg-[#00355F] px-4 py-12 sm:py-16 md:py-20">

        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-[#F4AB00] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">

            Anmäl intresse

          </h1>

          <p className="mt-4 text-[#F4AB00] text-sm sm:text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">

            Börja din resa med Hesselby Strands Sjöscoutkår idag

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
