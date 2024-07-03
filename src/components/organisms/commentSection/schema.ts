import { toFormikSchema, z, ShapeOf } from '@/utils'

export interface ICommentFormValues {
  comment: string
}

export const commentFormInitialValues: ICommentFormValues = {
  comment: ''
}

export const commentFormikSchema = toFormikSchema(
  z.object<ShapeOf<ICommentFormValues>>({
    comment: z.string()
  })
)
