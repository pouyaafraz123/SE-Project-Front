import clsx from 'clsx'
import { TButtonSize } from './index.ts'

/**
 * Generates the class name for the button based on the size and rounded properties.
 * @param {TButtonSize} size - The size of the button.
 * @param {boolean} rounded - Indicates whether the button should be rounded.
 * @returns {string} The generated class name for the button.
 */
export const generateButtonClassname = (
  size: TButtonSize | undefined = 'normal',
  rounded: boolean | undefined
): string => {
  const commonClass = rounded ? 'rounded-xlg' : 'rounded-sm'
  const sizeClass = generateSizeClass(size)
  return clsx(sizeClass, commonClass)
}

/**
 * Generates the class name for the button based on the size.
 * @param {TButtonSize} size - The size of the button.
 * @returns {string[]} The generated class names for the button size.
 */
const generateSizeClass = (size?: TButtonSize): string[] => {
  if (size === 'small') return ['px-m2', 'py-m1']
  if (size === 'normal') return ['px-m4', 'py-m2']
  if (size === 'big') return ['px-m5', 'py-m4']
  return []
}
