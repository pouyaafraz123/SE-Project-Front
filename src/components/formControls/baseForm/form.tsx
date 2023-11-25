import { Button, IButtonProps } from '@components/atoms/button'
import { ParseKeys } from 'i18next'
import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './styles.module.scss'
import { IconButton } from '@/components/molecules/iconButton'
import { Icon } from '@/components/atoms/icons'

interface IProps {
  mode: 'view' | 'edit' | 'create'
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
}

export function Form({ mode, noButtons, ...props }: IProps) {
  const { t } = useTranslation('form')
  const submitTitle =
    props.submitBtnTitle || (mode == 'create' ? 'register' : 'edit')

  const editTitle = props.editButtonTitle || 'edit'

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    props.onSubmit?.()
  }

  // TODO style form buttons
  const buttons =
    mode == 'view' ? null : (
      <div className={classes.btnContainer}>
        {!props.noCancel && (
          <Button
            className={classes.btn}
            mode='cancel'
            onClick={props.onCancel}
            {...props.cancelBtnProps}
          >
            {t('cancel')}
          </Button>
        )}
        <Button mode='submit' {...props.submitBtnProps} className={classes.btn}>
          {t(submitTitle)}
        </Button>
      </div>
    )

  if (props.isLoading) return null // TODO form is loading spinner

  return (
    <>
      <form onSubmit={onSubmit}>
        {props.children}
        {!noButtons && buttons}
      </form>
      {!props.noEdit && mode == 'view' && (
        <Button
          type='button'
          mode='main'
          icon={<Icon name='pen-square' />}
          label={t(editTitle)}
          className={classes.editBtn}
          linkTo={props.editLink}
        />
      )}
    </>
  )
}
