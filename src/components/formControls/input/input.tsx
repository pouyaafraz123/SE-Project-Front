import clsx from 'clsx'
import { forwardRef, memo, Ref } from 'react'
import { BounceLoader } from 'react-spinners'
import { useTranslation } from 'react-i18next'
import formClasses from '../styles.module.scss'
import { IconRendererProps } from '..'
import classes from './styles.module.scss'
import { InputProps } from './types'
import { Icon } from '@/components/atoms/icons'
import { Tooltip } from '@/components/atoms/tooltip'
import { IconButton } from '@/components/molecules/iconButton'
import { useReadOnly } from '@/hooks'

const ForwardedInput = forwardRef(function Input(
  props: InputProps<string>,
  ref: Ref<HTMLInputElement>
) {
  const {
    className,
    onChange,
    inputType = 'text',
    validation,
    value,
    readOnly: propsReadOnly,
    disabled,
    size,
    icon,
    showIcon,
    onIconClick,
    isError,
    isLoading,
    name,
    onIconMouseDown,
    iconType,
    ...rest
  } = props
  const readOnly = useReadOnly(propsReadOnly)
  const hasIcon = (icon && showIcon !== false) || isLoading || isError

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
        type={inputType}
        value={value}
        readOnly={readOnly}
        disabled={disabled || isLoading}
        data-validation={validation}
        data-size={size}
        data-has-icon={Boolean(hasIcon)}
        name={name}
        {...rest}
      />
      {hasIcon && (
        <div
          className={clsx([
            classes.iconContainer,
            (iconType !== 'button' || isError || isLoading) &&
              classes.imageIcon,
            disabled ? 'color-secondary-text' : 'color-primary-main'
          ])}
        >
          <IconRenderer
            isLoading={isLoading}
            isError={isError}
            icon={icon}
            iconType={iconType}
            onIconClick={onIconClick}
            onIconMouseDown={onIconMouseDown}
          />
        </div>
      )}
    </div>
  )
})
export const Input = memo(ForwardedInput)
function IconRenderer(props: IconRendererProps) {
  const { t } = useTranslation('form')
  const {
    icon,
    isError,
    isLoading,
    iconType = 'image',
    onIconClick,
    onIconMouseDown
  } = props
  if (isLoading) {
    return <BounceLoader size={20} color={'#29A9E14D'} loading={true} />
  }
  if (isError) {
    return (
      <Tooltip text={t('errorOcurred')}>
        <Icon name='danger' color='danger-main' type='bold' />
      </Tooltip>
    )
  }
  if (iconType === 'button') {
    return (
      <IconButton
        icon={typeof icon === 'function' ? icon() : icon}
        label=''
        noTooltip
        type='button'
        className='color-inherit'
        transparent
        onClick={onIconClick}
        onMouseDown={onIconMouseDown}
      />
    )
  }
  if (typeof icon === 'function') {
    return icon()
  }
  return <>{icon}</>
}
