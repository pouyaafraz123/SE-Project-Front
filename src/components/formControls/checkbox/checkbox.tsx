import { useRef } from 'react'
import { Icon } from '@components/atoms/icons'
import classes from './styles.module.scss'
import { CheckboxProps } from '.'
import { Typography } from '@/components/atoms/typography'

export function Checkbox(props: CheckboxProps) {
  const { disabled, checked, label, onChange, ...rest } = props
  return (
    <label className={classes.label}>
      <input
        type='checkbox'
        onChange={(e) => onChange(e.target.checked)}
        checked={checked}
        hidden
        disabled={disabled}
        {...rest}
      />
      <div
        className={classes.checkbox}
        data-disabled={disabled}
        data-checked={checked}
      >
        {checked && <Icon name='tick' type='linear' color='white' />}
      </div>
      <Typography>{label}</Typography>
    </label>
  )
}
