import { InfiniteQueryTypes, IUserSearchEndpoint } from '@/api/infinite'
import { FormControlProps } from '@/components/formControls'
import { IOption } from '@/interfaces'

export type InfiniteTypes = 'doctor'

export type InfiniteSearchProps = FormControlProps<
  HTMLInputElement,
  IOption
> & {
  searchInputChangeHandler: (value: string) => void
  onGetNext: () => void
  isFetchingNextPage: boolean
  type: InfiniteQueryTypes
} & {
  type: 'user'
  data: IUserSearchEndpoint[]
}
