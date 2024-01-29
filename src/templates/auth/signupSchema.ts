import { toFormikSchema, z } from '@utils'
import { FormikConfig } from 'formik'
import { UserTypes } from '@constants'

export interface IFormValues {
  email: string
  password: string
  role: UserTypes
}

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
  role: z.string()
})

export const formConfig: FormikConfig<IFormValues> = {
  initialValues: { email: '', password: '', role: UserTypes.CUSTOMER },
  validationSchema: toFormikSchema(schema),
  validateOnChange: true,
  onSubmit: () => {}
}
