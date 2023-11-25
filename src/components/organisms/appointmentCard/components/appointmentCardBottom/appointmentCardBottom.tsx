import {
  AppointmentCardButtons,
  AppointmentDataCardButtons,
  AppointmentDataStatusPlace,
  AppointmentStatusPlace,
  IAppointmentCardBottomProps,
  IAppointmentCardVariants,
  IAppointmentDataVariants,
  PastAppointmentCardButtons,
  SummaryCardButtons
} from '@components/organisms/appointmentCard'
import clsx from 'clsx'
import {
  TAppointmentDataStatus,
  TAppointmentStatus
} from '@components/molecules/appointmentStatus'
import classes from './styles.module.scss'

/**
 * AppointmentCardBottom component displays the bottom section of an appointment card.
 *
 * @param {IAppointmentCardBottomProps} props - The props for the AppointmentCardBottom component.
 * @param {TAppointmentStatus} props.status - The status of the appointment.
 * @returns AppointmentCardBottom The rendered AppointmentCardBottom component.
 */
export function AppointmentCardBottom({
  status,
  canCancel,
  canJoin,
  variant,
  canWriteAddendum,
  canWriteSummary
}: IAppointmentCardBottomProps) {
  const appointmentData: IAppointmentCardVariants[] = [
    'followup',
    'order',
    'referral',
    'prescription'
  ]

  const noStatus: IAppointmentCardVariants[] = [
    'past-appointment',
    'summary-note'
  ]

  const isAppointmentData = appointmentData?.includes(variant)
  const isNoStatus = noStatus?.includes(variant)

  return (
    <div
      className={clsx(classes.bottom, isNoStatus && classes.bottom__noStats)}
    >
      {/* Render the status of the appointment */}
      {variant === 'appointment' && (
        <AppointmentStatusPlace status={status as TAppointmentStatus} />
      )}
      {isAppointmentData && (
        <AppointmentDataStatusPlace status={status as TAppointmentDataStatus} />
      )}
      {/* Render the buttons for the appointment card */}
      {variant === 'appointment' && (
        <AppointmentCardButtons canJoin={canJoin} canCancel={canCancel} />
      )}
      {isAppointmentData && (
        <AppointmentDataCardButtons
          type={variant as IAppointmentDataVariants}
        />
      )}
      {variant === 'past-appointment' && <PastAppointmentCardButtons />}
      {variant === 'summary-note' && (
        <SummaryCardButtons
          canWriteAddendum={canWriteAddendum}
          canWriteSummary={canWriteSummary}
        />
      )}
    </div>
  )
}
