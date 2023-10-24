import clsx from 'clsx'
import classes from './styles.module.scss'
import { ITooltipProps } from '@/components/atoms/tooltip'
import { Typography } from '@/components/atoms/typography'

/**
 * Tooltip component that displays additional information on hover.
 *
 * @param {ITooltipProps} props - The props for the Tooltip component.
 * @param {string} props.text - The text content of the tooltip.
 * @param {TTooltipPos} [props.pos='default'] - The position of the tooltip. Optional.
 * @param {string} [props.className] - Additional CSS class name for styling. Optional.
 * @param {ReactNode} props.children - The content that triggers the tooltip.
 * @returns Tooltip The rendered Tooltip component.
 */
export function Tooltip(props: ITooltipProps) {
  const { text, children, pos = 'default', className } = props

  return (
    <div className={clsx(classes.box, className)}>
      {children}
      <div
        className={clsx(
          classes.label,
          pos === 'right' && classes.right,
          pos === 'left' && classes.left
        )}
      >
        <div
          className={clsx(
            classes.icon,
            pos === 'right' && classes.rightIcon,
            pos === 'left' && classes.leftIcon
          )}
        >
          <div className={classes.triangle}></div>
        </div>
        <div>
          <Typography
            color={'inherit'}
            createSpan
            fontSize={'xs'}
            fontWeight={'bold'}
          >
            {text}
          </Typography>
        </div>
      </div>
    </div>
  )
}
