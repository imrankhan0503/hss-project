'use client'

import { useState } from "react"
import FormField from "@/components/AnmalanIntresse/InterestForm/FormField"
import { FormData, FormSectionDataField } from "@/types/form"

const formSectionData : FormSectionDataField[]= [
  {
    id: 1,
    name: 'name',
    label: 'Namn',
    type: 'text',
    pattern: "^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$",
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
    pattern: "^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$",
    required: false
  },
  {
    id: 4,
    name: 'mobileNumber',
    label: 'Telefonnummer',
    type: 'tel',
    pattern: "[0-9+\s()-]+",
    required: true
  },
  {
    id: 5,
    name: 'message',
    label: 'Meddelande',
    required: true
  }
]

type ContactInfoFormProps = {
  onSubmit: () => void
}

const initialFormData : FormData ={
    name: '',
    email: '',
    locality: '',
    mobileNumber:'',
    message: ''
}

const ContactInfoForm = ({ onSubmit }: ContactInfoFormProps) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const name = e.target.name
    const value = e.target.value

    setFormData((p=>({
      ...p,
      [name]:value
    })))
  }

  return (
    <form className="space-y-6">

      {formSectionData && formSectionData.map(f => (
        <FormField key={f.id} {...f} value={formData[f.name]} onChange={handleInputChange}/>
      ))}
      <div className="text-center">
        <button
          onClick={onSubmit}
          className="h-14 w-64 rounded-[10px] bg-primary text-xl font-bold text-secondary">
          Skicka
        </button>
      </div>

    </form>
  )
}

export default ContactInfoForm