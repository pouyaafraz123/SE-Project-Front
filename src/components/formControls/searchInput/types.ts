import { InputProps } from '@/components/formControls'
import { OmitSafety } from '@/utils/typeTools'

export interface SearchInputProps
  extends OmitSafety<InputProps<string>, 'onIconClick'> {
  onDebouncedValueChange?: (value: string) => void
  onIconClick?: (type: 'delete' | 'search') => void
  searchIconType?: 'image' | 'button'
}
