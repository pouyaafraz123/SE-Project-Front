import { ILabelProps } from '@components/atoms/label/types.ts'
import { VLabelVariants } from '@components/atoms/label/variant.ts'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'

/**
 * Label component that displays text with specified styling.
 *
 * @param {ILabelProps} props - The props for the Label component.
 * @param {string} props.variant - The variant of the label.
 * @param {string | undefined} props.text - The text content of the label.
 * @returns Label The rendered Label component.
 */
export function Label({ variant, text }: ILabelProps) {
  // Get background and text color based on the variant from VLabelVariants.
  const { background, color } = VLabelVariants[variant]

  return (
    // Create a div with background color and padding.
    <div className={clsx(`bg-color-${background}`, 'px-xs', 'py-xss')}>
      {/* Render a Typography component with the specified text and text color. */}
      <Typography color={color}>{text}</Typography>
    </div>
  )
}
