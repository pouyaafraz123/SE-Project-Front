import { forwardRef } from 'react'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { Tooltip } from '@/components/atoms/tooltip'
import { IIconButtonProps } from '@/components/molecules/iconButton'

/**
 * IconButton component that renders a button with an icon and optional tooltip.
 *
 * @param {IIconButtonProps} props - The props for the IconButton component.
 * @param {string} props.label - The label or text associated with the button.
 * @param {ReactNode} props.icon - The icon to be displayed on the button.
 * @param {TTooltipPos} [props.tooltipPos] - The position of the tooltip, if enabled. Optional.
 * @param {boolean} [props.noTooltip] - Flag to disable the tooltip for this button. Optional.
 * @param {boolean} [props.fullRounded] - Flag to apply full rounded styling to the button. Optional.
 * @param {boolean} [props.transparent] - Flag to make the button transparent. Optional.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref object for the button element.
 * @returns {JSX.Element} The rendered IconButton component.
 */
export const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>(
  (props, ref) => {
    const {
      label,
      icon,
      tooltipPos,
      noTooltip,
      fullRounded,
      transparent,
      ...rest
    } = props

    // TODO: ADD LOADER AND CHILDREN

    const buttonComponent = (
      <button
        ref={ref}
        data-transparent={!!transparent}
        className={clsx(
          classes.button,
          fullRounded ? 'rounded-xlg' : 'rounded-md'
        )}
        {...rest}
      >
        {icon}
      </button>
    )

    if (noTooltip) {
      return buttonComponent
    }

    return (
      // Render the button with a tooltip if tooltips are enabled.
      <Tooltip text={label} pos={tooltipPos}>
        {buttonComponent}
      </Tooltip>
    )
  }
)

IconButton.displayName = 'IconButton'
