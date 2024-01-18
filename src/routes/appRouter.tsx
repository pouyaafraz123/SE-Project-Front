import { RouterProvider, RouterProviderProps } from 'react-router-dom'
import { memo, useMemo } from 'react'
import { useUserStore } from '@stores'
import { getRouter } from '@routes/index.tsx'

export const AppRouter = memo(function AppRouter(
  props: Omit<RouterProviderProps, 'router'>
) {
  const role = useUserStore((state) => state?.role)

  const router = useMemo(() => {
    return getRouter(role)
  }, [role])

  return <RouterProvider router={router} {...props} />
})
