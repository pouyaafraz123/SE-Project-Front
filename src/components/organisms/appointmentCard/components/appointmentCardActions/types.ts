import { IAppointmentCardVariants } from '@components/organisms/appointmentCard'

export type IAppointmentCardActionProps = {
  canReschedule?: boolean
  canView?: boolean
  canEdit?: boolean
  canPrint?: boolean
  canDownload?: boolean
  variant: IAppointmentCardVariants
}
