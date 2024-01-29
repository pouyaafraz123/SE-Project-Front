import { IOption } from '@/interfaces'

export interface IProductSearchFormValues {
  brand: IOption
  category: IOption
  order: string
  isDiscounted: boolean
}

export const productSearchFormInitialValues: IProductSearchFormValues = {
  brand: { value: '', key: '' },
  category: { value: '', key: '' },
  isDiscounted: false,
  order: ''
}
