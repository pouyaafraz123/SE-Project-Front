import { createColumnHelper } from '@tanstack/react-table'
import { IconButton } from '@components/molecules/iconButton'
import { useTranslation } from 'react-i18next'
import { ColumnActionProps, IHF } from './types'
import { Icon } from '@/components/atoms/icons'
import { Chip } from '@/components/atoms/chip'

const columnHelper = createColumnHelper<IHF>()

export const useHFColumns = (props: ColumnActionProps) => {
  const { onDelete } = props
  const { t } = useTranslation(['form'])
  return [
    columnHelper.accessor('id', { header: t('id') }),
    columnHelper.accessor('name', { header: t('hfName') }),
    columnHelper.accessor('type', {
      header: t('hfType'),
      cell: (props) => (
        <Chip value={props.getValue().value} name={props.getValue().key} />
      )
    }),
    columnHelper.accessor('id', {
      id: 'deleteAction',
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
