import { RouteObject } from 'react-router-dom'

// these are exluded from production
export const testRoutes: RouteObject[] = import.meta.env.PROD ? [] : []
