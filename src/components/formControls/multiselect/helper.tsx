import { Checkbox } from '..'
import { IOption } from '@/components/molecules/selectBox/types'

export function isSelected(selectedOptions: IOption[], option: IOption) {
  const foundIndex = selectedOptions.findIndex(
    (item) => item.key === option.key
  )
  if (foundIndex === -1) return false
  return true
}

export function renderCheckboxes(
  item: IOption,
  selectedItems: IOption[],
  onSelect: (selected: IOption[], option: IOption, value: boolean) => void
) {
  return (
    <Checkbox
      checked={isSelected(selectedItems, item)}
      onChange={(value) => onSelect(selectedItems, item, value)}
      label={item.value}
    />
  )
}
