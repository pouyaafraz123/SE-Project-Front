import { IAppointmentCardTopProps } from '@components/organisms/appointmentCard/components/appointmentCardTop'
import { IAppointmentCardActionProps } from '@components/organisms/appointmentCard/components/appointmentCardActions/types.ts'
import { IAppointmentCardBottomProps } from '@components/organisms/appointmentCard/components/appointmentCardBottom'

/**
 * Interface representing the props for the AppointmentCard component.
 */
export interface IAppointmentCardProps extends IAppointmentCardBottomProps {
  /**
   * Data for rendering the top section of the appointment card.
   */
  data: IAppointmentCardTopProps
  actions: Omit<IAppointmentCardActionProps, 'variant'>
  id: number | string
}
