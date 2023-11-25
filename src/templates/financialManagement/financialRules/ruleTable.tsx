import { useTranslation } from 'react-i18next'
import { useTableColumns } from './columns'
import { IFinancialRuleTableEndpoint } from '@/api/financial'
import { ITable } from '@/interfaces'
import { PageTable } from '@/components/organisms/pageTable'
import { Button } from '@/components/atoms/button'
import { path } from '@/routes'

export function FinancialTable(props: ITable<IFinancialRuleTableEndpoint>) {
  const { data, isLoading, total, tableParamProps, isFetching } = props
  const { t } = useTranslation('common')
  const columns = useTableColumns()

  if (isLoading || !data) return null

  const actions = [
    <Button key='add' mode='main' linkTo={path.financial.create.link()}>
      {t('tableActions.addFinancialRule')}
    </Button>
  ]
  return (
    <PageTable
      actions={actions}
      title={'لیست مراکز درمانی'}
      type={'basic'}
      tableProps={{ columnDef: columns, dataJSON: data }}
      total={total}
      isFetching={isFetching}
      {...tableParamProps}
    />
  )
}
