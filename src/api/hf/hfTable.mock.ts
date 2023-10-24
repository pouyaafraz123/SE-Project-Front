import { rest, RequestHandler } from 'msw'
import { mockUtils } from '@utils'
import { IHealthFacilityTable, IHealthFacility } from './types'
const { baseURL, withPage, withRes } = mockUtils

export const hfListTable: IHealthFacilityTable[] = [...Array(50).keys()].map(
  (i) => {
    return {
      id: i + 1,
      name: 'بیمارستان مدنی',
      state: 'آذربایجان شرقی',
      city: 'تبریز',
      type: 'بیمارستان',
      address: 'تبریز-خیابان دانشگاه'
    }
  }
)

export const hfList: IHealthFacility[] = [...Array(50).keys()].map((i) => {
  return {
    id: i + 1,
    name: 'بیمارستان مدنی',
    country: { key: 1, value: 'ایران' },
    state: { key: 1, value: 'آذربایجان شرقی' },
    city: { key: 1, value: 'تبریز' },
    type: { key: 1, value: 'home' },
    address: 'تبریز-خیابان دانشگاه',
    postal_code: '1234567890',
    phone: {
      code: '+98',
      number: '9930350383',
      flag: 'https://cdn.kcak11.com/CountryFlags/countries/ir.svg'
    },
    fax: {
      code: '+98',
      number: '9930350383',
      flag: 'https://cdn.kcak11.com/CountryFlags/countries/ir.svg'
    },
    website: 'abc.com',
    email: 'abc@test.ir',
    contact_first_name: 'وحید',
    contact_last_name: 'ت و ج',
    departments: [],
    lat: '38.05950893832089',
    lang: '46.32741456897757'
  }
})

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/facilities', async (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'))
    const page = Number(req.url.searchParams.get('page'))
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(withRes(withPage(hfListTable, page, per_page)))
    )
  }),
  rest.get(baseURL + '/facilities/:id', async (req, res, ctx) => {
    const { id } = req.params
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(withRes(hfList.filter((value) => value.id === Number(id))[0]))
    )
  })
]
