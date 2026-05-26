import FormField from "@/components/AnmalanIntresse/InterestForm/FormField"

const formSectionData =[
  {
    id:1,
    name: 'name',
    label:'Namn',
    type:'text',
    pattern:"^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$",
    required:true
  },
  {
    id:2,
    name:'email',
    label:'E-post',
    type:'email',
    required:true
  },
  {
    id:3,
    name:'locality',
    label:'Ort',
    type:'text',
    pattern:"^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$",
    required:false
  },
  {
    id:4,
    name:'mobile-number',
    label:'Telefonnummer',
    type:'tel',
    pattern:"[0-9+\s()-]+",
    required:true
  },
]


type ContactInfoFormProps = {
  onSubmit: () => void
}

const ContactInfoForm = ({ onSubmit }: ContactInfoFormProps) => {
  return (
    <form className="space-y-6">
     
     {formSectionData && formSectionData.map(f=>(
      <FormField key={f.id} {...f} />
     ))}

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-base font-bold text-primary"
        >
          Meddelande
        </label>

        <textarea
          id="message"
          rows={4}
          className="w-full rounded-xl border border-primary/20 bg-primary/5 p-5 text-primary outline-none resize-none"
        />
      </div>

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