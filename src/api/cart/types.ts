export interface ICartDTO {
  productUuid: string
  quantity: number
}

export interface ICart {
  product: {
    uuid: string
    name: string
    price: number
    quantity: number
    rating: number
    cover: {
      fileId: string
      url: string
    }
    tags: []
  }
  quantity: 1
}

export interface ICartSubmitDTO {
  addressUuid: string
}
