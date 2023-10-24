/**
 * Type representing different status chip colors.
 */
export type TStatusColor =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'royal-blue'
  | 'bondi-blue'

/**
 * Interface representing a status chip component.
 */
export interface IStatusChip {
  /**
   * The label text for the status chip.
   */
  label: string
  /**
   * The color of the status chip. Optional.
   * @type {TStatusColor}
   */
  color?: TStatusColor
  /**
   * Whether the status chip is disabled. Optional.
   * @type {boolean}
   */
  disabled?: boolean
}
