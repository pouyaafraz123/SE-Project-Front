import { ShapeOf, toFormikSchema, z } from '@utils'

export interface IAddBrandFormValues {
  name: string
  logoFileId: File | undefined
}

export const addBrandInitialValues: IAddBrandFormValues = {
  name: '',
  logoFileId: undefined
}

export const addBrandFormSchema = toFormikSchema(
  z.object<ShapeOf<IAddBrandFormValues>>({ name: z.string() })
)
