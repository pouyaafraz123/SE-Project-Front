import { IComments } from '@/api/comments'

export interface ICommentSectionProps {
  comments: IComments[]
  onSubmit: (comment: string) => void
}
