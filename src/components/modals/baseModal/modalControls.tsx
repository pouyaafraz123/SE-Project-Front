import { ParseKeys } from 'i18next'
import { useTranslation } from 'react-i18next'
import classes from './styles.module.scss'
import { closeModal } from './store'
import { Button } from '@/components/atoms/button'

interface IProps {
  noSubmit?: boolean
  submitTitle?: ParseKeys<'form'>
  customActionButton?: React.ReactNode
  isLoading?: boolean
}

export function Controls(props: IProps) {
  const {
    noSubmit,
    customActionButton,
    submitTitle = 'register',
    isLoading
  } = props
  const { t } = useTranslation('form')

  return (
    <div className={classes.buttonContainer}>
      {customActionButton}
      {!customActionButton && (
        <>
          <Button mode='cancel' onClick={closeModal} isLoading={isLoading}>
            {t('cancel')}
          </Button>
          {!noSubmit && (
            <Button mode='submit' isLoading={isLoading}>
              {t(submitTitle)}
            </Button>
          )}
        </>
      )}
    </div>
  )
}
