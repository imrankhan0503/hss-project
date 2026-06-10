'use client'
import { useState } from "react"
import ContactInfoForm from "./ContactInfoForm"
import SuccessForm from "./SuccessForm"
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

const InterestForm = () => {
  const lang = useLang()
  const [step, setStep] = useState(1)

  return (

    <section className="w-full max-w-175 rounded-3xl bg-background px-15 py-10">

      <div className="mb-2 flex items-center justify-between">
        <h1
          className={`text-3xl font-bold text-primary ${step === 2 ? "hidden md:block" : ""}`}>
          {t("form.header.title", lang)}
        </h1>
        {step === 2 && (
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mx-auto h-11 rounded-[50px] bg-secondary px-6 text-base font-bold text-primary md:mx-0">
            {t("form.header.buttonText", lang)}
          </button>
        )}
      </div>
      {step !== 2 && (
        <div className="mb-10">
          <div className="mb-3 text-sm">

            <span
              className='font-bold text-primary'>
              {t("form.stepsLabel", lang)}
            </span>
          </div>

          <div className="h-3 rounded-[50px] bg-primary/5">
            <div className={`h-3 rounded-[50px] bg-primary transition-all duration-300 ${step === 1 ? "w-1/2" : "w-full"}`} />
          </div>
        </div>
      )}

      {step === 1 && (
        <ContactInfoForm
          onSubmit={() => setStep(2)} />
      )}
      {step === 2 && (
        <SuccessForm />
      )}
    </section>
  )
}

export default InterestForm