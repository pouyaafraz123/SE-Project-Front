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
  },
  profile: {
    route: '/profile',
    link: () => path.profile.route
  },
  cart: {
    route: '/cart',
    link: () => path.cart.route
  },
  address: {
    route: '/addresses',
    link: () => path.address.route
  },
  categoryTable: {
    route: '/category',
    link: () => path.categoryTable.route
  },
  profileEdit: {
    route: '/profile/edit',
    link: () => path.profileEdit.route
  },
  userForm: {
    route: '/user/create',
    link: () => path.userForm.route
  },
  categoryForm: {
    route: '/category/create',
    link: () => path.categoryForm.route
  },
  brandForm: {
    route: '/brand/create',
    link: () => path.brandForm.route
  },
  productForm: {
    route: '/product/create',
    link: () => path.productForm.route
  },
  users: {
    route: '/users',
    link: () => path.users.route
  },
  brands: {
    route: '/brands',
    link: () => path.brands.route
  },
  contactUs: {
    route: '/contact-us',
    link: () => path.contactUs.route
  }
}
