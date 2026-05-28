import { FieldErrors, UseFormRegister } from "react-hook-form";

export type FormFieldNamesTypes = 'name' | 'email' | 'locality' | 'mobileNumber' | 'message'

export type FormData = {
  name: string,
  email: string,
  locality: string,
  mobileNumber: string,
  message: string
}

type BaseSectionField = {
  name: FormFieldNamesTypes;
  label: string;
  type?: string;
  required?: boolean;
};

export type FormSectionDataField = BaseSectionField & {
  id: number;
}

export type FormFieldProps = BaseSectionField & {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}