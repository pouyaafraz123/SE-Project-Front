import { setupWorker, RequestHandler } from 'msw'
// dynamic import with pattern '*.mock.ts'
const modules = import.meta.glob('../api/**/*.mock.ts', {
  import: 'handlers',
  eager: true
})

export const handlers = Object.values(modules).flat(2) as RequestHandler[]

export const worker = setupWorker(...handlers)
