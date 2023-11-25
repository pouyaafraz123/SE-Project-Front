import { rest, RequestHandler } from 'msw'
import { mockUtils } from '@utils'
import { IStaffListEndpoint } from '.'
import { IStats } from '@/interfaces'

const { baseURL, withPage, withRes, withStats } = mockUtils

export const staffListMockData: IStaffListEndpoint[] = [
  ...Array(50).keys()
].map((index) => {
  return {
    id: 's' + String(index + 1),
    user_id: String(index + 1),
    first_name: 'نادر',
    last_name: 'اصغری',
    hf_id: 'hc98vf',
    hf_name: 'الغدیر',
    hf_type: { key: 'hospital', value: 'بیمارستان' }
  }
})

const stats: IStats[] = [
  { key: 'user-all', name: 'همه کاربران', value: staffListMockData.length }
]

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/users/staff', async (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'))
    const page = Number(req.url.searchParams.get('page'))
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(
        withRes(withStats(withPage(staffListMockData, page, per_page), stats))
      )
    )
  })
]
