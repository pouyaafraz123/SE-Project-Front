import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { ColumnActionProps, IOperationTimesLists } from './types'
import { Icon } from '@/components/atoms/icons'
import { IconButton } from '@/components/molecules/iconButton'

const columnHelper = createColumnHelper<IOperationTimesLists>()

export const useTableColumns = (props: ColumnActionProps) => {
  const { onDelete } = props
  const { t } = useTranslation('form')
  return [
    columnHelper.accessor('day.value', {
      header: t('days')
    }),
    columnHelper.accessor('startTime', {
      header: t('startTime')
    }),
    columnHelper.accessor('endTime', {
      header: t('endTime')
    }),
    columnHelper.accessor('id', {
      header: t('action'),
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
