import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { ActionButton, ViewProfile } from '@/components/tableColumns'
import { IDoctorListEndpoint } from '@/api/userManagement/doctor'
import { path } from '@/routes'

const columnHelper = createColumnHelper<IDoctorListEndpoint>()

export const useTableColumns = () => {
  const { t } = useTranslation('form')

  return [
    columnHelper.accessor('user_id', {
      header: t('userId')
    }),
    columnHelper.accessor((data) => `${data.first_name} ${data.last_name}`, {
      header: t('fullName')
    }),
    columnHelper.accessor((data) => data.speciality.value, {
      header: t('speciality')
    }),
    columnHelper.accessor((data) => data.hf_type.value, {
      header: t('hfType')
    }),
    columnHelper.accessor((data) => `${data.hf_name} - ${data.hf_id}`, {
      header: t('hfName/hfId')
    }),
    columnHelper.accessor((data) => data.gender.value, {
      header: t('gender')
    }),
    // columnHelper.accessor((data) => data.languages.join(', '), {
    //   header: t('language')
    // }),
    columnHelper.accessor('id', {
      id: 'viewProfile',
      header: t('viewProfile'),
      cell: (props) => (
        <ViewProfile path={path.users.doctorView.link(props.getValue())} />
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
