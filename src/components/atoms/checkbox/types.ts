import { Dispatch, HTMLProps, SetStateAction } from 'react'

export interface ICheckboxProps {
  name?: string
  id?: string
  title: string
  value?: boolean
  onChange?: Dispatch<SetStateAction<boolean>>
  disabled?: boolean
  readonly?: boolean
  htmlProps?: HTMLProps<HTMLInputElement>
}
