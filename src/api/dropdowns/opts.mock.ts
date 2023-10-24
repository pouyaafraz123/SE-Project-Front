import { rest, RequestHandler } from 'msw'
import { Options } from './types'

const getData = (data: unknown) => {
  return { data: data, message: '' }
}
const baseURL = import.meta.env.VITE_API_BASE_URL

export const handlers: RequestHandler[] = [
  // * done
  rest.get(baseURL + '/dropdown/countries', (_req, res, ctx) => {
    const data: Options = [
      {
        key: 1,
        value: 'ایران',
        flag: 'https://cdn.kcak11.com/CountryFlags/countries/ir.svg'
      },
      { key: 2, value: 'افغانستان' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + '/dropdown/countries/1/states', (_req, res, ctx) => {
    const data: Options = [
      { key: 1, value: 'آذربایجان شرقی' },
      { key: 2, value: 'آذربایجان غربی' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + '/dropdown/states/1/cities', (_req, res, ctx) => {
    const data: Options = [
      { key: 1, value: 'تبریز' },
      { key: 2, value: 'بناب' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + '/dropdown/phoneCodes', (_req, res, ctx) => {
    const data = [
      {
        key: '+98',
        flag: 'https://cdn.kcak11.com/CountryFlags/countries/ir.svg',
        value: 'ایران'
      },
      {
        key: '+1',
        flag: 'https://cdn.kcak11.com/CountryFlags/countries/us.svg',
        value: 'United States'
      }
    ]
    return res(ctx.status(200), ctx.delay(5000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + '/dropdown/facilities/types', (_req, res, ctx) => {
    const data: Options = [
      { key: 1, value: 'بیمارستان' },
      { key: 2, value: 'کلینیک' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  })
]
