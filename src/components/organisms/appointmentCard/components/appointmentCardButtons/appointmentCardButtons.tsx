import clsx from 'clsx'
import { Button } from '@components/atoms/button'
import { IAppointmentCardButtonProps } from '@components/organisms/appointmentCard/components/appointmentCardButtons/types.ts'
import { useTranslation } from 'react-i18next'
import classes from './styles.module.scss'

/**
 * AppointmentCardButtons component displays buttons for an appointment card.
 *
 * @returns AppointmentCardButtons The rendered AppointmentCardButtons component.
 */
export function AppointmentCardButtons({
  canCancel = true,
  canJoin = true
}: IAppointmentCardButtonProps) {
  const { t } = useTranslation('common')

  return (
    <div className={clsx(classes.appointmentButtons)}>
      {/* Button to cancel the appointment */}
      {canCancel && <Button mode={'danger-main'} label={t('cancel_visit')} />}
      {/* Button to join a video call */}
      {canJoin && <Button mode={'main'} label={t('join_video_visit')} />}
    </div>
  )
}
