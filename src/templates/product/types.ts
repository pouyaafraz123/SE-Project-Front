export interface IProductTemplateProps {
  product: IProduct
  comments: IComment[]
}

export interface IProduct {
  id: string | number
  title: string
  rating: number
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
