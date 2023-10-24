import { Button, IButtonProps } from '@components/atoms/button'
import { ParseKeys } from 'i18next'
import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

interface IProps {
  mode: 'view' | 'edit' | 'create'
  children: React.ReactNode
  onSubmit: () => void
  onCancel?: () => void
  isLoading?: boolean
  submitBtnProps?: IButtonProps
  cancelBtnProps?: IButtonProps
  noCancel?: boolean
  submitBtnTitle?: ParseKeys<'form'>
}

export function Form({ mode, ...props }: IProps) {
  const { t } = useTranslation('form')
  const submitTitle =
    props.submitBtnTitle || (mode == 'create' ? 'register' : 'edit')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    props.onSubmit()
  }

  // TODO style form buttons
  const buttons =
    mode == 'view' ? null : (
      <>
        <Button mode='submit' {...props.submitBtnProps}>
          {t(submitTitle)}
        </Button>
        {!props.noCancel && (
          <Button
            mode='cancel'
            onClick={props.onCancel}
            {...props.cancelBtnProps}
          >
            {t('cancel')}
          </Button>
        )}
      </>
    )

  if (props.isLoading) return null // TODO form is loading spinner

  return (
    <form onSubmit={onSubmit}>
      {props.children}
      {buttons}
    </form>
  )
}
