import { BasePage } from '@pages/basePage/basePage.tsx'
import { useAddresses, usePostAddress } from '@api/address'
import { useTableParams } from '@components/organisms/pageTable'
import { useProfile } from '@api/profile'
import { AddAddress, AddressView } from '@/templates/address'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues
  const { data: profile } = useProfile()

  const { data, isLoading, isFetching } = useAddresses({
    variables: {
      PageSize: resultsPerPage,
      PageIndex: currentPage,
      Uuid: profile?.data?.uuid
    },
    enabled: !!profile?.data?.uuid
  })

  const { mutate } = usePostAddress()

  return (
    <BasePage isNeedBack>
      <AddressView
        data={data?.data?.data || []}
        total={data?.data?.total || 0}
        tableParamProps={tableProps}
        isLoading={isLoading}
        isFetching={isFetching}
      />
      <AddAddress onSubmit={(dto) => mutate(dto)} />
    </BasePage>
  )
}
