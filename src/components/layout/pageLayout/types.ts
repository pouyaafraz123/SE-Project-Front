import { ParseKeys } from 'i18next'
import { IBreadcrumbs } from '@/interfaces'

export type PageLayoutProps = {
  title: ParseKeys<'common'>
  breadcrumbs: IBreadcrumbs
}
