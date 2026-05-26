import { FormFieldProps } from "@/types/form";

const FormField = ({ name, type, label, pattern, required, value, onChange }: FormFieldProps) => {
  return (
    <>
      <div>
        <label
          htmlFor={name}
          className="mb-2 block text-base font-bold text-primary">
          {label}
        </label>

        {name === 'message' ?
          <textarea
            id={name}
            name={name}
            rows={4}
            value={value}
            onChange={onChange}
            required={required}
            className="w-full rounded-xl border border-primary/20 bg-primary/5 p-5 text-primary outline-none resize-none"
          />
          :
          <input
            id={name}
            name={name}
            type={type}
            pattern={pattern}
            value={value}
            onChange={onChange}
            required={required}
            className="h-14 w-full rounded-xl border border-primary/20 bg-primary/5 px-5 text-base text-primary outline-none"
          />
        }
      </div>
    </>
  )
}

export default FormField;