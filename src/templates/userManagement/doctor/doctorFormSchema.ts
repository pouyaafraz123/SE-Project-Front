import { ShapeOf, toFormikSchema, z } from '@utils'
import { IPhoneNumber } from '@/components/formControls'
import { IOption } from '@/interfaces'

export type DoctorFormSchema = {
  firstName: string
  lastName: string
  gender: IOption
  birthday: string
  speciality: IOption
  subSpeciality: IOption
  degree: IOption
  licenseCountry: IOption
  licenseNumber: string
  // doctorAdmin: IOption
  hfCountry: IOption
  hfState: IOption
  hfCity: IOption
  hfType: IOption
  hfName: IOption
  email: string
  website: string
  phoneNumber: IPhoneNumber
  mobileNumber: IPhoneNumber
  officePhoneNumber: IPhoneNumber
  livingCountry: IOption
  livingState: IOption
  livingCity: IOption
  postalCode: string
  address: string
  officeCountry: IOption
  officeState: IOption
  officeCity: IOption
  officeAddress: string
  nationalId: string
}

const validationSchema = z.object<ShapeOf<DoctorFormSchema>>({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.dropdown(),
  birthday: z.string(),
  speciality: z.dropdown(),
  subSpeciality: z.dropdown(true),
  degree: z.dropdown(),
  licenseCountry: z.dropdown(),
  licenseNumber: z.string(),
  // doctorAdmin: z.dropdown(),
  hfCountry: z.dropdown(true),
  hfState: z.dropdown(true),
  hfCity: z.dropdown(true),
  hfType: z.dropdown(true),
  hfName: z.dropdown(),
  email: z.string(),
  website: z.string().optional(),
  phoneNumber: z.phone(),
  mobileNumber: z.phone(),
  // officePhoneNumber: z.phone(),
  livingCountry: z.dropdown(),
  livingState: z.dropdown(),
  livingCity: z.dropdown(),
  postalCode: z.string(),
  address: z.string(),
  officeCountry: z.dropdown(),
  officeState: z.dropdown(),
  officeCity: z.dropdown(),
  officeAddress: z.string(),
  nationalId: z.coerce.number()
})
export const DoctorFormValidationSchema = toFormikSchema(validationSchema)
export const DoctorFormInitialValues: DoctorFormSchema = {
  address: '',
  birthday: '',
  degree: { key: '', value: '' },
  // doctorAdmin: { key: '', value: '' },
  email: '',
  firstName: '',
  gender: { key: '', value: '' },
  hfCity: { key: '', value: '' },
  hfCountry: { key: '', value: '' },
  hfName: { key: '', value: '' },
  hfState: { key: '', value: '' },
  hfType: { key: '', value: '' },
  lastName: '',
  licenseCountry: { key: '', value: '' },
  licenseNumber: '',
  livingCity: { key: '', value: '' },
  livingCountry: { key: '', value: '' },
  livingState: { key: '', value: '' },
  officeAddress: '',
  officeCity: { key: '', value: '' },
  officeCountry: { key: '', value: '' },
  officeState: { key: '', value: '' },
  officePhoneNumber: { code: '', number: '' },
  phoneNumber: { code: '', number: '' },
  postalCode: '',
  speciality: { key: '', value: '' },
  website: '',
  mobileNumber: { code: '', number: '' },
  subSpeciality: { key: '', value: '' },
  nationalId: ''
}
