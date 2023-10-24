import clsx from 'clsx'
import { Ref, forwardRef } from 'react'
import { BounceLoader } from 'react-spinners'
import formClasses from '../styles.module.scss'
import classes from './styles.module.scss'
import { IconRendererProps, InputProps } from './types'
import { Icon } from '@/components/atoms/icons'
import { Tooltip } from '@/components/atoms/tooltip'

export const Input = forwardRef(function Input(
  props: InputProps,
  ref: Ref<HTMLInputElement>
) {
  const {
    className,
    onChange,
    type = 'text',
    validation,
    value,
    readOnly,
    disabled,
    size,
    icon,
    showIcon,
    onIconClick,
    isError,
    isLoading,
    ...rest
  } = props

  const hasIcon = icon || showIcon !== false || isLoading || isError

  return (
    <div className={classes.container}>
      <input
        ref={ref}
        className={clsx([
          formClasses['form-control'],
          classes.input,
          className
        ])}
        onChange={(e) => onChange?.(e.target.value)}
        type={type}
        value={value}
        readOnly={readOnly}
        disabled={disabled || isLoading}
        data-validation={validation}
        data-size={size}
        data-hasicon={Boolean(hasIcon)}
        {...rest}
      />
      {hasIcon && (
        <div
          className={clsx([
            classes.iconContainer,
            disabled ? 'color-secondary-text' : 'color-primary-main'
          ])}
          onClick={onIconClick}
        >
          <IconRenderer isLoading={isLoading} isError={isError} icon={icon} />
        </div>
      )}
    </div>
  )
})

function IconRenderer(props: IconRendererProps) {
  const { icon, isError, isLoading } = props
  if (isLoading) {
    return <BounceLoader size={20} color={'#29A9E14D'} loading={true} />
  }
  if (isError) {
    return (
      <Tooltip text='خطایی رخ داده'>
        <Icon name='danger' color='danger-main' type='bold' />
      </Tooltip>
    )
  }
  if (typeof icon === 'function') {
    return icon()
  }
  return <>{icon}</>
}
