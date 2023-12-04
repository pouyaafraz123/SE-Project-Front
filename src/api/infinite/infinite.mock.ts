import { RequestHandler, rest } from 'msw'
import { IUserSearchEndpoint } from '.'
import { mockUtils } from '@/utils'

const { baseURL, withInfinite, withRes } = mockUtils

export const doctors: IUserSearchEndpoint[] = [...Array(50).keys()].map((i) => {
  return {
    id: String(i + 1),
    userId: 'DR-US-SUR-00178',
    firstName: 'سید امیرحسین',
    lastName: 'باحجب جعفریان اصل تبریزی',
    speciality: 'فوق تخصص گوارش'
  }
})

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/infinite/doctors', (req, res, ctx) => {
    const cursor = Number(req.url.searchParams.get('cursor'))
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json(withRes(withInfinite(doctors, cursor, 10)))
    )
  })
]
