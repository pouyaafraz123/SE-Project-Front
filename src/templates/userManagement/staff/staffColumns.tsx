import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { ActionButton, ViewProfile } from '@/components/tableColumns'
import { IStaffListEndpoint } from '@/api/userManagement/staff'
import { path } from '@/routes'

const columnHelper = createColumnHelper<IStaffListEndpoint>()

export const useTableColumns = () => {
  const { t } = useTranslation('form')

  return [
    columnHelper.accessor('user_id', {
      header: t('userId')
    }),
    columnHelper.accessor((data) => `${data.first_name} ${data.last_name}`, {
      header: t('fullName')
    }),

    columnHelper.accessor((data) => data.hf_type.value, {
      header: t('hfType')
    }),
    columnHelper.accessor((data) => `${data.hf_name} - ${data.hf_id}`, {
      header: t('hfName/hfId')
    }),
    columnHelper.accessor('id', {
      header: t('viewProfile'),
      cell: (props) => (
        <ViewProfile path={path.users.staffView.link(props.getValue())} />
      )
    }),
    columnHelper.accessor('id', {
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
