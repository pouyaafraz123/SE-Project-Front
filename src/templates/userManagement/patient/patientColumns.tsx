import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { useConvertDate } from '@utils'
import { ActionButton, PhoneCell, ViewProfile } from '@/components/tableColumns'
import { IPatientListEndpoint } from '@/api/userManagement/patient'
import { path } from '@/routes'

const columnHelper = createColumnHelper<IPatientListEndpoint>()

export const useTableColumns = () => {
  const { t } = useTranslation('form')
  const { convertBirthday } = useConvertDate()

  return [
    columnHelper.accessor('user_id', {
      header: t('userId')
    }),
    columnHelper.accessor((data) => `${data.first_name} ${data.last_name}`, {
      header: t('fullName')
    }),
    columnHelper.accessor((data) => data.birthday, {
      header: t('birthday'),
      cell: (props) => <div>{convertBirthday(props.getValue())}</div>
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
    columnHelper.accessor('mobile', {
      header: t('phone'),
      cell: (props) => <PhoneCell phoneNumber={props.getValue()} />
    }),
    columnHelper.accessor((data) => `${data.state.value}/${data.city.value}`, {
      header: t('state/city')
    }),
    columnHelper.accessor('id', {
      id: 'viewProfile',
      header: t('viewProfile'),
      cell: (props) => (
        <ViewProfile path={path.users.patientView.link(props.getValue())} />
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
