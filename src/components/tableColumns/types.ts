import { ParseKeys } from 'i18next'
import { IOption, Status } from '@/interfaces'

export type ChangePasswordProps = {
  path: string
}
export type ViewProfileProps = {
  path: string
}

export type DeleteIconButtonProps = {
  onClick?: () => void
}

export interface LinkMenuItemProps extends ILink {
  name: ParseKeys<'form'>
}

export interface ButtonMenuItemProps {
  name: ParseKeys<'form'>
  onClick: () => void
}

interface ILink {
  path: string
}
export type actionButtonProps = {
  /**
   * افزودن شعبه
   */
  addBranchProps?: ILink
  /**
   * ارسال پیام
   */
  sendMessageProps?: ILink
  /**
   * نمایش آزمایشات انجام شده
   */
  showExperiments?: ILink
  /**
   * بازیابی رمز عبور
   */
  passwordRecoveryProps?: ILink
}
export type PhoneCellProps = {
  phoneNumber: string
}

export type ActivationProps = {
  fullName: string
  userId: string
  status: IOption<Status>
  isLoading?: boolean
}
