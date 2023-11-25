import { rest, RequestHandler } from 'msw'
import { mockUtils } from '@utils'
import { IPatientListEndpoint, IPatientDetailEndpoint } from '.'
import { IStats } from '@/interfaces'
const { baseURL, withPage, withRes, withStats } = mockUtils

export const patientListMockData: IPatientListEndpoint[] = [
  ...Array(50).keys()
].map((index) => {
  return {
    id: 'p' + String(index + 1),
    user_id: String(index + 1),
    first_name: 'نادر',
    last_name: 'اصغری',
    hf_id: 'hc98vf',
    hf_name: 'الغدیر',
    hf_type: { key: 'hospital', value: 'بیمارستان' },
    gender: { key: 'male', value: 'مرد' },
    birthday: '1356/06/15',
    city: { key: '1', value: 'تبریز' },
    state: { key: '1', value: 'آذربایجان شرقی' },
    mobile: '+98-9379994444'
  }
})

const stats: IStats[] = [
  { key: 'user-all', name: 'همه کاربران', value: patientListMockData.length }
]

const patientDetail: IPatientDetailEndpoint = {
  id: 'p1',
  birthday: '1329/08/05',
  gender: { key: '1', value: 'مرد' },
  country: { key: '1', value: 'ایران' },
  state: { key: '1', value: 'آذربایجان شرقی' },
  city: { key: '1', value: 'تبریز' },
  address: 'تبریز',
  // hf_country: { key: '1', value: 'ایران' },
  // hf_state: { key: '1', value: 'آذربایجان شرقی' },
  // hf_city: { key: '1', value: 'تبریز' },
  // hf_type: { key: '1', value: 'بیمارستان' },
  // hf_name: { key: '1', value: 'الغدیر' },
  email: 'ali@gmail.com',
  first_name: 'علی',
  last_name: 'پوری',
  phone: '+98-937989884',
  mobile: '+98-937989884',
  national_id: '1234567890',
  // patient_file_number: 'a27',
  postal_code: '1231231234'
}

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/users/patient', async (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'))
    const page = Number(req.url.searchParams.get('page'))
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(
        withRes(withStats(withPage(patientListMockData, page, per_page), stats))
      )
    )
  }),
  rest.get(baseURL + '/users/patient/p1', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(withRes(patientDetail))
    )
  }),
  rest.post(baseURL + '/users/patient', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000))
  }),
  rest.put(baseURL + '/users/patient/p1', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000))
  })
]
