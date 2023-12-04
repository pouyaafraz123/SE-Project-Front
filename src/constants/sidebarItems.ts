import { ISidebarItems } from '@/components/organisms/sidebar'
import { UserTypes } from '@/constants/enums.ts'

export const sidebarItems: { [key in UserTypes]: ISidebarItems[] } = {
  [UserTypes.CUSTOMER]: [
    {
      iconName: 'home',
      name: 'dashboard',
      items: { path: '/' }
    }
  ],
  [UserTypes.STAFF]: [],
  [UserTypes.MANAGER]: []
}
