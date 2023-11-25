import { FocusEvent, KeyboardEvent, useRef } from 'react'
import clsx from 'clsx'
import { Input } from '..'
import { SelectProps } from './types'
import classes from './styles.module.scss'
import { ArrowDownIcon } from './arrowDownIcon'
import {
  getSelectBoxPosition,
  selectBoxFn
} from '@/components/molecules/selectBox'
import { IOption } from '@/interfaces'

export function Select(props: SelectProps) {
  const {
    readOnly,
    value = { key: '', value: '' },
    onChange,
    options,
    className,
    onFocus,
    onKeyDown,
    ...rest
  } = props
  const inputRef = useRef<HTMLInputElement>(null)

  function focusHandler(event: FocusEvent<HTMLInputElement, Element>) {
    if (!readOnly) {
      selectBoxFn.show({
        onSelect(item) {
          onChange?.(item)
        },
        options: options,
        refElementPosition: getSelectBoxPosition(inputRef.current)
      })
    }
    onFocus?.(event)
  }

  function keyDownHandler(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Tab') {
      selectBoxFn.close()
    }
    onKeyDown?.(e)
  }

  return (
    <Input
      ref={inputRef}
      {...rest}
      className={clsx([classes.select, className])}
      data-readonly={readOnly}
      value={value.value}
      onFocus={focusHandler}
      autoComplete='off'
      onKeyDown={(e) => keyDownHandler(e)}
      readOnly
      icon={ArrowDownIcon}
    />
  )
}
