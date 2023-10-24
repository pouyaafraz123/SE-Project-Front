import { FocusEvent, useRef, useState } from 'react'
import clsx from 'clsx'
import { Input } from '..'
import { SelectProps } from './types'
import classes from './styles.module.scss'
import { ArrowDownIcon } from './arrowDownIcon'
import { IOption } from '@/components/molecules/selectBox/types'
import {
  getSelectBoxPosition,
  selectBoxFn
} from '@/components/molecules/selectBox'

export function Select(props: SelectProps) {
  const {
    readOnly,
    value = { key: '', value: '' },
    onChange,
    options,
    className,
    onFocus,
    ...rest
  } = props
  const [selected, setSelected] = useState<IOption>(value)
  const inputRef = useRef<HTMLInputElement>(null)

  function focusHandler(event: FocusEvent<HTMLInputElement, Element>) {
    if (!readOnly) {
      selectBoxFn.show({
        onSelect(item) {
          setSelected({ key: item.key, value: item.value })
          onChange?.(item)
        },
        options: options,
        refElementPosition: getSelectBoxPosition(inputRef.current)
      })
    }
    onFocus?.(event)
  }

  return (
    <Input
      ref={inputRef}
      {...rest}
      className={clsx([classes.select, className])}
      data-readonly={readOnly}
      value={selected.value}
      onFocus={focusHandler}
      readOnly
      icon={ArrowDownIcon}
    />
  )
}
