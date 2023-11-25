import { ApptTypes } from '@constants'
import { TAppointmentDataStatus } from '@components/molecules/appointmentStatus'
import { GenderTypes, IOption } from '@/interfaces'

export interface IAppointmentDataTableEndpoint {
  id: number
  status: TAppointmentDataStatus
  appointment: {
    id: number
    type: ApptTypes
    date: string
    appt_id: string
    facility: IOption
  }
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
}

export type IAppointmentDataType =
  | 'followup'
  | 'referral'
  | 'order'
  | 'prescription'

export interface IAppointmentDataParams {
  type?: IAppointmentDataType
}
