import { generatePath } from '@routes/generatePath'
import { useParams } from '@hooks'

const hfViewRoute = '/healthcare-facility/view/:id'
const hfEditRoute = '/healthcare-facility/edit/:id'
const hfCreateRoute = '/healthcare-facility/create'
export const path = {
  hfList: {
    route: '/healthcare-facility',
    link: () => path.hfList.route
  },
  hfView: {
    route: hfViewRoute,
    link: (id: string) => generatePath(hfViewRoute, { id })
  },
  hfEdit: {
    route: hfEditRoute,
    link: (id: string) => generatePath(hfEditRoute, { id })
  },
  hfCreate: {
    route: hfCreateRoute,
    link: (parrentId?: string) =>
      generatePath(
        hfCreateRoute,
        undefined,
        parrentId ? { parrentId: parrentId } : {}
      ),
    useParams: () => useParams(['parrentId'])
  }
}
