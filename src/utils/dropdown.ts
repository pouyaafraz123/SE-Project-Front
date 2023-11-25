import { IOption } from '@/interfaces'

export function getDropdown(value?: IOption): IOption {
  if (!value) return { key: '', value: '' }
  return value
}
