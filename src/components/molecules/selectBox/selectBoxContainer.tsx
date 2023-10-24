import { MouseEvent, memo, useRef } from 'react'
import { SelectBox } from './selectBox.js'
import { useSelectBoxStore } from './store.js'
import classes from './styles.module.scss'
import { IOption } from './types.js'

export const SelectBoxContainer = memo(function SelectBoxContainer() {
  const {
    isOpen,
    selectedItemIndex,
    filteredOptions,
    hasSearch,
    onSelect,
    close,
    filter,
    closeOnItemSelection,
    refElementPosition,
    renderItem
  } = useSelectBoxStore()
  const boxRef = useRef<HTMLDivElement>(null)

  function handleClick(event: MouseEvent) {
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      close()
    }
  }

  function handleSelect(item: IOption) {
    onSelect?.(item)
    if (closeOnItemSelection) close()
  }

  return (
    <div
      style={{ visibility: isOpen ? 'visible' : 'hidden' }}
      className={classes.selectBoxContainer}
      onMouseDown={handleClick}
    >
      <SelectBox
        onFilter={filter}
        hasSearch={hasSearch}
        ref={boxRef}
        options={filteredOptions}
        onSelect={handleSelect}
        selectedItemIndex={selectedItemIndex}
        renderItem={renderItem}
        {...refElementPosition}
      />
    </div>
  )
})
