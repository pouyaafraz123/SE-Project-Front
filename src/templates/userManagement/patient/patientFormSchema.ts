import { ShapeOf, toFormikSchema, z } from '@utils'
import { IPhoneNumber } from '@/components/formControls'
import { ILanguageLists } from '@/components/listBoxes'
import { IOption } from '@/interfaces'

export type PatientFormSchema = {
  firstName: string
  lastName: string
  gender: IOption
  birthday: string
  nationalCode: string
  // hfCountry: IOption
  // hfState: IOption
  // hfCity: IOption
  // hfType: IOption
  // hfName: IOption
  // patientFileNumber: string
  email: string
  phoneNumber: IPhoneNumber
  mobileNumber: IPhoneNumber
  livingCountry: IOption
  livingState: IOption
  livingCity: IOption
  address: string
  postalCode: string
}

const validationSchema = z.object<ShapeOf<PatientFormSchema>>({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.dropdown(),
  birthday: z.string(),
  nationalCode: z.string(),
  // hfCountry: z.dropdown(),
  // hfState: z.dropdown(),
  // hfCity: z.dropdown(),
  // hfType: z.dropdown(),
  // hfName: z.dropdown(),
  // patientFileNumber: z.string().optional(),
  email: z.string(),
  phoneNumber: z.phone(),
  mobileNumber: z.phone(),
  livingCountry: z.dropdown(),
  livingState: z.dropdown(),
  livingCity: z.dropdown(),
  address: z.string(),
  postalCode: z.string()
})
export const PatientFormValidationSchema = toFormikSchema(validationSchema)
export const PatientFormInitialValues: PatientFormSchema = {
  address: '',
  birthday: '',
  email: '',
  firstName: '',
  gender: { key: '', value: '' },
  // hfCity: { key: '', value: '' },
  // hfCountry: { key: '', value: '' },
  // hfName: { key: '', value: '' },
  // hfState: { key: '', value: '' },
  // hfType: { key: '', value: '' },
  lastName: '',
  livingCity: { key: '', value: '' },
  livingCountry: { key: '', value: '' },
  livingState: { key: '', value: '' },
  phoneNumber: { code: '', number: '' },
  mobileNumber: { code: '', number: '' },
  nationalCode: '',
  // patientFileNumber: '',
  postalCode: ''
}
