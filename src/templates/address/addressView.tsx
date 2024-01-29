import { PageTable } from '@components/organisms/pageTable'
import { useTranslation } from 'react-i18next'
import { AddressCard } from '@components/atoms/addressCard'
import { IViewAddressProps } from '@/templates/address/types.ts'

export function AddressView({
  data,
  isLoading,
  tableParamProps,
  total,
  isFetching
}: IViewAddressProps) {
  const { t } = useTranslation('form')

  if (isLoading || !data) return null
  return (
    <PageTable
      noSearch
      noDownload
      noPrint
      title={t('addresses')}
      type={'row'}
      total={total}
      isFetching={isFetching}
      {...tableParamProps}
    >
      {data?.map((address) => (
        <AddressCard address={address} key={address?.uuid} />
      ))}
    </PageTable>
  )
}
