import {
  AppointmentCardActions,
  AppointmentCardBottom,
  AppointmentCardTop,
  IAppointmentCardProps
} from '@components/organisms/appointmentCard'
import { CardContainer } from '@components/molecules/cardContainer'
import clsx from 'clsx'
import { Separator } from '@components/atoms/separator/separator.tsx'
import classes from './styles.module.scss'

/**
 * AppointmentCard component displays an appointment card with its top and bottom sections.
 *
 * @param {IAppointmentCardProps} props - The props for the AppointmentCard component.
 * @param {TAppointmentStatus} props.status - The status of the appointment.
 * @param {IAppointmentCardTopProps} props.data - Data for rendering the top section of the appointment card.
 * @returns AppointmentCard The rendered AppointmentCard component.
 */
export function AppointmentCard({
  data,
  actions,
  status,
  canCancel,
  canJoin,
  variant,
  canWriteAddendum,
  canWriteSummary
}: IAppointmentCardProps) {
  return (
    <CardContainer boxProps={{ radius: 'lg', px: '0', py: '0' }}>
      <div className={clsx(classes.appointmentCard)}>
        {/* Display actions for the appointment card */}
        <AppointmentCardActions {...actions} variant={variant} />
        {/* Display the top section of the appointment card */}
        <AppointmentCardTop {...data} />
        {/* Display a separator */}
        <Separator />
        {/* Display the bottom section of the appointment card */}
        <AppointmentCardBottom
          status={status}
          canCancel={canCancel}
          canJoin={canJoin}
          variant={variant}
          canWriteSummary={canWriteSummary}
          canWriteAddendum={canWriteAddendum}
        />
      </div>
    </CardContainer>
  )
}
