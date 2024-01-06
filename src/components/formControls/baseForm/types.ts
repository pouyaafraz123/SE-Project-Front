import { ParseKeys } from 'i18next'
import { IButtonProps } from '@/components/atoms/button'
import { pageModeType } from '@/stores/uiStore'

export type IBaseFormProps = {
  mode?: pageModeType
  children: React.ReactNode
  onSubmit?: () => void
  onCancel?: () => void
  isLoading?: boolean
  submitBtnProps?: IButtonProps
  cancelBtnProps?: IButtonProps
  noButtons?: boolean
  noCancel?: boolean
  noEdit?: boolean
  editLink?: string
  editButtonTitle?: ParseKeys<'form'>
  submitBtnTitle?: ParseKeys<'form'>
  errors?: object
}
