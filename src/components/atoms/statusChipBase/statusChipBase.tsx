import { IStatusChip } from '@components/atoms/statusChipBase'
import { Typography } from '@components/atoms/typography'
import { clsx } from 'clsx'
import classes from './styles.module.scss'

/**
 * Base status chip component that displays a colored chip with text label.
 *
 * @param {IStatusChip} props - The props for the StatusChipBase component.
 * @param {string} props.label - The label text for the status chip.
 * @param {TStatusColor} [props.color='primary'] - The color of the status chip. Optional.
 * @param {boolean} [props.disabled] - Whether the status chip is disabled. Optional.
 * @returns StatusChipBase The rendered StatusChipBase component.
 */
export function StatusChipBase(props: IStatusChip) {
  const { label, color = 'primary', disabled } = props

  return (
    // Render a div element with data attributes for color and disabled status, and apply class names.
    <div
      data-color={color}
      data-disabled={disabled}
      className={clsx(classes.chip)}
    >
      {/* Render a Typography component with custom styling for the label. */}
      <Typography variant={'subtitle3'} color={'white'} fontFamily={'dana'}>
        {label}
      </Typography>
    </div>
  )
}
