import { ReactNode } from 'react'

export type TInfoCardVariant =
  | 'user-main'
  | 'user-success'
  | 'user-warning'
  | 'user-danger'
  | 'appointment-main'
  | 'appointment-success'
  | 'appointment-warning'
  | 'appointment-danger'
  | 'appointment-pending'

/** Type representing different colors for InfoCard. */
export type TInfoCardColor =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'royal-blue'
  | 'bondi-blue'

/** Props for an InfoCard component. */
export interface IInfoCardProps {
  variant: TInfoCardVariant
  /** The icon to be displayed in the InfoCard. */
  icon?: ReactNode
  /** The color of the InfoCard. */
  color?: TInfoCardColor
  /** The title or label for the InfoCard. */
  title?: string
  /** The value to be displayed in the InfoCard. */
  value: number
  /** Flag to indicate whether the InfoCard is in a loading state. Optional. */
  isLoading?: boolean
  /** Flag to indicate whether the InfoCard has encountered an error. Optional. */
  isError?: boolean
}

export type TInfoCardVariantData = Record<
  TInfoCardVariant,
  Partial<Omit<IInfoCardProps, 'variant'>>
>
