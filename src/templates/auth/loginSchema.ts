import { z, toFormikSchema } from '@utils'
import { FormikConfig } from 'formik'

export interface IFormValues {
  username: string
  password: string
}

const schema = z.object({
  username: z.string(),
  password: z.string()
})

export const formConfig: FormikConfig<IFormValues> = {
  initialValues: { username: '', password: '' },
  validationSchema: toFormikSchema(schema),
  validateOnChange: true,
  onSubmit: () => {}
}
