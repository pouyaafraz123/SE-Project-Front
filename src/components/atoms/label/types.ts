import { color } from '@/constants'

/**
 * Type representing different label variants.
 */
export type TLabelVariants = 'doctor' | 'patient' | 'appointment'

/**
 * Props for the label component.
 */
export interface ILabelProps {
  /**
   * The text content of the label.
   */
  text: string | undefined
  /**
   * The variant of the label.
   */
  variant: TLabelVariants
}

/**
 * Interface representing label colors.
 */
export interface ILabelColors {
  /**
   * The text color of the label.
   */
  color: color
  /**
   * The background color of the label.
   */
  background: color
}

/**
 * Type representing data for different label variants and their colors.
 */
export type TLabelVariantsData = Record<TLabelVariants, ILabelColors>
