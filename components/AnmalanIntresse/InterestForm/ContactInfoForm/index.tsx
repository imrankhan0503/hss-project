'use client'

import FormField from "@/components/AnmalanIntresse/InterestForm/FormField"
import { FormData, FormSectionDataField } from "@/types/form"
import { useForm } from "react-hook-form"
import { t } from "@/i18n/t"
import { useLang } from "@/i18n/useLang";

type ContactInfoFormProps = {
  onSubmit: () => void
}

const ContactInfoForm = ({ onSubmit }: ContactInfoFormProps) => {
  const lang = useLang()

  const formSectionData: FormSectionDataField[] = [
    {
      id: 1,
      name: 'name',
      label: t('form.fields.name', lang),
      type: 'text',
      required: true
    },
    {
      id: 2,
      name: 'email',
      label: t('form.fields.email', lang),
      type: 'email',
      required: true
    },
    {
      id: 3,
      name: 'locality',
      label: t('form.fields.locality', lang),
      type: 'text',
      required: false
    },
    {
      id: 4,
      name: 'mobileNumber',
      label: t('form.fields.mobileNumber', lang),
      type: 'tel',
      required: false
    },
    {
      id: 5,
      name: 'message',
      label: t('form.fields.message', lang),
      required: false
    }
  ]


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
          {isSubmitting ? t('form.sendCTALoading', lang) : t('form.sendCTA', lang)}
        </button>
      </div>
    </form>
  )
}

export default ContactInfoForm