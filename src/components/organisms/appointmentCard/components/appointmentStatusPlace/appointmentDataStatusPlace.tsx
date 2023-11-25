import {
  AppointmentDataStatus,
  IAppointmentDataStatusProps
} from '@components/molecules/appointmentStatus'
import classes from '@components/organisms/appointmentCard/components/appointmentStatusPlace/styles.module.scss'
import { Typography } from '@components/atoms/typography'
import { addColon } from '@utils'

export function AppointmentDataStatusPlace(props: IAppointmentDataStatusProps) {
  return (
    <div className={classes.appointmentStatus}>
      <Typography fontFamily={'dana'}>{addColon('وضعیت پیگیری')}</Typography>
      <AppointmentDataStatus {...props} />
    </div>
  )
}
