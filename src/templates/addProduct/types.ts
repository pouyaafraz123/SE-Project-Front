import { IAddProductFormValues } from '@/templates/addProduct/schema.ts'

export interface IAddProductProps {
  onSubmit: (dto: IAddProductFormValues) => void
}
