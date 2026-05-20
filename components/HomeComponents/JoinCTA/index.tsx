import Link from "next/link"

const JoinCTASection = () => {
  return (
    <section className="bg-primary px-6 py-12 md:py-16">
      <div className="w-full mx-auto flex flex-col items-center text-center">
        <h2 className="text-secondary text-2xl md:text-3xl font-bold"> Redo att börja ditt äventyr?  </h2>
        <h4 className="mt-6 text-secondary text-lg md:text-xl font-medium"> Prova på en träff utan förpliktelser. Välkommen ombord!</h4>
        <Link href='/anmal-intresse' className="mt-8 py-3 md:py-4 px-10 md:px-14 bg-secondary rounded-full text-primary text-xl font-bold">Anmäl intresse </Link>
      </div>
    </section>
  )
}

export default JoinCTASection;