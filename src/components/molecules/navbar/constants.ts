import { INavItems } from '@components/molecules/navbar/types.ts'
import { path } from '@/routes'

export const navItems: INavItems[] = [
  { id: '1', title: 'صفحه اصلی', link: path.common.landing.link() },
  { id: '2', title: 'دسته بندی ها', link: '/' },
  { id: '3', title: 'محصولات', link: path.common.productSearch.link() },
  { id: '4', title: 'درباره ما', link: '/' },
  { id: '5', title: 'تماس با ما', link: '/' }
]
