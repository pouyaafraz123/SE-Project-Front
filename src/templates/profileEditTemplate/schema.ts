import { ShapeOf, toFormikSchema, z } from '@utils'
import { IPhoneNumber } from '@components/formControls'

export interface IEditProfileFormValues {
  firstName: string
  lastName: string
  mobileNumber: IPhoneNumber
  avatarFile: File | undefined
}

export const editProfileInitialValues: IEditProfileFormValues = {
  avatarFile: undefined,
  firstName: '',
  lastName: '',
  mobileNumber: { code: '', number: '' }
}

export const editProfileSchema = toFormikSchema(
  z.object<ShapeOf<IEditProfileFormValues>>({
    mobileNumber: z.phone(),
    lastName: z.string(),
    firstName: z.string()
  })
)
