import { ICategoryDTO } from '@api/category'

export interface IAddCategoryProps {
  onSubmit: (dto: ICategoryDTO) => void
}
