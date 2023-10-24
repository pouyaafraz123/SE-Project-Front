import { TAppointmentStatus } from '@components/molecules/appointmentStatus'
import { IAppointmentCardTopProps } from '@components/organisms/appointmentCard/components/appointmentCardTop'

/**
 * Interface representing the props for the AppointmentCard component.
 */
export interface IAppointmentCardProps {
  /**
   * The status of the appointment.
   */
  status: TAppointmentStatus

  /**
   * Data for rendering the top section of the appointment card.
   */
  data: IAppointmentCardTopProps
}
