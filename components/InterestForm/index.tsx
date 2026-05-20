'use client'
import { useState } from "react"
import ScoutInfoForm from "./ScoutInfoForm"
import ContactInfoForm from "./ContactInfoForm"
import SuccessForm from "./SuccessForm"

const InterestForm = () => {

    const [step, setStep] = useState(1)

    return (

        <section className="w-full max-w-175 rounded-3xl bg-white px-15 py-10">

            {/* Main Title for all 3 steps form */}
            <div className="w-60 h-9 justify-start text-sky-950 text-3xl font-bold">Anmäl intresse<br /></div>

            {/* Include scout info, Kontaktuppgifter an progress bar: displaying only first 2 pages */}
            {/* If page=1 "Scout Info" active color / progress bar 50% if || if page=2 "Kontaktuppgifter" active color / progress bar 100$ || Page=3 none  */}
            {step !== 3 && (
                <div className="mb-10">

                    <div className="mb-3 flex justify-between text-sm">
                        <span
                            className={`font-bold ${step === 1 ? "text-sky-950" : "text-sky-950/50"}`}>
                            Scout info
                        </span>

                        <span
                            className={`font-bold ${step === 2 ? "text-sky-950" : "text-sky-950/50"}`}>
                            Kontaktuppgifter
                        </span>
                    </div>

                    <div className="h-3 rounded-[50px] bg-sky-950/5">
                        <div className={`h-3 rounded-[50px] bg-sky-950 transition-all duration-300 ${step === 1 ? "w-1/2" : "w-full"}`} />
                    </div>
                </div>
            )}

            {/* Navigation between pages, calling on click child-components */}
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