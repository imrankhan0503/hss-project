import InterestForm from "@/components/AnmalanIntresse/InterestForm"

const ContactPage = () => {
  return (
    <div className="w-full">
      <section className="w-full min-h-[220px] md:h-[254px] bg-[#00355F] flex items-center justify-center px-4 py-10 relative overflow-hidden">
        <div className="text-center max-w-3xl z-10">
          <h1 className="text-[#F4AB00] text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
            Kontakta Oss
          </h1>
          <p className="mt-3 md:mt-4 text-[#F4AB00] text-sm sm:text-base md:text-xl font-medium">
            Oavsett om du har en fråga, behöver support eller vill veta mer - vi finns här för dig.
          </p>
        </div>
      </section>
      <div className="flex justify-center px-4 py-16 bg-primary/5">
        <InterestForm />
      </div>
    </div>
  )
}

export default ContactPage;