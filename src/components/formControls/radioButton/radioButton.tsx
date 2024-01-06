import classes from './styles.module.scss'
import { RadioButtonProps } from '.'
import { Typography } from '@/components/atoms/typography'
import { useReadOnly } from '@/hooks'

export function RadioButton(props: RadioButtonProps) {
  const {
    disabled,
    selectedValue,
    value,
    label,
    onChange,
    readOnly: propsReadOnly,
    ...rest
  } = props
  const readOnly = useReadOnly(propsReadOnly)
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
