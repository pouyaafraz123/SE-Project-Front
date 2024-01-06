import { RequestHandler, rest } from 'msw'
import * as path from './path'
import { IOption } from '@/interfaces'

type Options = IOption[]

const getData = (data: unknown) => {
  return { data: data, message: '' }
}
const baseURL = import.meta.env.VITE_API_BASE_URL

export const handlers: RequestHandler[] = [
  rest.get(baseURL + path.COUNTRY, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'ایران' },
      { key: '2', value: 'افغانستان' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.STATE, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'آذربایجان شرقی' },
      { key: '2', value: 'آذربایجان غربی' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.CITY, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'تبریز' },
      { key: '2', value: 'بناب' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.GENDER, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'مرد' },
      { key: '2', value: 'زن' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
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
  rest.get(baseURL + path.HF_TYPE, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'بیمارستان' },
      { key: '2', value: 'کلینیک' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.MEDICINE_TYPE, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'قرص' },
      { key: '2', value: 'تزریق' },
      { key: '3', value: 'سرم' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.MEDICAL_DEVICE_TYPE, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'فشارسنج' },
      { key: '2', value: 'دروغ سنج' },
      { key: '3', value: '.و غیره سنج' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.CLINICAL_ORDER_TYPE, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'تصویربرداری' },
      { key: '2', value: 'آزمایش' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.PAYMENT, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'زرین پال' },
      { key: '2', value: 'چک' },
      { key: '2', value: 'pos' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.RELATIONSHIP, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'پدر' },
      { key: '2', value: 'مادر' },
      { key: '2', value: 'همسر' },
      { key: '2', value: 'فرزند' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.FAMILY_MEMBER, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'پدر' },
      { key: '2', value: 'مادر' },
      { key: '2', value: 'همسر' },
      { key: '2', value: 'فرزند' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.DAYS, (_req, res, ctx) => {
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
  rest.get(baseURL + path.ALL_DEPARTMENTS, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'گوارش' },
      { key: '2', value: 'قلب' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.LANGUAGE_SKILL, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'متوسط' },
      { key: '2', value: 'پیشرفته' },
      { key: '3', value: 'زبان مادری' },
      { key: '4', value: 'مبتدی' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.LANGUAGE, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'انگلیسی' },
      { key: '2', value: 'ترکی' },
      { key: '3', value: 'عربی' },
      { key: '4', value: 'فرانسوی' },
      { key: '5', value: 'فارسی' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.DOCTOR_DEGREE, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'PH.D' },
      { key: '2', value: 'MH.D' },
      { key: '3', value: 'AD' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.HF_DEPARTMENT, (_req, res, ctx) => {
    const data: Options = [
      { key: '1', value: 'گوارش' },
      { key: '2', value: 'قلب' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  }),
  rest.get(baseURL + path.TIMEZONE, (_req, res, ctx) => {
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
  }),
  rest.get(baseURL + path.SPECIALITY, (_req, res, ctx) => {
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
  rest.get(baseURL + path.VISIT_TYPE, (_req, res, ctx) => {
    const data: Options = [
      { key: 'emergency', value: 'اورژانسی' },
      { key: 'normal', value: 'عادی' }
    ]
    return res(ctx.status(200), ctx.delay(1000), ctx.json(getData(data)))
  })
]
