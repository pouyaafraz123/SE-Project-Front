import { ApptTypes } from '@constants'
import { GenderTypes, IOption } from '@/interfaces'

export interface ISummaryNoteTableEndpoint {
  id: number
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
