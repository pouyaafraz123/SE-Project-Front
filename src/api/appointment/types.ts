import { TAppointmentStatus } from '@components/molecules/appointmentStatus'
import { GenderTypes, IOption } from '@/interfaces'

export interface IAppointmentTableEndpoint {
  id: number
  appt_id: string
  status: TAppointmentStatus
  doctor: {
    id: number
    user_id: string
    first_name: string
    last_name: string
    avatar: string
    degree: IOption //TODO ADD GENERIC TYPE
    speciality: IOption // TODO ADD GENERIC TYPE
  }
  patient: {
    id: number
    user_id: string
    first_name: string
    last_name: string
    avatar: string
    age: string
    gender: IOption<GenderTypes>
  }
  facility: IOption
  date: string
  can_join: boolean
  can_cancel: boolean
  can_view: boolean
  can_edit: boolean
  can_reschedule: boolean
  can_noShow: boolean
}
