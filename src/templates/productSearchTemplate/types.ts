import { ITable } from '@/interfaces'
import { IProductCardProps } from '@components/molecules/productCard'

export interface IProductSearchTemplate extends ITable<IProductCardProps> {
  // onCategoryChange: category
}
