import { FocusEvent, memo, useCallback, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead
} from '@floating-ui/react'
import { Input } from '..'
import { SelectProps } from './types'
import classes from './styles.module.scss'
import { ArrowDownIcon } from './arrowDownIcon'
import { MenuItem } from '@/components/atoms/menuItem'
import { Menu } from '@/components/atoms/menu'
import { MenuContent } from '@/components/atoms/menu/menu'
import { useReadOnly } from '@/hooks'

function isInside(
  refRect: DOMRect | undefined,
  mousePos: { x: number; y: number }
) {
  if (refRect === undefined) {
    return false
  }
  const ref_x_start = refRect.x
  const ref_x_end = ref_x_start + refRect.width
  const ref_y_start = refRect.y
  const ref_y_end = ref_x_start + refRect.height
  if (
    mousePos.x >= ref_x_start &&
    mousePos.x <= ref_x_end &&
    mousePos.y >= ref_y_start &&
    mousePos.y <= ref_y_end
  ) {
    return true
  }
  return false
}

export const Select = memo(function Select(props: SelectProps) {
  const {
    readOnly: propsReadOnly,
    disabled,
    value = { key: '', value: '' },
    onChange,
    onBlur,
    options,
    className,
    ...rest
  } = props
  const readOnly = useReadOnly(propsReadOnly)
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

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
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`
          })
        }
      })
    ]
  })

  const listRef = useRef<Array<HTMLElement | null>>([])
  const listContentRef = useRef(options.map((item) => item.value))
  const isTypingRef = useRef(false)

  const click = useClick(context)
  const dismiss = useDismiss(context, {
    outsidePress(event) {
      const refRect = context.refs.domReference.current?.getBoundingClientRect()
      if (isInside(refRect, { x: event.x, y: event.y })) {
        //cause we don't want to dismiss when the mouse downed inside of the input element.
        return false
      }

      return true
    }
  })
  const role = useRole(context, { role: 'listbox' })
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    // This is a large list, allow looping.
    loop: true
  })

  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : setSelectedIndex,
    onTypingChange(isTyping) {
      isTypingRef.current = isTyping
    }
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [dismiss, role, listNav, typeahead, click]
  )

  const handleSelect = (index: number) => {
    setSelectedIndex(index)
    setIsOpen(false)
    onChange?.(options[index])
  }

  function blurHandler(event: FocusEvent<HTMLInputElement, Element>) {
    if (!isOpen) {
      onBlur?.(event)
    }
  }

  return (
    <>
      <Input
        {...rest}
        tabIndex={0}
        ref={refs.setReference}
        aria-labelledby='select-label'
        aria-autocomplete='none'
        {...getReferenceProps()}
        className={clsx([classes.select, className])}
        data-readonly={readOnly}
        value={value.value}
        autoComplete='off'
        readOnly
        disabled={disabled}
        onBlur={blurHandler}
        icon={ArrowDownIcon}
      />
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager
            context={context}
            modal={false}
            initialFocus={-1}
          >
            <Menu
              ref={refs.setFloating}
              style={{
                ...floatingStyles
              }}
              {...getFloatingProps()}
            >
              <MenuContent>
                {options.map((item, i) => (
                  <MenuItem
                    key={i}
                    ref={(node) => {
                      listRef.current[i] = node
                    }}
                    role='option'
                    tabIndex={i === activeIndex ? 0 : -1}
                    aria-selected={i === selectedIndex && i === activeIndex}
                    selected={i === activeIndex}
                    {...getItemProps({
                      // Handle pointer select.
                      onClick() {
                        handleSelect(i)
                      },
                      // Handle keyboard select.
                      onKeyDown(event) {
                        if (event.key === 'Enter') {
                          event.preventDefault()
                          handleSelect(i)
                        }

                        if (event.key === ' ' && !isTypingRef.current) {
                          event.preventDefault()
                          handleSelect(i)
                        }
                      }
                    })}
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
