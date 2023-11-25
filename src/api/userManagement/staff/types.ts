import { HfTypes, IOption } from '@/interfaces'

export type IStaffListEndpoint = {
  id: string
  user_id: string // only for viewing
  first_name: string
  last_name: string
  hf_type: IOption<HfTypes>
  hf_name: string
  hf_id: string
}
