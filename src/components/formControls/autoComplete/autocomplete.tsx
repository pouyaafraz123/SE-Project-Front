import { FocusEvent, memo, useEffect, useRef, useState } from 'react'
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole
} from '@floating-ui/react'
import { AutoCompleteProps } from './types'
import classes from './styles.module.scss'
import { SearchInput } from '@/components/formControls/searchInput'
import { Typography } from '@/components/atoms/typography'
import { Menu } from '@/components/atoms/menu'
import { MenuItem } from '@/components/atoms/menuItem'
import { MenuContent } from '@/components/atoms/menu/menu'
import { useReadOnly } from '@/hooks'

export const AutoComplete = memo(function AutoComplete(
  props: AutoCompleteProps
) {
  const {
    options,
    value = { key: '', value: '' },
    onChange,
    readOnly: propsReadOnly,
    disabled,
    onFocus,
    onBlur,
    ...rest
  } = props
  const readOnly = useReadOnly(propsReadOnly)
  const isClosedByUseDismiss = useRef(false)
  const [open, setStateOpen] = useState(false)
  const [inputValue, setInputValue] = useState(value.value)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  function setOpen(value: boolean) {
    if (!readOnly && !disabled) {
      setStateOpen(value)
    }
  }

  const listRef = useRef<Array<HTMLElement | null>>([])

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      flip(),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`
          })
        }
      })
    ]
  })

  const role = useRole(context, { role: 'listbox' })
  const dismiss = useDismiss(context, {
    outsidePress(event) {
      isClosedByUseDismiss.current = true
      return true
    }
  })
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav]
  )

  const items = options?.filter((item) =>
    item.value.toLowerCase().startsWith(inputValue.toLowerCase())
  )

  function inputChangeHandler(value: string) {
    setInputValue(value)

    if (value) {
      setOpen(true)
      setActiveIndex(0)
    } else {
      onChange?.({ key: '', value: '' })
      setOpen(false)
    }
  }

  function clearIconClickHandler(type: 'search' | 'delete') {
    switch (type) {
      case 'delete':
        setOpen(false)
        onChange?.({ key: '', value: '' })
        setInputValue('')
        break
      case 'search':
        if (!open) {
          if (isInputIsFocused) {
            if (!isClosedByUseDismiss.current) {
              setOpen(true)
            }
            isClosedByUseDismiss.current = false
          } else {
            setOpen(true)
            context.refs.domReference.current?.focus()
          }
        }
        break
    }
  }

  const [isInputIsFocused, setIsInputIsFocused] = useState(false)

  function focusHandler(event: FocusEvent<HTMLInputElement, Element>) {
    setIsInputIsFocused(true)
    onFocus?.(event)
  }

  // set the search input value to the last selected item
  function blurHandler(event: FocusEvent<HTMLInputElement, Element>) {
    setInputValue(value.value)
    setIsInputIsFocused(false)
  }

  // update the search input value when the autocomplete value has changed programmatically
  useEffect(() => {
    setInputValue(value.value)
  }, [value.value])

  return (
    <>
      <div className={classes.container}>
        <SearchInput
          {...getReferenceProps({
            ref: refs.setReference,
            value: inputValue,
            'aria-autocomplete': 'list',
            onKeyDown(event) {
              if (
                event.key === 'Enter' &&
                activeIndex != null &&
                items[activeIndex]
              ) {
                //prevent form submitting
                event.preventDefault()

                setInputValue(items[activeIndex].value)
                onChange?.(items[activeIndex])
                setActiveIndex(null)
                setOpen(false)
              }
            }
          })}
          onChange={inputChangeHandler}
          onIconClick={clearIconClickHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          readOnly={readOnly}
          disabled={disabled}
          autoComplete='off'
          searchIconType='button'
          {...rest}
        />
        {value.value && !isInputIsFocused && !readOnly && !disabled && (
          <div onClick={() => refs.domReference.current?.focus()}>
            <Typography className={classes.textBox}>{value.value}</Typography>
          </div>
        )}
      </div>
      {open && (
        <FloatingPortal>
          <FloatingFocusManager
            context={context}
            initialFocus={-1}
            visuallyHiddenDismiss
          >
            <Menu
              {...getFloatingProps({
                ref: refs.setFloating,
                style: {
                  ...floatingStyles
                }
              })}
            >
              <MenuContent>
                {items.map((item, index) => (
                  <MenuItem
                    key={index}
                    {...getItemProps({
                      ref(node) {
                        listRef.current[index] = node
                      },
                      onClick() {
                        setInputValue(item.value)
                        onChange?.(item)
                        setOpen(false)
                      },
                      onMouseDown(e) {
                        e.preventDefault() //cause we don't want to lose input's focus on icon clicking event
                      }
                    })}
                    selected={activeIndex === index}
                  >
                    {item.value}
                  </MenuItem>
                ))}
              </MenuContent>
            </Menu>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
})
