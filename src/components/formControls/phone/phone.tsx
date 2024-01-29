import {
  KeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import clsx from 'clsx'
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
import { Input, SearchInput } from '..'
import classes from './styles.module.scss'
import { PhoneProps } from '.'
import FlagImg from '@/components/atoms/flagImg/flagImg'
import { Menu } from '@/components/atoms/menu'
import { MenuItem } from '@/components/atoms/menuItem'
import { Button } from '@/components/atoms/button'
import { IOption } from '@/interfaces'
import { MenuContent, MenuHeader } from '@/components/atoms/menu/menu'
import { useReadOnly } from '@/hooks'

const DEFAULT_CODE = '+98'

export const Phone = memo(function Phone(props: PhoneProps) {
  const {
    value = { code: '', number: '' },
    onChange,
    onFocus,
    countries,
    className,
    disabled,
    readOnly: propsReadOnly,
    defaultCode = DEFAULT_CODE,
    ...rest
  } = props
  const readOnly = useReadOnly(propsReadOnly)
  //input ref
  const inputRef = useRef<HTMLInputElement>(null)

  //code button ref
  const buttonRef = useRef<HTMLButtonElement>(null)

  //search input ref
  const searchInputRef = useRef<HTMLInputElement>(null)

  // state for store the select country code with its flag url
  const [selectedFlag, setSelectedFlag] = useState<string>()

  // state for store search input value
  const [searchInputValue, setSearchInputValue] = useState('')

  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus()
    }
  }, [isOpen])

  const openHandler = useCallback(
    (value: boolean) => {
      if (!readOnly && !disabled) {
        setIsOpen(value)
      }
    },
    [disabled, readOnly]
  )

  const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
    placement: 'bottom-start',
    open: isOpen,
    onOpenChange: openHandler,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip(),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${240}px`,
            minWidth: `${rects.reference.width}px`
          })
        }
      })
    ]
  })

  const listRef = useRef<Array<HTMLElement | null>>([])

  const dismiss = useDismiss(context, {
    outsidePress(event) {
      const target = event.target as HTMLElement
      if (buttonRef.current?.contains(target)) {
        return false
      }
      return true
    }
  })
  const role = useRole(context, { role: 'listbox' })
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

  const items = countries.filter((item) =>
    item.value.toLowerCase().startsWith(searchInputValue.toLowerCase())
  )

  function inputChangeHandler(_value: string) {
    onChange?.({ code: value.code, number: _value })
  }

  function selectHandler(item?: IOption<string>) {
    let selectedItem = item

    if (!selectedItem && activeIndex != null && items[activeIndex]) {
      selectedItem = items[activeIndex]
    }
    if (selectedItem) {
      setSelectedFlag(selectedItem.flag)
      onChange?.({ code: selectedItem.key, number: value.number })
      setActiveIndex(null)
      openHandler(false)
      inputRef.current?.focus()
    }
  }

  function searchInputKeyDownHandler(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      //prevent form submitting
      event.preventDefault()
      selectHandler()
    }
  }

  return (
    <>
      <div
        className={classes.container}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <Input
          ref={inputRef}
          dir={value.number === '' ? document.body.dir : 'ltr'}
          inputType='tel'
          className={clsx([classes.phoneInput, className])}
          value={value.number}
          onChange={inputChangeHandler}
          readOnly={readOnly}
          disabled={disabled}
          onFocus={(e) => {
            openHandler(false)
            onFocus?.(e)
          }}
          {...rest}
        />
        <Button
          ref={buttonRef}
          className={classes.codeContainer}
          onClick={() => {
            openHandler(!isOpen)
          }}
          mode='select'
        >
          <FlagImg src={selectedFlag} />
          <div>{value.code}</div>
        </Button>
      </div>
      <FloatingPortal>
        {isOpen && (
          <FloatingFocusManager
            context={context}
            modal={false}
            initialFocus={-1}
            visuallyHiddenDismiss
          >
            <Menu
              ref={refs.setFloating}
              style={{
                ...floatingStyles
              }}
              {...getFloatingProps()}
            >
              <MenuHeader>
                <SearchInput
                  value={searchInputValue}
                  onChange={setSearchInputValue}
                  autoComplete='off'
                  ref={searchInputRef}
                  onKeyDown={searchInputKeyDownHandler}
                />
              </MenuHeader>
              <MenuContent>
                {items.map((item, index) => (
                  <MenuItem
                    key={index}
                    {...getItemProps({
                      ref(node) {
                        listRef.current[index] = node
                      },
                      onClick() {
                        selectHandler(item)
                      }
                    })}
                    selected={activeIndex === index}
                  >
                    <FlagImg src={item.flag} />
                    <div>{item.value}</div>
                  </MenuItem>
                ))}
              </MenuContent>
            </Menu>
          </FloatingFocusManager>
        )}
      </FloatingPortal>
    </>
  )
})
