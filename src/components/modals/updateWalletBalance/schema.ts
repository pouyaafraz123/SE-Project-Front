import { FormikConfig } from 'formik'
import { toFormikSchema, z } from '@/utils'

export interface IFormValues {
  amount: string
}

const schema = z.object({
  amount: z.coerce.number()
})

export const formConfig: FormikConfig<IFormValues> = {
  initialValues: {
    amount: ''
  },
  validationSchema: toFormikSchema(schema),
  validateOnChange: true,
  onSubmit: () => {} // only here for ts errors.
}
