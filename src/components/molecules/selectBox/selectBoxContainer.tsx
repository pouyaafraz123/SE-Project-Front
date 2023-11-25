import {
  MouseEvent,
  memo,
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
