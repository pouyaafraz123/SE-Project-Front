import { useRef } from 'react'
import classes from './styles.module.scss'
import { CheckboxProps } from '.'
import { Typography } from '@/components/atoms/typography'
import { Tick } from '@/components/icons'

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
        {checked && <Tick />}
      </div>
      <Typography>{label}</Typography>
    </label>
  )
}
