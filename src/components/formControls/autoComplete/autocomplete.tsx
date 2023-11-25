import { FocusEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { AutoCompleteProps } from './types'
import classes from './styles.module.scss'
import { SearchInput } from '@/components/formControls/searchInput'
import {
  getSelectBoxPosition,
  selectBoxFn
} from '@/components/molecules/selectBox'
import { Typography } from '@/components/atoms/typography'

export function AutoComplete(props: AutoCompleteProps) {
  const {
    options,
    value = { key: '', value: '' },
    onChange,
    readOnly,
    disabled,
    onBlur,
    onFocus,
    onKeyDown,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const [searchValue, setSearchValue] = useState(value.value)
  const [isInputIsFocused, setIsInputIsFocused] = useState(false)

  // show the selectBox on input focus
  function focusHandler(event: FocusEvent<HTMLInputElement, Element>) {
    if (!readOnly && !disabled) {
      selectBoxFn.show({
        onSelect(item) {
          // setSelectedItem(item)
          onChange?.(item)
        },
        options: options,
        refElementPosition: getSelectBoxPosition(inputRef.current),
        filterValue: value.value
      })
    }
    setIsInputIsFocused(true)
    onFocus?.(event)
  }

  // filtering the option after the user finishes typing
  function searchInputChangeHandler(value: string) {
    if (value === '') {
      onChange?.({ key: '', value: '' })
    }
    selectBoxFn.filter(value)
  }

  /**
   * On item selection, we set the selected item, but the problem is that it has to be rerendered to set in the state properly. When the item is clicked the onBlur event is raised and inside of it we set the search value to the last selected item but the first time the last selected value is empty, so the search value is set earlier than selectedItem so the input value will be empty.
   * So we write below useEffect to update the search input value.
   */
  useEffect(() => {
    setSearchValue(value.value)
  }, [value.value])

  // set the search input value to the last selected item
  function blurHandler(event: FocusEvent<HTMLInputElement, Element>) {
    setSearchValue(value.value)
    setIsInputIsFocused(false)
    onBlur?.(event)
  }

  function keyDownHandler(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Tab') {
      selectBoxFn.close()
    }
    onKeyDown?.(e)
  }

  return (
    <div className={classes.container}>
      <SearchInput
        ref={inputRef}
        value={searchValue}
        onChange={setSearchValue}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onDebouncedValueChange={searchInputChangeHandler}
        readOnly={readOnly}
        onKeyDown={(e) => keyDownHandler(e)}
        disabled={disabled}
        autoComplete='off'
        {...rest}
      />
      {value.value && !isInputIsFocused && !readOnly && !disabled && (
        <div onClick={() => inputRef.current?.focus()}>
          <Typography className={classes.textBox}>{value.value}</Typography>
        </div>
      )}
    </div>
  )
}
