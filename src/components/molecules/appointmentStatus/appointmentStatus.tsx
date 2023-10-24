import {
  appointmentStatusData,
  IAppointmentStatusProps
} from '@components/molecules/appointmentStatus'
import { useMemo } from 'react'
import { StatusChipBase } from '@components/atoms/statusChipBase'
import clsx from 'clsx'
import classes from './styles.module.scss'

/**
 * Component that displays appointment status chips.
 *
 * @param {IAppointmentStatusProps} props - The props for the AppointmentStatus component.
 * @param {string} props.status - The status of the appointment.
 * @returns AppointmentStatus The rendered AppointmentStatus component.
 */
export function AppointmentStatus(props: IAppointmentStatusProps) {
  const { status } = props

  // Use useMemo to memoize the rendered appointment status chips.
  const renderAppointmentStatus = useMemo(() => {
    return appointmentStatusData?.map((statusData) => {
      return (
        <StatusChipBase
          key={statusData?.type}
          label={statusData?.label}
          color={statusData?.color}
          disabled={status !== statusData?.type}
        />
      )
    })
  }, [status])

  return (
    // Render the appointment status chips in a row.
    <div className={clsx(classes.appointmentStatusRow)}>
      {renderAppointmentStatus}
    </div>
  )
}
