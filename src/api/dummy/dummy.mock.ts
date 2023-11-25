import { rest, RequestHandler } from 'msw'
import { mockUtils } from '@utils'
const { baseURL, withPage, withRes, withStats } = mockUtils

export const handlers: RequestHandler[] = [
  rest.put(baseURL + '/', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000))
  })
]
