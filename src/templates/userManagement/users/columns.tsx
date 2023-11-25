import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { Chip } from '@/components/atoms/chip'
import { IUsersListEndpoint } from '@/api/userManagement/users'
import { ChangePassword, UserActivation } from '@/components/tableColumns'
import { path } from '@/routes'
import { IChangeUserStatusProps } from '@/interfaces'

const columnHelper = createColumnHelper<IUsersListEndpoint>()

export const useTableColumns = (props: IChangeUserStatusProps) => {
  const { isLoading, mutateFn } = props
  const { t } = useTranslation('form')

  return [
    columnHelper.accessor('user_id', {
      header: t('userId')
    }),
    columnHelper.accessor('all_roles', {
      header: t('roles'),
      cell: (props) => (
        <Chip
          value={props.getValue().map((role) => role.value)}
          name={props.getValue().map((role) => role.key)}
        />
      )
    }),
    columnHelper.accessor((data) => `${data.first_name} ${data.last_name}`, {
      header: t('fullName')
    }),
    columnHelper.accessor((data) => data.gender.value, {
      header: t('gender')
    }),
    columnHelper.accessor((data) => `${data.state.value}/${data.city.value}`, {
      header: t('state/city')
    }),
    columnHelper.accessor('status', {
      header: t('status'),
      cell: (props) => (
        <Chip value={props.getValue().value} name={props.getValue().key} />
      )
    }),
    columnHelper.accessor('status', {
      header: t('activation'),
      cell: (props) => (
        <UserActivation
          changeUserStatusMutate={mutateFn}
          isLoading={isLoading}
          status={props.getValue()}
          userId={props.row.original.id}
          fullName={`${props.row.original.first_name} ${props.row.original.last_name}`}
        />
      )
    }),
    columnHelper.accessor('id', {
      header: t('changePassword'),
      cell: (props) => (
        <ChangePassword
          path={path.users.changePassword.link(props.getValue())}
        />
      )
    })
  ]
}
