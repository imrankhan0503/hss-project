import { useState } from "react"
import Image from "next/image"
import ArrowIcon from "@/assets/images/icons/arrow.svg"

type ScoutInfoFormProps = {
    onNext: () => void
}

const ScoutInfoForm = ({ onNext }: ScoutInfoFormProps) => {

    const [isOpen, setIsOpen] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState("Välj avdelning")

    return (
        <form className="space-y-6">
            {/* Child name */}
            <div>
                <label
                    htmlFor="name"
                    className="mb-2 block text-base font-bold text-sky-950">
                    Scoutens namn
                </label>

                <input
                    id="name"
                    type="text"
                    pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$"
                    required
                    className="h-14 w-full rounded-xl border border-sky-950/20 bg-sky-950/5 px-5 text-base text-sky-950 outline-none"
                />
            </div>

            {/* Child age */}
            <div>
                <label
                    htmlFor="age"
                    className="mb-2 block text-base font-bold text-sky-950">
                    Ålder
                </label>

                <input
                    id="age"
                    type="number"
                    min="1"
                    max="99"
                    required
                    className="h-14 w-full rounded-xl border border-sky-950/20 bg-sky-950/5 px-5 text-base text-sky-950 outline-none"
                />
            </div>

            {/* Child group category */}
            <div>
                <label className="mb-2 block text-base font-bold text-sky-950">
                    Avdelning
                </label>

                <div className="relative">

                    {/* Closed dropdown - not active provide default Valj avdelning */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-14 w-full items-center justify-between rounded-xl border border-sky-950/20 bg-sky-950/5 px-5 text-base font-medium text-sky-950">

                        <span>{selectedCategory}</span>

                        <Image src={ArrowIcon} alt="Arrow icon" />
                    </button>

                    {/* Open dropdown - provide different age categories to choose */}
                    {isOpen && (
                        <div className="absolute mt-2 w-full rounded-[10px] bg-sky-950 p-5 text-yellow-500">

                            {/* Spårare (6-8 år) category */}
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedCategory("Spårare (6-8 år)")
                                    setIsOpen(false)
                                }}
                                className="block w-full rounded-md p-3 text-left text-xl transition-colors duration-200 hover:bg-yellow-600 hover:text-sky-950"
                            >
                                Spårare (6-8 år)
                            </button>

                            {/* Upptäckare (9-11 år) category  */}
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedCategory("Upptäckare (9-11 år)")
                                    setIsOpen(false)
                                }}
                                className="block w-full rounded-md p-3 text-left text-xl transition-colors duration-200 hover:bg-yellow-600 hover:text-sky-950"
                            >
                                Upptäckare (9-11 år)
                            </button>

                            {/* Äventyrare (12-14 år) category */}
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedCategory("Äventyrare (12-14 år)")
                                    setIsOpen(false)
                                }}
                                className="block w-full rounded-md p-3 text-left text-xl transition-colors duration-200 hover:bg-yellow-600 hover:text-sky-950"
                            >
                                Äventyrare (12-14 år)
                            </button>

                            {/* Rover (15+ år) category */}
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedCategory("Rover (15+ år)")
                                    setIsOpen(false)
                                }}
                                className="block w-full rounded-md p-3 text-left text-xl transition-colors duration-200 hover:bg-yellow-600 hover:text-sky-950"
                            >
                                Rover (15+ år)
                            </button>

                        </div>
                    )}
                </div>
            </div>

            {/* Next page button */}
            <button
                type="button"
                onClick={onNext}
                className="h-14 w-full rounded-xl bg-sky-950 text-xl font-bold text-yellow-500">
                Nästa
            </button>

            {/* Extra info about contact */}
            <div className="rounded-[10px] bg-sky-950 px-8 py-8 text-center text-yellow-500">
                <p className="text-lg font-bold">
                    Vi kontaktar dig efter att du skickat.
                </p>

                <p className="mt-4 text-base leading-8">
                    Efter din anmälan kommer vi kontakta dig med information om hur ni
                    registrerar er i Scoutnet.
                </p>
            </div>
        </form>
    )
}

export default ScoutInfoForm