import { path } from '@/routes/path'
import { UserTypes } from '@/constants/enums.ts'

export const userAccess: { [key in UserTypes]: string[] } = {
  [UserTypes.CUSTOMER]: [
    '/',
    ...Object.values(path)
      .map((p) => Object.values(p).map((item) => item.route))
      .flat(2)
  ],
  [UserTypes.STAFF]: ['/'],
  [UserTypes.MANAGER]: ['/']
}
