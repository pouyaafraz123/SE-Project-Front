import { Children } from 'react'
import { clsx } from 'clsx'
import { TypographyStyles } from './types'
/**
 * This function takes in a set of typography styles as an argument, along with an optional custom class name to overriding. It then generates a CSS class name string based on the typography styles provided, which can be used to apply those styles to a corresponding HTML element. The function uses the clsx library to concatenate and format the class names in a standardized way. The generated class name string includes information about the font size, font weight, color, and display properties of the typography styles, as well as any custom class name provided.
 * @param typographySpec typography styles
 * @param className class name string to overriding
 * @returns
 */
export function generateTypographyClassName(
  typographySpec: TypographyStyles,
  className?: string
): string {
  const {
    color,
    fontSize,
    fontWeight,
    display,
    center,
    fontFamily = 'inherit',
    disableSelect
  } = typographySpec
  return clsx([
    `fs-${fontSize}`,
    `fw-${fontWeight}`,
    `color-${color}`,
    `ff-${fontFamily}`,
    display && `d-${display}`,
    center && 'text-center',
    disableSelect && 'disable-select',
    className
  ])
}

/**
 * Adds white space between the React children elements.
 *
 * @param {any} children - The React children elements to add white space between.
 * @returns {JSX.Element | JSX.Element[]} - The updated React children elements with added white space.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addSpaceBetween(children: any): JSX.Element | JSX.Element[] {
  if (Array.isArray(children)) {
    const count = Children.count(children)
    return (
      <>
        {Children.map(children, (child, index) => (
          <>
            {child}
            {addSpace(count, index)}
          </>
        ))}
      </>
    )
  }
  return children
}

/**
 * Adds white space between two React children elements.
 *
 * If there is only one child element or the current element is the last one, then no white space is needed and it returns null. Otherwise, it returns a white space element.
 *
 * @param {number} count - The total number of React children elements.
 * @param {number} index - The index of the current React child element.
 * @returns {JSX.Element | null} - The white space element or null if not needed.
 */
function addSpace(count: number, index: number): JSX.Element | null {
  if (count === 1 || index >= count - 1) {
    return null
  }
  return <>{` `}</>
}
