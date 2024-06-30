import { ShapeOf, toFormikSchema, z } from '@utils'
import { IOption } from '@/interfaces'

export interface IContactUsFormValues {
  firstName: string
  lastName: string
  email: string
  message: string
}

export const contactUsInitialValues: IContactUsFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  message: ''
}

export const contactUsFormSchema = toFormikSchema(
  z.object<ShapeOf<IContactUsFormValues>>({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    message: z.string()
  })
)
