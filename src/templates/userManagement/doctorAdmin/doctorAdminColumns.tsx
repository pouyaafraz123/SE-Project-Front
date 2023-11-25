import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { ActionButton, ViewProfile } from '@/components/tableColumns'
import { IDoctorAdminListEndpoint } from '@/api/userManagement/doctorAdmin'

const columnHelper = createColumnHelper<IDoctorAdminListEndpoint>()

export const useTableColumns = () => {
  const { t } = useTranslation('form')

  return [
    columnHelper.accessor('user_id', {
      header: t('userId')
    }),
    columnHelper.accessor('full_name', {
      header: t('fullName')
    }),
    columnHelper.accessor('hf_type', {
      header: t('hfType')
    }),
    columnHelper.accessor((data) => `${data.hf_name} - ${data.hf_id}`, {
      header: t('hfName/hfId')
    }),
    columnHelper.accessor('id', {
      header: t('viewProfile'),
      cell: () => <ViewProfile path='' />
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
