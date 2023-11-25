import { createColumnHelper } from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { IconButton } from '@components/molecules/iconButton'
import { Icon } from '@components/atoms/icons'
import { IIllness, IIllnessColumnActionProps } from './index'

const columnHelper = createColumnHelper<IIllness>()

export const useIllnessColumns = (props: IIllnessColumnActionProps) => {
  const { t } = useTranslation(['form'])

  const { onDelete } = props

  const actionColumn = onDelete
    ? [
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
    : []

  return [
    columnHelper.accessor('name', {
      header: t('illnessName')
    }),
    ...actionColumn
  ]
}
