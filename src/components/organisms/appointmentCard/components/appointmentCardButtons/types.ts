import { IAppointmentDataVariants } from '@components/organisms/appointmentCard'

/**
 * Interface representing the props for the AppointmentCardBottom component.
 */
export interface IAppointmentCardButtonProps {
  canJoin?: boolean
  canCancel?: boolean
}

export interface ISummaryCardButtonProps {
  canWriteSummary?: boolean
  canWriteAddendum?: boolean
}

export interface IAppointmentDataCardButtonProps {
  type: IAppointmentDataVariants
}
