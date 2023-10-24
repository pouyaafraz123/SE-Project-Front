import { ISeparatorProps } from '@components/atoms/separator'
import clsx from 'clsx'
import classes from './styles.module.scss'

/**
 * Separator component that creates a horizontal or vertical separator line.
 *
 * @param {ISeparatorProps} props - The props for the Separator component.
 * @param {TSeparatorType} [props.type] - The type of separator, either 'horizontal' or 'vertical'.
 * @param {string} [props.customWidth] - Custom width for the separator (e.g., CSS width value).
 * @param {string} [props.customHeight] - Custom height for the separator (e.g., CSS height value).
 * @returns Separator The rendered Separator component.
 */
export function Separator(props: ISeparatorProps) {
  const { type, customWidth, customHeight } = props

  return (
    // Render a div element with optional custom width and height, and a data attribute for type.
    <div
      style={{ width: customWidth, height: customHeight }}
      data-dir={type || 'horizontal'} // Default to 'horizontal' if type is not provided.
      className={clsx(classes.sep)} // Apply class names from styles.module.scss.
    ></div>
  )
}
