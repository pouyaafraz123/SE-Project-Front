import { FormikConfig, FormikProps } from 'formik'
import { z, toFormikSchema } from '@utils'

export interface IFormValues {
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
}

const schema = z.object({
  firstName: z.string(), // default message
  lastName: z.string(),
  countryOfLicense: z.dropdown()
})

export const formConfig: FormikConfig<IFormValues> = {
  initialValues: {
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
    date: undefined
  },
  validationSchema: toFormikSchema(schema),
  validateOnChange: true,
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2))
  }
}
