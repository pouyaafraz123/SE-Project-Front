import clsx from 'clsx'
import { Button } from '@components/atoms/button'
import classes from './styles.module.scss'

/**
 * AppointmentCardButtons component displays buttons for an appointment card.
 *
 * @returns AppointmentCardButtons The rendered AppointmentCardButtons component.
 */
export function AppointmentCardButtons() {
  return (
    <div className={clsx(classes.appointmentButtons)}>
      {/* Button to cancel the appointment */}
      <Button mode={'danger-main'} label={'لغو ویزیت'} />
      {/* Button to join a video call */}
      <Button mode={'main'} label={'پیوستن به تماس تصویری'} />
    </div>
  )
}
