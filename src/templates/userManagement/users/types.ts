import { IChangeUserStatusProps, ITable } from './../../../interfaces/table'
import { IUsersListEndpoint } from '@/api/userManagement/users'

export interface IUsersTableProps extends ITable<IUsersListEndpoint> {
  changeUserProps: IChangeUserStatusProps
}
