import { Button } from '@components/atoms/button'
import { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import classes from './styles.module.scss'
import { IBaseFormProps } from '.'
import { Icon } from '@/components/atoms/icons'
import { notify } from '@/components/atoms/notify'
import { useUIStore } from '@/stores'

export function Form({ noButtons, errors, ...props }: IBaseFormProps) {
  const { t } = useTranslation('form')
  const mode = useUIStore((state) => state.pageMode)
  const submitTitle =
    props.submitBtnTitle || (mode == 'create' ? 'register' : 'edit')

  const editTitle = props.editButtonTitle || 'edit'

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    props.onSubmit?.()
    if (errors) {
      for (let index = 0; index < Object.keys(errors).length; index++) {
        const error = Object.keys(errors)[index] as keyof typeof errors
        notify.error({ text: errors[error] })
        return
      }
    }
  }

  // TODO style form buttons
  const buttons =
    mode == 'view' ? null : (
      <div className={clsx([classes.btnContainer, 'border-top py-2m5'])}>
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

  return (
    <>
      <form onSubmit={onSubmit}>
        {props.children}
        {!noButtons && buttons}
      </form>
      {!props.noEdit && mode == 'view' && (
        <>
          <div className='border-top py-2m5'></div>
          <Button
            type='button'
            mode='main'
            icon={<Icon name='pen-square' />}
            label={t(editTitle)}
            className={classes.editBtn}
            linkTo={props.editLink}
          />
        </>
      )}
    </>
  )
}
