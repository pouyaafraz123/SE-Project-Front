import { ShapeOf, toFormikSchema, z } from '@utils'
import { IOption } from '@/interfaces'

export interface IAddCategoryFormValues {
  name: string
  parentUuid: IOption
}

export const addCategoryInitialValues: IAddCategoryFormValues = {
  name: '',
  parentUuid: { value: '', key: '' }
}

export const addCategoryFormSchema = toFormikSchema(
  z.object<ShapeOf<IAddCategoryFormValues>>({ name: z.string() })
)
