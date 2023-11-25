import { FocusEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { InfiniteSearchProps } from './types'
import classes from './styles.module.scss'
import { HFPickerCard } from './cards/hf/hf'
import { UserPickerCard } from './cards/user/user'
import { SearchInput } from '@/components/formControls/searchInput'
import {
  getSelectBoxPosition,
  selectBoxFn
} from '@/components/molecules/selectBox'
import { Typography } from '@/components/atoms/typography'
import { MenuItem } from '@/components/atoms/menuItem'
import { IHFSearchEndpoint, IUserSearchEndpoint } from '@/api/infinite'

export function InfiniteSearch<T>(props: InfiniteSearchProps) {
  const {
    value = { key: '', value: '' },
    onChange,
    readOnly,
    disabled,
    onBlur,
    onFocus,
    data,
    searchInputChangeHandler: searchChange,
    onGetNext,
    isFetchingNextPage,
    type,
    onKeyDown,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const [searchValue, setSearchValue] = useState(value.value)
  const [isInputIsFocused, setIsInputIsFocused] = useState(false)

  const { t } = useTranslation('common')

  function itemClickHandler(item: IUserSearchEndpoint | IHFSearchEndpoint) {
    const value =
      type == 'user'
        ? `${(item as IUserSearchEndpoint).firstName} ${
            (item as IUserSearchEndpoint).lastName
          }`
        : (item as IHFSearchEndpoint).name
    setSearchValue(value)
    onChange?.({
      key: item.id,
      value: value
    })
    selectBoxFn.close()
  }

  function scrollHandler(e: React.UIEvent<HTMLElement>) {
    // if (hasReachedBottom) return
    const isBottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight
    isBottom && console.log('reached bottom')
    isBottom && !isFetchingNextPage && console.log('fetching more')
    isBottom && !isFetchingNextPage && onGetNext?.()
  }

  // TODO remove div in this element (use selectBox's builtin scroll)
  const CustomElement = (
    <div style={{ overflow: 'scroll' }} onScroll={scrollHandler}>
      {data.length == 0 && (
        <Typography variant='caption1' center>
          {t('nodata')}
        </Typography>
      )}
      {data.map((item, i) => (
        <MenuItem
          key={i}
          onClick={() => itemClickHandler(item)}
          selected={item.id == value.key}
        >
          {type == 'user' && (
            <UserPickerCard userInfo={item as IUserSearchEndpoint} />
          )}
          {type == 'hf' && <HFPickerCard hfInfo={item as IHFSearchEndpoint} />}
        </MenuItem>
      ))}
      {isFetchingNextPage && (
        <Typography variant='caption1' center>
          {t('isLoading')}
        </Typography>
      )}
    </div>
  )

  useEffect(() => {
    if (isInputIsFocused) selectBoxFn.rerenderCustomItems(CustomElement)
  }, [isFetchingNextPage, data])

  // show the selectBox on input focus
  function focusHandler(event: FocusEvent<HTMLInputElement, Element>) {
    if (!readOnly && !disabled) {
      selectBoxFn.showCustomElement({
        refElementPosition: getSelectBoxPosition(inputRef.current),
        customElements: CustomElement
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
    searchChange(value)
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
