import { createColumnHelper } from '@tanstack/react-table'
import { IconButton } from '@components/molecules/iconButton'
import { useTranslation } from 'react-i18next'
import { ColumnActionProps, IDoctor } from './types'
import { Icon } from '@/components/atoms/icons'

const columnHelper = createColumnHelper<IDoctor>()

export const useDoctorColumns = (props: ColumnActionProps) => {
  const { onDelete } = props
  const { t } = useTranslation(['form'])
  return [
    columnHelper.accessor('userId', { header: t('id') }),
    columnHelper.accessor((data) => `${data.firstName} ${data.lastName}`, {
      header: t('doctorName')
    }),
    columnHelper.accessor('speciality', { header: t('speciality') }),
    columnHelper.accessor('id', {
      header: 'عملیات',
      cell(props) {
        return (
          <IconButton
            icon={<Icon name='trash-bin-trash' color='danger-main' />}
            noTooltip
            transparent
            label=''
            onClick={() => onDelete(props.getValue())}
          />
        )
      }
    })
  ]
}
