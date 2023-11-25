import { ShapeOf, toFormikSchema, z } from '@utils'
import { IPhoneNumber } from '@/components/formControls'
import { ILanguageLists } from '@/components/listBoxes'
import { IOption } from '@/interfaces'

export type StaffFormSchema = {
  firstName: string
  lastName: string
  gender: IOption
  birthday: string
  staffId: string
  hfCountry: IOption
  hfState: IOption
  hfCity: IOption
  hfType: IOption
  hfName: IOption
  department: IOption
  email: string
  phoneNumber: IPhoneNumber
  officePhoneNumber: IPhoneNumber
  livingCountry: IOption
  livingState: IOption
  livingCity: IOption
  address: string
  postalCode: string
  language: IOption
  languageSkills: IOption
  languageLists: ILanguageLists[]
}

const validationSchema = z.object<ShapeOf<StaffFormSchema>>({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.dropdown(),
  birthday: z.string(),
  staffId: z.string(),
  hfCountry: z.dropdown(),
  hfState: z.dropdown(),
  hfCity: z.dropdown(),
  hfType: z.dropdown(),
  hfName: z.dropdown(),
  department: z.dropdown(),
  email: z.string(),
  phoneNumber: z.phone(),
  //   officePhoneNumber: IPhoneNumber
  livingCountry: z.dropdown(),
  livingState: z.dropdown(),
  livingCity: z.dropdown(),
  address: z.string(),
  postalCode: z.string()
})
export const StaffFormValidationSchema = toFormikSchema(validationSchema)
export const StaffFormInitialValues: StaffFormSchema = {
  address: '',
  birthday: '',
  email: '',
  firstName: '',
  gender: { key: '', value: '' },
  hfCity: { key: '', value: '' },
  hfCountry: { key: '', value: '' },
  hfName: { key: '', value: '' },
  department: { key: '', value: '' },
  hfState: { key: '', value: '' },
  hfType: { key: '', value: '' },
  language: { key: '', value: '' },
  languageSkills: { key: '', value: '' },
  languageLists: [],
  lastName: '',
  livingCity: { key: '', value: '' },
  livingCountry: { key: '', value: '' },
  livingState: { key: '', value: '' },
  phoneNumber: { code: '', number: '' },
  officePhoneNumber: { code: '', number: '' },
  staffId: '',
  postalCode: ''
}
