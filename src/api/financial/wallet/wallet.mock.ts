import { rest, RequestHandler } from 'msw'
import { mockUtils } from '@utils'
import { IPaientWalletTableEndpoint } from '.'
import { IStats, Status } from '@/interfaces'
const { baseURL, withPage, withRes, withStats } = mockUtils

export const walletMockData: IPaientWalletTableEndpoint[] = [
  ...Array(50).keys()
].map((index) => {
  return {
    currency: 'IRT',
    balance: 150000,
    user: {
      first_name: 'وحید',
      last_name: 'جهاندار',
      birthday: '1378/06/05',
      gender: { key: 'male', value: 'مرد' },
      id: 'p1',
      national_id: '1231231234'
    }
  }
})

const stats: IStats[] = []

export const handlers: RequestHandler[] = [
  rest.get(baseURL + '/wallets', async (req, res, ctx) => {
    const per_page = Number(req.url.searchParams.get('per_page'))
    const page = Number(req.url.searchParams.get('page'))
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(
        withRes(withStats(withPage(walletMockData, page, per_page), stats))
      )
    )
  })
]
