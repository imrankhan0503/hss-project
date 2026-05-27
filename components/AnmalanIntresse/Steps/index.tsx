import StepsCard from "./StepsCard"

const Steps = () => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-360 px-4 py-16 md:px-10 md:py-20">

        <h2 className="mb-12 text-center text-3xl font-bold text-primary">
          Så här går det till
        </h2>

        <div className="grid md:grid-cols-3">

          <StepsCard
            number="1"
            title="Fyll i formuläret"
            text="Var försiktig när du fyller i formuläret."
            line={true}
          />

          <StepsCard
            number="2"
            title="Skicka formuläret till oss"
            text="För att skicka in, fyll bara i all information."
            line={true}
          />

          <StepsCard
            number="3"
            title="Vänta på vårt samtal."
            text="Vi kontaktar dig så snart som möjligt för att samordna."
          />

        </div>
      </div>
    </section>
  )
}

export default Steps