import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { DoctorInformationDataType } from './types'
import { Avatar } from '@/components/atoms/avatar'

const columnHelper = createColumnHelper<DoctorInformationDataType>()

export const useTableColumns = () => {
  const { t } = useTranslation('form')
  return [
    columnHelper.accessor('doctorId', {
      header: t('financial.doctorId')
    }),
    columnHelper.accessor('avatar', {
      header: t('doctorAvatar'),
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
      header: t('financial.doctorName')
    }),
    columnHelper.accessor('gender', {
      header: t('doctorGender')
    }),
    columnHelper.accessor('education', {
      header: t('doctorEducation')
    }),
    columnHelper.accessor('speciality', {
      header: t('specialityOrSubSpeciality')
    })
  ]
}
