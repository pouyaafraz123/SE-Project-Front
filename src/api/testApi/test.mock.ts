import { rest, RequestHandler } from 'msw'
import { Comment } from './types'
const baseURL = import.meta.env.VITE_API_BASE_URL
const comments = [
  { author: 'vahid', body: 'hello' },
  { author: 'vahid', body: '?' }
]
export const handlers: RequestHandler[] = [
  //   rest.post('/login', null),
  rest.get(baseURL + '/comments', (_req, res, ctx) => {
    const data: Comment[] = comments
    return res(ctx.status(200), ctx.delay(1000), ctx.json(data))
  }),
  rest.post(baseURL + '/api/comments', async (req, res, ctx) => {
    // comments.push(req)
    const data = await req.json()
    comments.push(data)
    return res(ctx.status(201), ctx.delay(1000))
  })
]
