import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import classes from '@components/organisms/appointmentCard/components/appointmentCardButtons/styles.module.scss'
import { Button } from '@components/atoms/button'

export function PastAppointmentCardButtons() {
  const { t } = useTranslation('common')

  return (
    <div className={clsx(classes.appointmentButtons)}>
      {<Button mode={'main'} label={t('appointment_summary')} />}
    </div>
  )
}
