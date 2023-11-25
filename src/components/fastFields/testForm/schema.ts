import { FormikConfig } from 'formik'
import { toFormikSchema, z } from '@utils'

export interface IFormValues {
  doctorCountry: { key: string; value: string }
  doctorState: { key: string; value: string }
  doctorCity: { key: string; value: string }
  doctorSpeciality: { key: string; value: string }
  doctor: { key: string; value: string }
  hfType: { key: string; value: string }
  hf: { key: string; value: string }
  firstName: string
  lastName: string
  gender: { key: string; value: string }
  countryOfLicense: { key: string; value: string }
  hfCountry: { key: string; value: string }
  hfCity: { key: string; value: string }
  hfState: { key: string; value: string }
  country: { key: string; value: string }
  state: { key: string; value: string }
  phone: { code: string; number: string }
  date?: Date
  countryMulti: { key: string; value: string }[]
  time: string
  radioGender: 'male' | 'female'
}

const schema = z.object({
  firstName: z.string(), // default message
  lastName: z.string(),
  countryOfLicense: z.dropdown(),
  country: z.dropdown(),
  time: z.string()
})

export const formConfig: FormikConfig<IFormValues> = {
  initialValues: {
    doctorCountry: { key: '', value: '' },
    doctorState: { key: '', value: '' },
    doctorCity: { key: '', value: '' },
    doctorSpeciality: { key: '', value: '' },
    doctor: { key: '', value: '' },
    hfType: { key: '', value: '' },
    hf: { key: '', value: '' },
    firstName: '',
    lastName: '',
    gender: { key: '', value: '' },
    countryOfLicense: { key: '', value: '' },
    hfCountry: { key: '', value: '' },
    hfCity: { key: '', value: '' },
    hfState: { key: '', value: '' },
    country: { key: '', value: '' },
    state: { key: '', value: '' },
    phone: { code: '', number: '' },
    date: undefined,
    countryMulti: [],
    time: '',
    radioGender: 'male'
  },
  validationSchema: toFormikSchema(schema),
  validateOnChange: true,
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2))
  }
}
