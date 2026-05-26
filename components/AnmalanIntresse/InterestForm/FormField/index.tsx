type FormFieldProps = {
  name: string,
  type: string,
  label: string,
  pattern?: string,
  required?: boolean
}

const FormField = ({ name, type, label, pattern, required }: FormFieldProps) => {
  return (
    <>
      <div>
        <label
          htmlFor={name}
          className="mb-2 block text-base font-bold text-primary">
          {label}
        </label>

        <input
          id={name}
          type={type}
          pattern={pattern}
          required={required}
          className="h-14 w-full rounded-xl border border-primary/20 bg-primary/5 px-5 text-base text-primary outline-none"
        />
      </div>
    </>
  )
}

export default FormField;