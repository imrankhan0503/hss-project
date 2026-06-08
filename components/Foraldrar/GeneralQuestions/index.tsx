'use client'

import { useState } from 'react'
import Image from "next/image";
import GeneralQuestionsIcon from '@/assets/images/icons/general-questions.svg'
import DropArrow from '@/assets/images/icons/FAQ-arrow.svg'

type GeneralQuestionsProps = {
    id: number
    question: string
    answer: string
}

const faqs: GeneralQuestionsProps[] = [
    {
        id: 1,
        question: 'Varför bär vi scoutuniform?',
        answer: 'Scoutuniformen är ett sätt för oss alla att visa att vi tillhör scouterna. Scoutuniformen skapar gemenskap, stärker vår identitet och är en del av vårt symboliska ramverk. Scoutuniformer används i olika utföranden runt om i världen och visar att vi tillhör en global rörelse.',
    },
    {
        id: 2,
        question: 'Jag är en ny scoutledare! Vilken utbildning ska jag gå först?',
        answer: 'Den första utbildningen du kommer att gå är Safe Sessions. Detta är den enda obligatoriska utbildningen du måste ha gått för att bli scoutledare. Safe Sessions är en onlinekurs som du gör själv och tar cirka 1 timme att genomföra.',
    },
    {
        id: 3,
        question: 'Jag har tappat bort min faktura. Vad gör jag?',
        answer: 'Skicka ett mejl till support@scouterna.se med ditt namn och medlemsnummer så får du en kopia av fakturan via e-post.',
    },
    {
        id: 4,
        question: 'Vad ingår i min medlemsavgift?',
        answer: 'Gå till www.scoutnet.se, logga in och ändra din faktureringsadress.',
    },
    {
        id: 5,
        question: 'Hur ändrar jag min faktureringsadress?',
        answer: 'Gå till www.scoutnet.se eller kontakta din scoutkår.',
    },
    {
        id: 6,
        question: 'Beloppet på min faktura är felaktigt. Vad gör jag?',
        answer: 'Skicka ett e-postmeddelande till support@scouterna.se och ange orsaken till att beloppet är felaktigt, ditt medlemsnummer, fackföreningsnamnet och den aktuella fakturan.',
    },
    {
        id: 7,
        question: 'Hur ändrar jag mina kontaktuppgifter?',
        answer: 'Logga in på www.scoutnet.se för att uppdatera dina uppgifter.',
    },
]

const FAQItem = ({ question, answer }: GeneralQuestionsProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex min-h-14 w-full items-center justify-between gap-4 bg-primary px-6 py-3 text-left text-base font-medium text-secondary outline outline-primary/20 transition-all 
                    ${isOpen ? 'rounded-t-xl' : 'rounded-xl'}`}
            >
                <span className="flex-1">
                    {question}
                </span>

                <Image
                    src={DropArrow}
                    alt="Drop down arrow"
                    width={16}
                    height={14}
                    className={`shrink-0 transition-transform duration-300 
                        ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`overflow-hidden rounded-b-xl bg-primary/5 text-base font-medium leading-relaxed text-primary outline outline-primary/20 transition-all duration-300 
                    ${isOpen
                        ? 'max-h-96 px-6 py-5 opacity-100'
                        : 'max-h-0 px-6 py-0 opacity-0'
                    }`}
            >
                {answer}
            </div>
        </div>
    )
}

const GeneralQuestions = () => {
    return (
        <section className="w-full border-b border-primary/25 py-12">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-10 flex items-center justify-center gap-2 md:mb-14 md:gap-3 md:justify-start">
                    <Image
                        src={GeneralQuestionsIcon}
                        alt="General questions icon"
                        className="h-12 w-auto md:h-auto"
                    />

                    <h2 className="text-xl md:text-2xl font-bold text-primary">
                        Vanliga Frågor
                    </h2>
                </div>

                <div className="mx-auto flex max-w-275 flex-col gap-1.5">
                    {faqs.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            id={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default GeneralQuestions