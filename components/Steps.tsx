const Steps = () => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-360 px-4 py-16 md:px-10 md:py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">
          Så här går det till
        </h2>

        <div className="grid md:grid-cols-3">
          
          <div className="relative flex min-h-72 flex-col items-center border-b border-primary/20 px-4 py-12 text-center md:min-h-80 md:border-b-0">
            
            <div className="absolute left-1/2 top-18.5 hidden h-0.5 w-full bg-primary/40 md:block"></div>

            <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-primary">
              1
            </div>

            <h3 className="mt-9 text-2xl font-bold text-primary">
              Fyll i formuläret
            </h3>

            <p className="mt-6 max-w-72 text-base text-primary">
              Var försiktig när du fyller i formuläret.
            </p>
          </div>

          <div className="relative flex min-h-72 flex-col items-center border-b border-primary/20 px-4 py-12 text-center md:min-h-80 md:border-b-0">
            
            <div className="absolute left-1/2 top-18.5 hidden h-0.5 w-full bg-primary/40 md:block"></div>

            <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-primary">
              2
            </div>

            <h3 className="mt-9 text-2xl font-bold text-primary">
              Skicka formuläret till oss
            </h3>

            <p className="mt-6 max-w-72 text-base text-primary">
              För att skicka in, fyll bara i all information.
            </p>
          </div>
          
          <div className="relative flex min-h-72 flex-col items-center border-b border-primary/20 px-4 py-12 text-center md:min-h-80 md:border-b-0">

            <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-primary">
              3
            </div>

            <h3 className="mt-9 text-2xl font-bold text-primary">
              Vänta på vårt samtal.
            </h3>

            <p className="mt-6 max-w-72 text-base text-primary">
              Vi kontaktar dig så snart som möjligt för att samordna.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Steps