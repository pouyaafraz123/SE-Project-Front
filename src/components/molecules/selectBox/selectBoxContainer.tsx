import {
  memo,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import clsx from 'clsx'
import { SelectBox } from './selectBox.js'
import { useSelectBoxStore } from './store.js'
import classes from './styles.module.scss'
import { IOption } from '@/interfaces/common.js'

export const SelectBoxContainer = memo(function SelectBoxContainer() {
  const {
    isOpen,
    selectedItemIndex,
    filteredOptions,
    onSelect,
    close,
    filter,
    closeOnItemSelection,
    refElementPosition,
    options,
    ...rest
  } = useSelectBoxStore()
  const boxRef = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(refElementPosition.x)

  useEffect(() => {
    if (isOpen) {
      if (getBrowser() !== 'Mozilla Firefox') {
        const padding = Number(
          window.getComputedStyle(document.body).padding.replace('px', '')
        )
        const scrollbarWidth = window.innerWidth - document.body.clientWidth

        document.body.style.paddingInlineEnd = `${padding + scrollbarWidth}px`
      }
      document.body.style.overflow = 'hidden'

      if (
        boxRef.current?.clientWidth &&
        refElementPosition.anchor === 'center' &&
        refElementPosition.width < boxRef.current?.clientWidth
      ) {
        refElementPosition.x -= boxRef.current?.clientWidth / 2
      }
    } else {
      document.body.style.overflowY = 'auto'
      document.body.style.paddingInlineEnd = ''
    }
    setX(refElementPosition.x)
  }, [isOpen, refElementPosition])

  const onResizeHandler = useCallback(() => {
    close()
  }, [close])

  useEffect(() => {
    window.addEventListener('resize', onResizeHandler)

    return () => {
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [onResizeHandler])

  function handleClick(event: MouseEvent) {
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      close()
    }
  }

  function handleSelect(item: IOption) {
    onSelect?.(item)
    if (closeOnItemSelection) close()
  }

  const canShow = isOpen && refElementPosition.x === x

  return (
    <div
      style={{
        visibility: canShow ? 'visible' : 'hidden'
      }}
      className={classes.selectBoxContainer}
      onMouseDown={handleClick}
    >
      <SelectBox
        onFilter={filter}
        ref={boxRef}
        options={filteredOptions}
        onSelect={handleSelect}
        selectedItemIndex={selectedItemIndex}
        {...refElementPosition}
        x={x}
        boxClassName={clsx([isOpen && classes.box])}
        {...rest}
      />
    </div>
  )
})
function getBrowser():
  | 'Google Chrome'
  | 'Microsoft Edge'
  | 'Mozilla Firefox'
  | 'Apple Safari'
  | 'Internet Explorer'
  | 'Unknown' {
  const userAgent = navigator.userAgent

  // Detect Chrome
  if (/Chrome/.test(userAgent) && !/Chromium/.test(userAgent)) {
    return 'Google Chrome'
  }
  // Detect Chromium-based Edge
  else if (/Edg/.test(userAgent)) {
    return 'Microsoft Edge'
  }
  // Detect Firefox
  else if (/Firefox/.test(userAgent)) {
    return 'Mozilla Firefox'
  }
  // Detect Safari
  else if (/Safari/.test(userAgent)) {
    return 'Apple Safari'
  }
  // Detect Internet Explorer
  else if (/Trident/.test(userAgent)) {
    return 'Internet Explorer'
  }

  return 'Unknown'
}
