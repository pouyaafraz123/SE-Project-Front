import { GenderTypes, IOption, IRole, Status } from '@/interfaces'

export type IUsersListEndpoint = {
  id: string
  user_id: string // only for viewing
  first_name: string
  last_name: string
  all_roles: IOption<IRole>[] // key,value??
  gender: IOption<GenderTypes>
  city: IOption
  state: IOption
  status: IOption<Status>
}

export type IChangeUserStatusEndpoint = {
  id: string
  status: Status
}
