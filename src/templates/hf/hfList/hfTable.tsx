import { PageTable } from '@components/organisms/pageTable'
import { useTranslation } from 'react-i18next'
import { useTableColumns } from './columns'
import { IHealthFacilityTable } from '@/api/hf'
import { ITable } from '@/interfaces'
import { Button } from '@/components/atoms/button'
import { path } from '@/routes'

export function HFTable(props: ITable<IHealthFacilityTable>) {
  const { data, isLoading, total, tableParamProps, isFetching } = props
  const { t } = useTranslation('common')
  const columns = useTableColumns()

  if (isLoading || !data) return null

  const actions = [
    <Button key='add' mode='main' linkTo={path.hf.hfCreate.link()}>
      {t('tableActions.addHF')}
    </Button>
  ]
  return (
    <PageTable
      actions={actions}
      title={t('listBoxTitle.hf')}
      type={'basic'}
      tableProps={{ columnDef: columns, dataJSON: data }}
      total={total}
      isFetching={isFetching}
      {...tableParamProps}
    />
  )
}
