import { FormFieldProps } from "@/types/form";

const FormField = ({ name, type, label, required, register, errors }: FormFieldProps) => {
  return (
    <>
      <div>
        <label
          htmlFor={name}
          className="mb-2 block text-base font-bold text-primary">
          {label}
          {required && <span className="text-primary">*</span>}
        </label>

        {name === 'message' ?
          <textarea
            id={name}
            rows={4}
            className={`w-full rounded-xl border border-primary/20 bg-primary/5 p-5 text-primary outline-none resize-none ${errors[name] ? 'border-red-500 focus:border-red-500' : 'border-primary/20 focus:border-primary'}`}
            {...register(name, { required })} />
          :
          <input
            id={name}
            type={type}
            className={`h-14 w-full rounded-xl border border-primary/20 bg-primary/5 px-5 text-base text-primary outline-none ${errors[name] ? 'border-red-500 focus:border-red-500' : 'border-primary/20 focus:border-primary'} `}
            {...register(name, {
              required, ...(name === "mobileNumber" && {
                pattern: {
                  value: /^[0-9+() -]{7,}$/,
                  message: "Ogiltigt telefonnummer"
                }
              }),
              ...(name === "name" && {
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
                  message: "Endast bokstäver är tillåtna"
                }
              })
            })} />
        }
        {errors[name] && (
          <p className="text-red-500 text-sm mt-1">
            {errors[name].message || 'Detta fält är obligatoriskt.'}
          </p>
        )}
      </div>
    </>
  )
}

export default FormField;