import { ShapeOf, toFormikSchema, z } from '@utils'
import { IOption } from '@/interfaces'

export interface IAddProductFormValues {
  name: string
  description: string
  detail: { [key: string]: string }
  price: number
  quantity: number
  status: IOption<'Ordered' | 'Purchasable'>
  brand: IOption
  category: IOption
  discountPrice: ''
  productImages: File[]
  featureKey: string
  featureValue: string
}

export const addProductInitialValues: IAddProductFormValues = {
  name: '',
  brand: { value: '', key: '' },
  category: { value: '', key: '' },
  productImages: [],
  status: { key: 'Purchasable', value: 'قابل خرید' },
  detail: {},
  price: 0,
  description: '',
  discountPrice: '',
  quantity: 0,
  featureValue: '',
  featureKey: ''
}

export const addProductFormSchema = toFormikSchema(
  z.object<ShapeOf<IAddProductFormValues>>({
    name: z.string(),
    status: z.dropdown(),
    quantity: z.coerce.number().min(1),
    discountPrice: z.coerce.number().min(0).optional(),
    description: z.string(),
    price: z.coerce.number().min(1),
    category: z.dropdown(),
    brand: z.dropdown()
  })
)
