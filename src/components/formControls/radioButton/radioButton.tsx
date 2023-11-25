import classes from './styles.module.scss'
import { RadioButtonProps } from '.'
import { Typography } from '@/components/atoms/typography'

export function RadioButton(props: RadioButtonProps) {
  const { disabled, selectedValue, value, label, onChange, readOnly, ...rest } =
    props
  return (
    <label className={classes.label}>
      <input
        type='radio'
        onChange={(e) => onChange?.(value)}
        checked={selectedValue === value}
        hidden
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />
      <div
        className={classes['radio-outer']}
        data-disabled={disabled}
        data-checked={selectedValue === value}
      >
        <div className={classes['radio-inner']}></div>
      </div>
      <Typography>{label}</Typography>
    </label>
  )
}
