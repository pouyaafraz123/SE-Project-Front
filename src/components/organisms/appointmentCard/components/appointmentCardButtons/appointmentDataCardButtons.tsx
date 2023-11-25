import { IAppointmentDataCardButtonProps } from '@components/organisms/appointmentCard/components/appointmentCardButtons/types.ts'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import classes from '@components/organisms/appointmentCard/components/appointmentCardButtons/styles.module.scss'
import { Button } from '@components/atoms/button'

export function AppointmentDataCardButtons({
  type
}: IAppointmentDataCardButtonProps) {
  const { t } = useTranslation('common')

  return (
    <div className={clsx(classes.appointmentButtons)}>
      {<Button mode={'main'} label={t(`show_${type}`)} />}
    </div>
  )
}
