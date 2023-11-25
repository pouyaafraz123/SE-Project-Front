import { createColumnHelper } from '@tanstack/react-table'
import { IconButton } from '@components/molecules/iconButton'
import { useTranslation } from 'react-i18next'
import { IDoctorFinancialRule, ColumnActionProps } from './types'
import { Icon } from '@/components/atoms/icons'
import { Chip } from '@/components/atoms/chip'

const columnHelper = createColumnHelper<IDoctorFinancialRule>()

export const useFinancialRuleColumns = (props: ColumnActionProps) => {
  const { onDelete, onEdit } = props

  const { t } = useTranslation(['form'])
  return [
    // columnHelper.accessor('userId', { header: t('id') }),
    // columnHelper.accessor('facility_name', { header: t('hfName') }),
    columnHelper.accessor('visit_type', {
      header: t('visitType'),
      cell: (props) => (
        <Chip value={props.getValue().value} name={props.getValue().key} />
      )
    }),
    columnHelper.accessor('time', { header: t('visitTime') }),
    columnHelper.accessor('cost', { header: t('price') }),
    columnHelper.accessor('overflow_percent', { header: t('robovPercentage') }),
    columnHelper.accessor('id', {
      header: t('action'),
      cell(props) {
        return (
          <>
            <IconButton
              icon={<Icon name='pen-square' color='primary-main' />}
              noTooltip
              transparent
              label=''
              type='button'
              onClick={() => onEdit(props.getValue())}
            />
            <IconButton
              icon={<Icon name='trash-bin-trash' color='danger-main' />}
              noTooltip
              transparent
              label=''
              type='button'
              onClick={() => onDelete(props.getValue())}
            />
          </>
        )
      }
    })
  ]
}
