import { rest, RequestHandler } from 'msw'
import { mockUtils } from '@utils'
import { IDoctorAdminListEndpoint } from '.'

const { baseURL, withPage, withRes } = mockUtils
export const doctorAdminListMockData: IDoctorAdminListEndpoint[] = [
  ...Array(50).keys()
].map((index) => {
  return {
    id: String(index + 1),
    user_id: String(index + 1),
    full_name: 'نادر اصغری',
    hf_id: 'hc98vf',
    hf_name: 'الغدیر',
    hf_type: 'بیمارستان'
  }
})

export const handlers: RequestHandler[] = [
  rest.get(
    baseURL + '/userManagements/doctorAdminList',
    async (req, res, ctx) => {
      const per_page = Number(req.url.searchParams.get('per_page'))
      const page = Number(req.url.searchParams.get('page'))
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json(withRes(withPage(doctorAdminListMockData, page, per_page)))
      )
    }
  )
]
