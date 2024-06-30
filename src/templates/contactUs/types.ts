import { ICategoryDTO } from '@api/category'
import { IContactUsFormValues } from '.'

export interface IContactUsProps {
  onSubmit: (dto: IContactUsFormValues) => void
}
