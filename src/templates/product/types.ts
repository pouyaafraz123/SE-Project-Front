import { ID } from '@constants'
import { IComments } from '@/api/comments'

export interface IProductTemplateProps {
  product: IProduct
  comments: IComments[]
  onPostComment: (comment: string) => void
}

export interface IProduct {
  id: ID
  title: string
  rating: number
  cover: string
  images: string[]
  description: string
  price: number
  quantity: number
  detail: { [key: string]: string }
}
