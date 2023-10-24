/**
 * Type representing different separator orientations.
 */
export type TSeparatorType = 'horizontal' | 'vertical'

/**
 * Props for a separator component.
 */
export interface ISeparatorProps {
  /**
   * The type of separator, either 'horizontal' or 'vertical'.
   */
  type?: TSeparatorType
  /**
   * Custom width for the separator (e.g., CSS width value).
   */
  customWidth?: string
  /**
   * Custom height for the separator (e.g., CSS height value).
   */
  customHeight?: string
}
