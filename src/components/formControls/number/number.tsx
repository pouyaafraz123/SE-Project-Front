import { Input } from '..'
import { NumberArrowIconProps, NumberInputProps } from './types'
import classes from './styles.module.scss'
import { Icon } from '@/components/atoms/icons'
import { IconButton } from '@/components/molecules/iconButton'
import { useReadOnly } from '@/hooks'

export function NumberInput(props: NumberInputProps) {
  const {
    readOnly: propsReadOnly,
    disabled,
    value,
    onChange,
    icon,
    step = 1,
    min,
    max,
    inputType,
    ...rest
  } = props
  const readOnly = useReadOnly(propsReadOnly)

  function changeHandler(value: string) {
    onChange?.(Number(value))
  }

  function arrowDownHandler() {
    const _value =
      Math.ceil(((value || 0) - Number(step)) / Number(step)) * Number(step)
    if (min) {
      if (_value >= Number(min)) {
        onChange?.(_value)
      } else {
        return
      }
    }
    if (max) {
      onChange?.(Math.min(Number(max), _value))
      return
    }
    onChange?.(_value)
  }
  function arrowUpHandler() {
    const _value =
      Math.floor(((value || 0) + Number(step)) / Number(step)) * Number(step)
    if (max) {
      if (_value <= Number(max)) {
        onChange?.(_value)
      } else {
        return
      }
    }
    if (min) {
      onChange?.(Math.max(Number(min), _value))
      return
    }
    onChange?.(_value)
  }

  return (
    <Input
      inputType='number'
      step={step}
      min={min}
      max={max}
      value={value?.toString()}
      onChange={changeHandler}
      disabled={disabled}
      readOnly={readOnly}
      iconType='image'
      icon={
        <ArrowIcons
          arrowDownOnClick={arrowDownHandler}
          arrowUpOnClick={arrowUpHandler}
        />
      }
      showIcon={!readOnly && !disabled}
      {...rest}
    />
  )
}
function ArrowIcons(props: NumberArrowIconProps) {
  const { arrowDownOnClick, arrowUpOnClick } = props
  return (
    <div className='d-flex-column'>
      <IconButton
        icon={<Icon name='arrow-up' onClick={arrowUpOnClick} />}
        label=''
        transparent
        noTooltip
        type='button'
        className={classes.icon}
      />
      <IconButton
        icon={<Icon name='arrow-down' onClick={arrowDownOnClick} />}
        label=''
        type='button'
        transparent
        noTooltip
        className={classes.icon}
      />
    </div>
  )
}
