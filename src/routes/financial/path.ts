import { generatePath } from '@routes/generatePath'
import { useParams } from '@hooks'

const viewRoute = '/financial-rules/view/:id'
const editRoute = '/financial-rules/edit/:id'
const createRoute = '/financial-rules/create' // TODO
export const path = {
  list: {
    route: '/financial-rules',
    link: () => path.list.route
  },
  view: {
    route: viewRoute,
    link: (id: string) => generatePath(viewRoute, { id })
  },
  edit: {
    route: editRoute,
    link: (id: string) => generatePath(editRoute, { id })
  },
  create: {
    route: createRoute,
    link: () => generatePath(createRoute)
  },
  wallet: {
    route: 'patient-wallet',
    link: () => path.wallet.route
  }
}
