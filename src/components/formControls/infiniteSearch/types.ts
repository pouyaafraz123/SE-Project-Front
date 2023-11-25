import {
  IHFSearchEndpoint,
  IUserSearchEndpoint,
  InfiniteQueryTypes
} from '@/api/infinite'
import { FormControlProps, InputProps } from '@/components/formControls'
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
} & (
    | {
        type: 'user'
        data: IUserSearchEndpoint[]
      }
    | {
        type: 'hf'
        data: IHFSearchEndpoint[]
      }
  )
