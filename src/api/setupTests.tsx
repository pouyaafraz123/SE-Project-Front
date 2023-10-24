import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {}
    }
  })

export function createWrapper() {
  const testQueryClient = createTestQueryClient()
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
  return wrapper
}
