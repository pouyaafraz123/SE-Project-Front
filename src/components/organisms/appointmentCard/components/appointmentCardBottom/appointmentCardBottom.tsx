import {
  AppointmentCardButtons,
  AppointmentStatusPlace,
  IAppointmentCardBottomProps
} from '@components/organisms/appointmentCard'
import clsx from 'clsx'
import classes from './styles.module.scss'

/**
 * AppointmentCardBottom component displays the bottom section of an appointment card.
 *
 * @param {IAppointmentCardBottomProps} props - The props for the AppointmentCardBottom component.
 * @param {TAppointmentStatus} props.status - The status of the appointment.
 * @returns AppointmentCardBottom The rendered AppointmentCardBottom component.
 */
export function AppointmentCardBottom({ status }: IAppointmentCardBottomProps) {
  return (
    <div className={clsx(classes.bottom)}>
      {/* Render the status of the appointment */}
      <AppointmentStatusPlace status={status} />
      {/* Render the buttons for the appointment card */}
      <AppointmentCardButtons />
    </div>
  )
}
