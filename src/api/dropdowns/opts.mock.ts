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
        key: '1',
        value: 'ایران',
        flag: 'https://cdn.kcak11.com/CountryFlags/countries/ir.svg'
      },
      { key: '2', value: 'افغانستان' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  // * done
  rest.get(baseURL + '/dropdown/countries/1/states', (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'آذربایجان شرقی' },
      { key: '2', value: 'آذربایجان غربی' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  // * done
  rest.get(baseURL + '/dropdown/states/1/cities', (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'تبریز' },
      { key: '2', value: 'بناب' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  // * done
  rest.get(baseURL + '/dropdown/phone-codes', (_req, res, ctx) => {
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
  // * done
  rest.get(baseURL + '/dropdown/facility/types', (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'بیمارستان' },
      { key: '2', value: 'کلینیک' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + '/dropdown/days', (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'شنبه' },
      { key: '2', value: 'یکشنبه' },
      { key: '3', value: 'دوشنبه' },
      { key: '4', value: 'سه شنبه' },
      { key: '5', value: 'چهارشنبه' },
      { key: '6', value: 'پنج شنبه' },
      { key: '7', value: 'جمعه' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  // * done
  rest.get(baseURL + '/dropdown/department-names', (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'گوارش' },
      { key: '2', value: 'قلب' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + '/dropdown/languageSkill', (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'متوسط' },
      { key: '2', value: 'پیشرفته' },
      { key: '3', value: 'زبان مادری' },
      { key: '4', value: 'مبتدی' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + '/dropdown/languages', (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'انگلیسی' },
      { key: '2', value: 'ترکی' },
      { key: '3', value: 'عربی' },
      { key: '4', value: 'فرانسوی' },
      { key: '5', value: 'فارسی' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + '/dropdown/doctor-degree', (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'PH.D' },
      { key: '2', value: 'MH.D' },
      { key: '3', value: 'AD' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + '/dropdown/department-names/1', (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'گوارش' },
      { key: '2', value: 'قلب' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  // * done
  rest.get(
    baseURL + '/dropdown/countries/:country_id/timezones',
    (_req, res, ctx) => {
      const data: Options = [
        {
          key: '61',
          value: 'America/Araguaina (UTC-03:00)'
        },
        {
          key: '62',
          value: 'America/Bahia (UTC-03:00)'
        }
      ]
      return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
    }
  ),
  rest.get(baseURL + '/dropdown/doctors-specialities', (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'متخصص قلب و عروق' },
      { key: '2', value: 'متخصص خون' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(
    baseURL + '/dropdown/doctors-subspecialities/1',
    (_req, res, ctx) => {
      const data: Options = [
        { key: '1', value: 'متخصص قلب و عروق' },
        { key: '2', value: 'متخصص خون' }
      ]
      return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
    }
  ),
  rest.get(baseURL + '/dropdown/visit-type', (_req, res, ctx) => {
    const data: Options = [
      { key: 'emergency', value: 'اورژانسی' },
      { key: 'normal', value: 'عادی' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  })
]
