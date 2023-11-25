import { forwardRef, useMemo } from 'react'
import clsx from 'clsx'
import { RotateLoader } from '@components/atoms/rotateLoader'
import { Typography } from '@components/atoms/typography'
import { mergeProps } from '@utils'
import { VButtonVariants } from '@components/atoms/button/variant.tsx'
import { useNavigate } from 'react-router-dom'
import { generateButtonClassname, IButtonProps } from './index.ts'
import classes from './styles.module.scss'

/**
 * Base Button component.
 * @param {IButtonProps} outProps - The props for the Button component.
 * @param {React.Ref<HTMLButtonElement>} ref The ref for the Button component.
 * @returns {React.ReactElement} The rendered Button component.
 */
export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (outProps, ref) => {
    const modeProps = VButtonVariants[outProps?.mode]
    const mergedProps = mergeProps(outProps, modeProps)

    const {
      type,
      color,
      icon,
      iconDir,
      rounded,
      name,
      className,
      disabled,
      isLoading,
      label,
      size,
      variant,
      rootAttributes,
      onClick,
      onSubmit,
      children,
      linkTo
    } = mergedProps

    // Generate class names based on size and rounded props
    const generatedClass = useMemo(() => {
      return generateButtonClassname(size, rounded)
    }, [rounded, size])

    const navigate = useNavigate()

    const _onClick = linkTo ? () => navigate(linkTo) : onClick

    return (
      <button
        data-size={size}
        data-color={color}
        data-variant={variant}
        disabled={disabled || isLoading}
        className={clsx(generatedClass, classes.button, className)}
        onClick={_onClick}
        onSubmit={onSubmit}
        {...{ ref, type, name, ...rootAttributes }}
      >
        {isLoading ? (
          <RotateLoader />
        ) : children ? (
          children
        ) : (
          <div
            className={clsx(classes.button__content)}
            data-icon-dir={iconDir}
          >
            {icon && icon}
            <Typography color={'inherit'} createSpan fontFamily={'dana'}>
              {label}
            </Typography>
          </div>
        )}
      </button>
    )
  }
)

// Set display name for the Button component
Button.displayName = 'Button'

// Set default props for the Button component
Button.defaultProps = {
  size: 'normal',
  type: 'button',
  variant: 'contained',
  color: 'primary',
  mode: 'default'
}
