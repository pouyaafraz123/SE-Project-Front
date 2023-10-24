import { useParams } from '@utils'
import { generatePath } from '@routes/generatePath'

const hfViewRoute = '/healthcare-facility/view/:id'
const hfEditRoute = '/healthcare-facility/edit/:id'
export const path = {
  hfList: {
    route: '/healthcare-facility',
    link: () => path.hfList.route,
    useParams: () => useParams(['page', 'per_page'])
  },
  hfView: {
    route: hfViewRoute,
    link: (id: number) => generatePath(hfViewRoute, { id })
  },
  hfEdit: {
    route: hfEditRoute,
    link: (id: number) => generatePath(hfEditRoute, { id })
  },
  hfCreate: {
    route: '/healthcare-facility/create',
    link: () => path.hfCreate.route
  }
}
