import { IAddBrandFormValues } from '@/templates/addBrand/schema.ts'

export interface IAddBrandProps {
  onSubmit: (dto: IAddBrandFormValues) => void
}
