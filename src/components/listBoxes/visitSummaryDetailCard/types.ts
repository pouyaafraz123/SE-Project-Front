import { ParseKeys } from 'i18next'
import { cardVariant } from './variant'
import { ListBoxHeaderProps } from '@/components/molecules/listBox'
import { OmitSafety } from '@/utils/typeTools'

export type headerProps = OmitSafety<
  Required<ListBoxHeaderProps>,
  'onPrint' | 'onDownload'
>

export type variantProps = {
  description?: string
  disease?: string[]
  isConfirmed?: boolean
  visitFor?: 'myself' | 'others'
}

export type VisitSummaryDetailCardProps = {
  confirmationQuestion?: ParseKeys<'form'>
} & headerProps &
  variantProps

// type picker<V extends cardVariant, K extends keyof variantProps> = {
//   type: V
// } & WithRequired<variantProps, K> &
//   Pick<variantProps, 'description'>

export type VisitSummaryDetailCardVariant = { type: cardVariant } & variantProps
