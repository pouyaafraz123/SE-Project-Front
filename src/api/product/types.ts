export interface IProductTableEndpoint {
  uuid: string
  name: string
  price: number
  discountPrice: number
  quantity: number
  rating: number
  cover: {
    fileId: string
    url: string
  }
  tags: {
    uuid: string
    name: string
  }[]
}

export interface IProductEndpoint {
  uuid: string
  name: string
  price: number
  discountPrice: number
  quantity: number
  rating: number
  cover: {
    fileId: string
    url: string
  }
  tags: {
    uuid: string
    name: string
  }[]
  description: string
  detail: string
  galleryImages: {
    fileId: string
    url: string
  }[]
}

export interface IProductTableParams {
  CategoryId?: string
  BrandId?: string
  IsDiscount?: boolean
  Order?: 'Newest' | 'Cheapest' | 'Discounted'
  Title?: string
}

export interface IProductDTO {
  name: string
  description: string
  detail: string
  price: number
  quantity: number
  status: 'Ordered' | 'Purchasable' | 'InStock'
  brandGuid: string
  categoryGuid: string
  discountPrice: number | undefined
  productImages: (
    | {
        type: 'Cover'
        fileId: string
      }
    | {
        type: 'Gallery'
        fileId: string
      }
  )[]
}
