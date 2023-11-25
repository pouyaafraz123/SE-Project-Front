import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { ActionButton, ViewProfile } from '@/components/tableColumns'
import { ILocalAdminListEndpoint } from '@/api/userManagement/localAdmin'
import { path } from '@/routes'
import { Chip } from '@/components/atoms/chip'

const columnHelper = createColumnHelper<ILocalAdminListEndpoint>()

export const useTableColumns = () => {
  const { t } = useTranslation('form')

  return [
    columnHelper.accessor('user_id', {
      header: t('userId')
    }),
    columnHelper.accessor((data) => `${data.first_name} ${data.last_name}`, {
      header: t('fullName')
    }),
    columnHelper.accessor('hf_type', {
      header: t('hfType'),
      cell: (props) => (
        <Chip value={props.getValue().value} name={props.getValue().key} />
      )
    }),
    columnHelper.accessor((data) => `${data.hf_name} - ${data.hf_id}`, {
      header: t('hfName/hfId')
    }),
    columnHelper.accessor('id', {
      id: 'viewProfile',
      header: t('viewProfile'),
      cell: (props) => (
        <ViewProfile path={path.users.localAdminView.link(props.getValue())} />
      )
    }),
    columnHelper.accessor('id', {
      id: 'action',
      header: t('action'),
      cell: (props) => (
        <ActionButton
          passwordRecoveryProps={{ path: '' }}
          sendMessageProps={{ path: '' }}
        />
      )
    })
  ]
}
