import { InputProps } from '@/components/formControls'

export interface SearchInputProps extends InputProps {
  onDebouncedValueChange: (value: string) => void
}
