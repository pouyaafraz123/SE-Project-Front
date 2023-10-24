import {
  AppointmentStatus,
  IAppointmentStatusProps
} from '@components/molecules/appointmentStatus'
import { Typography } from '@components/atoms/typography'
import { addColon } from '@utils'
import classes from './styles.module.scss'

/**
 * AppointmentStatusPlace component displays the appointment status within the appointment card.
 *
 * @param {IAppointmentStatusProps} props - The props for the AppointmentStatusPlace component.
 * @param {TAppointmentStatus} props.status - The status of the appointment.
 * @returns AppointmentStatusPlace The rendered AppointmentStatusPlace component.
 */
export function AppointmentStatusPlace(props: IAppointmentStatusProps) {
  return (
    <div className={classes.appointmentStatus}>
      <Typography fontFamily={'dana'}>{addColon('وضعیت ملاقات')}</Typography>
      <AppointmentStatus {...props} />
    </div>
  )
}
