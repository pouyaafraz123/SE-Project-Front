import { ISidebarItems } from '@/components/organisms/sidebar'
import { IRole } from '@/interfaces'

export const sidebarItems: { [key in IRole]: ISidebarItems[] } = {
  'super-admin': [
    {
      iconName: 'home',
      name: 'dashboard',
      items: { path: '/' }
    }
  ],
  'local-admin': [],
  cmo: [],
  doctor: [],
  patient: [],
  staff: []
}
