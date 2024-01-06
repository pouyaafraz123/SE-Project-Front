import clsx from 'clsx'
import formClasses from '../styles.module.scss'
import { TextareaProps } from './types'
import classes from './styles.module.scss'
import { useReadOnly } from '@/hooks'

export function Textarea(props: TextareaProps) {
  const {
    className,
    onChange,
    rows = 3,
    validation,
    readOnly: propsReadOnly,
    disabled,
    value,
    ...rest
  } = props
  const readOnly = useReadOnly(propsReadOnly)
  return (
    <textarea
      className={clsx([
        formClasses['form-control'],
        classes.textarea,
        className
      ])}
      onChange={(event) => onChange?.(event.target.value)}
      value={value}
      rows={rows}
      readOnly={readOnly}
      disabled={disabled}
      data-validation={validation}
      {...rest}
    />
  )
}
