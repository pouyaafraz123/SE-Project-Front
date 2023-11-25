import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { ColumnActionProps, PatientInformationDataType } from './types'
import { Avatar } from '@/components/atoms/avatar'
import { ActionButton } from '@/components/tableColumns'

const columnHelper = createColumnHelper<PatientInformationDataType>()

export const useTableColumns = (props: ColumnActionProps) => {
  const { showExperiments } = props
  const { t } = useTranslation('form')
  const columns = [
    columnHelper.accessor('patientId', {
      header: t('patientId')
    }),
    columnHelper.accessor('avatar', {
      header: t('patientAvatar'),
      cell(props) {
        return (
          <Avatar
            size='extraSmall'
            userInfo={{
              firstName: props.row.original.firstName,
              lastName: props.row.original.lastName,
              imageUrl: props.getValue()
            }}
          />
        )
      }
    }),
    columnHelper.accessor((data) => `${data.firstName} ${data.lastName}`, {
      id: 'fullName',
      header: t('patientName')
    }),
    columnHelper.accessor('gender', {
      header: t('patientGender')
    }),
    columnHelper.accessor('age', {
      header: t('patientAge')
    })
  ]
  if (showExperiments) {
    columns.push(
      columnHelper.display({
        enableHiding: true,
        id: 'action',
        header: t('action'),
        cell(props) {
          return <ActionButton showExperiments={{ path: '' }} />
        }
      })
    )
  }
  return columns
}
