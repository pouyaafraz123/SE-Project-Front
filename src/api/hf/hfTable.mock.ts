import { rest, RequestHandler } from 'msw'
import { mockUtils } from '@utils'
import { IHealthFacilityTable, IHealthFacility } from './types'
import { IStats } from '@/interfaces'
const { baseURL, withPage, withRes, withStats } = mockUtils

export const hfListTable: IHealthFacilityTable[] = [...Array(50).keys()].map(
  (i) => {
    return {
      id: String(i + 1),
      name: 'بیمارستان مدنی',
      state: { key: '1', value: 'آذربایجان شرقی' },
      city: { key: '1', value: 'تبریز' },
      type: { key: 'hospital', value: 'بیمارستان' },
      address: 'تبریز-خیابان دانشگاه',
      parent_name: null
    }
  }
)

const stats: IStats[] = [
  {
    key: 'hospital',
    name: 'بیمارستان',
    value: hfListTable.filter((x) => x.type.key == 'hospital').length
  },
  {
    key: 'clinic',
    name: 'کلینیک',
    value: hfListTable.filter((x) => x.type.key == 'clinic').length
  },
  {
    key: 'health_center',
    name: 'مرکز بهداشت',
    value: hfListTable.filter((x) => x.type.key == 'health_center').length
  }
]

export const hfList: IHealthFacility[] = [...Array(50).keys()].map((i) => {
  return {
    id: String(i + 1),
    name: 'بیمارستان مدنی',
    country: { key: '1', value: 'ایران' },
    state: { key: '1', value: 'آذربایجان شرقی' },
    city: { key: '1', value: 'تبریز' },
    type: { key: '1', value: 'home' },
    address: 'تبریز-خیابان دانشگاه',
    postal_code: '1234567890',
    phone: '+98-9930350383',
    fax: '+98-9930350383',
    website: 'abc.com',
    email: 'abc@test.ir',
    contact_first_name: 'وحید',
    contact_last_name: 'ت و ج',
    departments: [],
    lat: '38.05950893832089',
    lang: '46.32741456897757',
    parent: null,
    timezone: {
      key: '61',
      value: 'America/Araguaina (UTC-03:00)'
    }
  }
})

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/facilities', async (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'))
    const page = Number(req.url.searchParams.get('page'))
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(withRes(withStats(withPage(hfListTable, page, per_page), stats)))
    )
  }),
  rest.get(baseURL + '/facilities/:id', async (req, res, ctx) => {
    const { id } = req.params
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(withRes(hfList.filter((value) => value.id === id)[0]))
    )
  })
]
