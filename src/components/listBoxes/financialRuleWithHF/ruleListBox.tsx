import { useTranslation } from 'react-i18next'
import { useFinancialRuleColumns } from './columns'
import { IProps } from './types'
import { ListBox } from '@/components/molecules/listBox'

export function FinancialListBox(props: IProps) {
  const { t } = useTranslation('form')

  const { list, onDelete, onEdit } = props

  const columnDef = useFinancialRuleColumns({
    onDelete: onDelete,
    onEdit: onEdit
  })

  return (
    <ListBox
      columnDef={columnDef}
      dataJSON={list}
      title='listBoxTitle.financial'
    />
  )
}
