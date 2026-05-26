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
  pattern?: string;
  required?: boolean;
};

export type FormSectionDataField = BaseSectionField & {
  id: number;
}

export type FormFieldProps = BaseSectionField & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}