import { ShapeOf, toFormikSchema, z } from '@utils'

export interface IAddAddressFormValues {
  address: string
}

export const addAddressInitialValues: IAddAddressFormValues = {
  address: ''
}

export const addressFormSchema = toFormikSchema(
  z.object<ShapeOf<IAddAddressFormValues>>({
    address: z.string().min(4)
  })
)
