import {
  TAppointmentDataStatus,
  TAppointmentStatus
} from '@components/molecules/appointmentStatus'
import {
  IAppointmentCardButtonProps,
  ISummaryCardButtonProps
} from '@components/organisms/appointmentCard/components/appointmentCardButtons/types.ts'

/**
 * Interface representing the props for the AppointmentCardBottom component.
 */
export interface IAppointmentCardBottomProps
  extends IAppointmentCardButtonProps,
    ISummaryCardButtonProps {
  /**
   * The status of the appointment.
   */
  variant: IAppointmentCardVariants
  status?: TAppointmentDataStatus | TAppointmentStatus
}

export type IAppointmentCardVariants =
  | 'appointment'
  | 'past-appointment'
  | 'summary-note'
  | IAppointmentDataVariants

export type IAppointmentDataVariants =
  | 'followup'
  | 'order'
  | 'referral'
  | 'prescription'
