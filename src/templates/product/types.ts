import { ID } from '@constants'

export interface IProductTemplateProps {
  product: IProduct
  comments: IComment[]
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

export interface IComment {
  id: string | number
  user: {
    id: string | number
    name: string
  }
  text: string
}
