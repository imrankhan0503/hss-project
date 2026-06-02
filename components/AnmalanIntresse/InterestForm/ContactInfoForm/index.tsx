'use client'

import FormField from "@/components/AnmalanIntresse/InterestForm/FormField"
import { FormData, FormSectionDataField } from "@/types/form"
import { useForm } from "react-hook-form"

const formSectionData: FormSectionDataField[] = [
  {
    id: 1,
    name: 'name',
    label: 'Namn',
    type: 'text',
    required: true
  },
  {
    id: 2,
    name: 'email',
    label: 'E-post',
    type: 'email',
    required: true
  },
  {
    id: 3,
    name: 'locality',
    label: 'Ort',
    type: 'text',
    required: false
  },
  {
    id: 4,
    name: 'mobileNumber',
    label: 'Telefonnummer',
    type: 'tel',
    required: false
  },
  {
    id: 5,
    name: 'message',
    label: 'Meddelande',
    required: false
  }
]

type ContactInfoFormProps = {
  onSubmit: () => void
}


const ContactInfoForm = ({ onSubmit }: ContactInfoFormProps) => {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<FormData>()

  const onFormSubmit = async (formData: FormData) => {

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      onSubmit()
    } else {
      console.error('Failed to send form')
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">

      {formSectionData && formSectionData.map(f => (
        <FormField key={f.id} {...f} register={register} errors={errors} />
      ))}
      <div className="text-center">
        <button
          type='submit'
          disabled={isSubmitting}
          className="h-14 w-56 md:w-64 rounded-[10px] bg-primary text-lg md:text-xl font-bold text-secondary">
          {isSubmitting ? 'Skickar...' : 'Skicka'}
        </button>
      </div>
    </form>
  )
}

export default ContactInfoForm