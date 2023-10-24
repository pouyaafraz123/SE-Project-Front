import { useState } from 'react'
import {
  SearchInput,
  SearchInputProps
} from '@/components/formControls/searchInput'

export function SearchInputWithState(props: SearchInputProps) {
  const { value, onChange, ...rest } = props
  const [searchValue, setSearchValue] = useState('')
  return (
    <SearchInput
      value={searchValue}
      size='small'
      onChange={setSearchValue}
      {...rest}
    />
  )
}
