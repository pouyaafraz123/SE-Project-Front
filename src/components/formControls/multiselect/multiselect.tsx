import { FocusEvent, useRef } from 'react'
import clsx from 'clsx'
import { Input } from '..'
import selectClasses from '../select/styles.module.scss'
import { ArrowDownIcon } from '../select/arrowDownIcon'
import classes from './styles.module.scss'
import { MultiselectProps } from './types'
import { renderCheckboxes } from './helper'
import {
  getSelectBoxPosition,
  selectBoxFn
} from '@/components/molecules/selectBox'
import { IOption } from '@/interfaces'
import { Typography } from '@/components/atoms/typography'

export function Multiselect(props: MultiselectProps) {
  const {
    readOnly,
    value = [],
    onChange,
    options,
    className,
    onFocus,
    disabled,
    ...rest
  } = props
  const inputRef = useRef<HTMLInputElement>(null)

  function selectHandler(selected: IOption[], option: IOption, value: boolean) {
    let result: IOption[] = []
    if (value) {
      ///push
      result = [...selected, option]
      onChange?.(result)
    } else {
      //pop
      result = selected.filter((item) => item.key !== option.key)
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
          return renderCheckboxes(item, value, selectHandler)
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
    <div className={classes.container}>
      <Input
        ref={inputRef}
        {...rest}
        className={clsx([selectClasses.select, classes.inputText, className])}
        data-readonly={readOnly}
        value={value.map((item) => item.value).join(', ')}
        onFocus={focusHandler}
        disabled={disabled}
        autoComplete='off'
        readOnly
        icon={ArrowDownIcon}
      />
      {value.length !== 0 && !readOnly && !disabled && (
        <div
          className={classes.textBoxContainer}
          onClick={() => inputRef.current?.focus()}
        >
          {value.map((item, index) => (
            <Typography key={index} className={classes.textBox}>
              {item.value}
            </Typography>
          ))}
        </div>
      )}
    </div>
  )
}
