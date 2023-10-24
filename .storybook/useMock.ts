import { worker } from '../src/api/mock'

await worker.start({ onUnhandledRequest: 'bypass' })
