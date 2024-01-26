import { ID } from '@constants'
import { generatePath } from '@routes/generatePath.ts'

export interface IProductViewParams {
  id: ID
}

const productView = '/product/:id'

export const path = {
  landing: { route: '/', link: () => path.landing.route },
  productView: {
    route: productView,
    link: ({ id }: IProductViewParams) => generatePath(productView, { id })
  },
  productSearch: {
    route: '/products',
    link: () => path.productSearch.route
  }
}
