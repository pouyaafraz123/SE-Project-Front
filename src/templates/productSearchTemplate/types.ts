import { IProductCardProps } from '@components/molecules/productCard'
import { ITable } from '@/interfaces'

export interface IProductSearchTemplate extends ITable<IProductCardProps> {
  onCategoryChange: (category: string) => void
  onBrandChange: (brand: string) => void
  onOrderChange: (order: string) => void
}
