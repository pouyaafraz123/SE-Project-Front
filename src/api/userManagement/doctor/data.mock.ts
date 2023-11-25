import { rest, RequestHandler } from 'msw'
import { mockUtils } from '@utils'
import { IDoctorDetailEndpoint, IDoctorListEndpoint } from '.'
import { IStats } from '@/interfaces'

const { baseURL, withPage, withRes, withStats } = mockUtils

export const doctorListMockData: IDoctorListEndpoint[] = [
  ...Array(50).keys()
].map((index) => {
  return {
    id: 'd' + String(index + 1),
    user_id: String(index + 1),
    first_name: 'حامد',
    last_name: 'اصغریان',
    hf_id: 'hc98vf',
    hf_name: 'الغدیر',
    hf_type: { key: 'hospital', value: 'بیمارستان' },
    gender: {
      key: 'male',
      value: 'مرد'
    },
    speciality: { key: '', value: 'متخصص قلب و عروق' },
    languages: ['انگلیسی', 'فارسی', 'اسپانیایی']
  }
})

const stats: IStats[] = [
  { key: 'user-all', name: 'همه کاربران', value: doctorListMockData.length }
]

const doctorDetail: IDoctorDetailEndpoint = {
  id: 'd1',
  birthday: '1329/08/05',
  title: { key: '1', value: 'PH.D' },
  gender: { key: '1', value: 'مرد' },
  facility: {
    city: { key: '1', value: 'تبریز' },
    country: { key: '1', value: 'ایران' },
    state: { key: '1', value: 'آذربایجان شرقی' },
    type: { key: '1', value: 'بیمارستان' },
    name: { key: '1', value: 'الغدیر' }
  },
  office_information: {
    country: { key: '1', value: 'ایران' },
    state: { key: '1', value: 'آذربایجان شرقی' },
    city: { key: '1', value: 'تبریز' },
    address: 'تبریز',
    phone: '+98-937989884'
  },
  licences: {
    code: '12345897',
    country: { key: '1', value: 'ایران' }
  },
  country: { key: '1', value: 'ایران' },
  state: { key: '1', value: 'آذربایجان شرقی' },
  city: { key: '1', value: 'تبریز' },
  email: 'ali@gmail.com',
  first_name: 'علی',
  last_name: 'پوری',
  address: 'تبریز',
  phone: '+98-937989884',
  postal_code: '123456789',
  speciality: { key: '1', value: 'قلب' },
  website: 'ali.com',
  mobile: '+98-937989884',
  national_id: '1231231234',
  sub_speciality: { key: '1', value: 'sub' }
}
export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/users/doctor', async (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'))
    const page = Number(req.url.searchParams.get('page'))
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(
        withRes(withStats(withPage(doctorListMockData, page, per_page), stats))
      )
    )
  }),
  rest.get(baseURL + '/users/doctor/d1', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(withRes(doctorDetail))
    )
  }),
  rest.post(baseURL + '/users/doctor', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000))
  }),
  rest.put(baseURL + '/users/doctor/d1', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000))
  })
]
