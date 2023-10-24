import { ICheckboxProps } from '@components/atoms/checkbox/types.ts'
import { forwardRef, useMemo, useState } from 'react'
import { Typography } from '@components/atoms/typography'
import { Icon, TickLinear } from '@components/atoms/icons'
import clsx from 'clsx'
import classes from './styles.module.scss'

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  function Checkbox(props, ref) {
    const { value, onChange, id, name, title, disabled, readonly, htmlProps } =
      props

    const [checked, setChecked] = useState(false)

    const [inputValue, inputOnChange] = useMemo(() => {
      return [value ?? checked, onChange ?? setChecked]
    }, [checked, onChange, value])

    return (
      <label id={id || 'checkbox_id'} className={clsx(classes.checkbox)}>
        <input
          ref={ref}
          type={'checkbox'}
          checked={inputValue}
          id={id || 'checkbox_id'}
          name={name}
          disabled={disabled}
          {...htmlProps}
          className={classes.checkbox__input}
          onChange={() => {
            if (disabled || readonly) return
            inputOnChange((p) => !p)
          }}
        />
        <div className={clsx(classes.checkbox__content)}>
          <div
            className={clsx(
              classes.checkbox__box,
              inputValue && classes.checkbox__boxSelected,
              disabled && classes.checkbox__boxDisabled
            )}
          >
            {inputValue && !disabled && <TickLinear />}
          </div>
          <Typography variant={'caption1'} color={'primary-text'}>
            {title}
          </Typography>
        </div>
      </label>
    )
  }
)
