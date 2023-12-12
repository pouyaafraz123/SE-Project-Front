import { IProductCardProps } from '@components/molecules/productCard'

export interface IProductSectionProps {
  products: IProductCardProps[]
  type: IProductSectionTypes
}

export type IProductSectionTypes = 'new' | 'discounted' | 'amazing'

export const productSectionTitles: Record<IProductSectionTypes, string> = {
  new: 'محصولات جدید',
  amazing: 'محصولات شگفت انگیز',
  discounted: 'محصولات تخفیف دار'
}
