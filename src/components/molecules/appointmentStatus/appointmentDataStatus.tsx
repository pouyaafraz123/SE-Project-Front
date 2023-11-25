import {
  appointmentDataStatusData,
  IAppointmentDataStatusProps
} from '@components/molecules/appointmentStatus'
import { useMemo } from 'react'
import { StatusChipBase } from '@components/atoms/statusChipBase'
import clsx from 'clsx'
import classes from '@components/molecules/appointmentStatus/styles.module.scss'

export function AppointmentDataStatus(props: IAppointmentDataStatusProps) {
  const { status } = props

  // Use useMemo to memoize the rendered appointment status chips.
  const renderAppointmentStatus = useMemo(() => {
    return appointmentDataStatusData?.map((statusData) => {
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
