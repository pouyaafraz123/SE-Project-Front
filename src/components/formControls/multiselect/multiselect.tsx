import { FocusEvent, useRef, useState } from 'react'
import clsx from 'clsx'
import { Input } from '..'
import classes from '../select/styles.module.scss'
import { ArrowDownIcon } from '../select/arrowDownIcon'
import { MultiselectProps } from './types'
import { renderCheckboxes } from './helper'
import { IOption } from '@/components/molecules/selectBox/types'
import {
  getSelectBoxPosition,
  selectBoxFn
} from '@/components/molecules/selectBox'

export function Multiselect(props: MultiselectProps) {
  const {
    readOnly,
    value = [],
    onChange,
    options,
    className,
    onFocus,
    ...rest
  } = props
  const [selected, setSelected] = useState<IOption[]>(value)
  const inputRef = useRef<HTMLInputElement>(null)

  function selectHandler(selected: IOption[], option: IOption, value: boolean) {
    let result: IOption[] = []
    if (value) {
      ///push
      result = [...selected, option]
      setSelected(result)
      onChange?.(result)
    } else {
      //pop
      result = selected.filter((item) => item.key !== option.key)
      setSelected(result)
      onChange?.(result)
    }
    // rerender to see the new result
    selectBoxFn.rerenderItems((item) =>
      renderCheckboxes(item, result, selectHandler)
    )
  }

  function focusHandler(event: FocusEvent<HTMLInputElement, Element>) {
    if (!readOnly) {
      selectBoxFn.show({
        renderItem(item) {
          return renderCheckboxes(item, selected, selectHandler)
        },
        options: options,
        refElementPosition: getSelectBoxPosition(inputRef.current),
        closeOnItemSelection: false,
        hasSearch: true
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
      value={selected.map((item) => item.value).join(', ')}
      onFocus={focusHandler}
      readOnly
      icon={ArrowDownIcon}
    />
  )
}
