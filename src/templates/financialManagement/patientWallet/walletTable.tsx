import { useTranslation } from 'react-i18next'
import { useTableColumns } from './columns'
import { IPaientWalletTableEndpoint } from '@/api/financial/wallet'
import { ITable, IUpdateBalanceMutationFn } from '@/interfaces'
import { PageTable } from '@/components/organisms/pageTable'
import { Button } from '@/components/atoms/button'
import { path } from '@/routes'

export function WalletTable(
  props: ITable<IPaientWalletTableEndpoint> & {
    mutateFn: IUpdateBalanceMutationFn
  }
) {
  const { data, isLoading, total, tableParamProps, isFetching, mutateFn } =
    props
  const { t } = useTranslation('common')
  const columns = useTableColumns({ updateBalanceMutationFn: mutateFn })

  if (isLoading || !data) return null

  return (
    <PageTable
      title={t('listBoxTitle.patientWallet')}
      type={'basic'}
      tableProps={{ columnDef: columns, dataJSON: data }}
      total={total}
      isFetching={isFetching}
      {...tableParamProps}
    />
  )
}
