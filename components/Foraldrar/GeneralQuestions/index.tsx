'use client'

import { useState } from 'react'
import Image from "next/image";
import GeneralQuestionsIcon from '@/assets/images/icons/general-questions.svg'
import DropArrow from '@/assets/images/icons/FAQ-arrow.svg'
import { t } from '@/i18n/t'
import { useLang } from '@/i18n/useLang'

type GeneralQuestionsProps = {
  id: number
  question: string
  answer: string
}

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

  const lang = useLang()

  const faqs: GeneralQuestionsProps[] = [
    {
      id: 1,
      question: t('faq.questions.question-one', lang),
      answer: t('faq.answers.answer-one', lang),
    },
    {
      id: 2,
      question: t('faq.questions.question-two', lang),
      answer: t('faq.answers.answer-two', lang),
    },
    {
      id: 3,
      question: t('faq.questions.question-three', lang),
      answer: t('faq.answers.answer-three', lang),
    },
    {
      id: 4,
      question: t('faq.questions.question-four', lang),
      answer: t('faq.answers.answer-four', lang),
    },
    {
      id: 5,
      question: t('faq.questions.question-five', lang),
      answer: t('faq.answers.answer-five', lang),
    },
    {
      id: 6,
      question: t('faq.questions.question-six', lang),
      answer: t('faq.answers.answer-six', lang),
    },
    {
      id: 7,
      question: t('faq.questions.question-seven', lang),
      answer: t('faq.answers.answer-seven', lang),
    },
  ]

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
            {t('faq.title', lang)}
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