import { toFormikSchema, z } from '@utils'
import { FormikConfig } from 'formik'

export interface IFormValues {
  email: string
  password: string
}

const schema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const formConfig: FormikConfig<IFormValues> = {
  initialValues: { email: '', password: '' },
  validationSchema: toFormikSchema(schema),
  validateOnChange: true,
  onSubmit: () => {}
}
