'use client'
import { useState } from "react"
import ScoutInfoForm from "./ScoutInfoForm"
import ContactInfoForm from "./ContactInfoForm"
import SuccessForm from "./SuccessForm"

const InterestForm = () => {

    const [step, setStep] = useState(1)

    return (

        <section className="w-full max-w-175 rounded-3xl bg-white px-15 py-10">

            <div className="w-60 h-9 justify-start text-sky-950 text-3xl font-bold font-['Inter']">Anmäl intresse<br /></div>

            {step === 1 && (
                <ScoutInfoForm onNext={() => setStep(2)} />
            )}
            {step === 2 && (
                <ContactInfoForm
                    onBack={() => setStep(1)}
                    onSubmit={() => setStep(3)} />
            )}
            {step === 3 && (
                <SuccessForm />
            )}
        </section>

    )
}

export default InterestForm