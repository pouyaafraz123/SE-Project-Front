import { createColumnHelper } from '@tanstack/react-table'
import { IconButton } from '@components/molecules/iconButton'
import { useTranslation } from 'react-i18next'
import { IFinancialRule, ColumnActionProps } from './types'
import { Icon } from '@/components/atoms/icons'
import { Chip } from '@/components/atoms/chip'

const columnHelper = createColumnHelper<IFinancialRule>()

export const useFinancialRuleColumns = (props: ColumnActionProps) => {
  const { onDelete } = props

  const { t } = useTranslation(['form'])
  return [
    // columnHelper.accessor('userId', { header: t('id') }),
    columnHelper.accessor('visitType', {
      header: t('visitType'),
      cell: (props) => (
        <Chip value={props.getValue().value} name={props.getValue().key} />
      )
    }),
    columnHelper.accessor('visitDuration', { header: t('visitTime') }),
    columnHelper.accessor('price', { header: t('price') }),
    columnHelper.accessor('robovPercentage', { header: t('robovPercentage') }),
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
