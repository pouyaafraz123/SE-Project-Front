import { BasePage } from '@pages/basePage/basePage.tsx'
import { useTableParams } from '@components/organisms/pageTable'
import { useCart, useDeleteCart, usePostCart } from '@api/cart'
import { useAddresses } from '@api/address'
import { useProfile } from '@api/profile'
import { useState } from 'react'
import { useSubmitCart } from '@api/cart/submitCart.ts'
import { notify } from '@components/atoms/notify'
import { useNavigate } from 'react-router-dom'
import { CartTemplate } from '@/templates/cart'
import { path } from '@/routes'

export function Component() {
  const { paginationValues, searchValue, filterValues, tableProps } =
    useTableParams({})
  const { currentPage, resultsPerPage } = paginationValues

  const navigate = useNavigate()

  const { data: profile } = useProfile()

  const { data, isLoading, isFetching } = useCart({
    variables: { PageSize: resultsPerPage, PageIndex: currentPage }
  })

  const { data: addresses } = useAddresses({
    variables: {
      PageSize: 1000,
      Uuid: profile?.data?.uuid,
      PageIndex: 1
    },
    enabled: !!profile?.data?.uuid
  })

  const { mutate, isLoading: isUpdating } = usePostCart()
  const { mutate: deleteMutate, isLoading: isDeleting } = useDeleteCart()

  const { mutate: submitCart } = useSubmitCart()

  /* if (isUpdating || isDeleting || isLoading)
    return <BasePage isNeedBack>Loading ...</BasePage>*/

  const [selectedAddress, setSelectedAddress] = useState('')

  return (
    <BasePage isNeedBack>
      <CartTemplate
        data={data?.data?.data || []}
        total={data?.data?.total || 0}
        tableParamProps={tableProps}
        isLoading={isLoading}
        isFetching={isFetching}
        onCartUpdate={(dto) => mutate(dto)}
        onCartItemDelete={(dto) => deleteMutate({ id: dto })}
        addresses={addresses?.data?.data || []}
        selectedAddress={selectedAddress}
        onAddressSelect={(address) => setSelectedAddress(address)}
        onSubmit={() => {
          if (data?.data?.total === 0) {
            notify.error({ title: 'خطا', text: 'سبد خرید خالی می باشد.' })
            return
          }
          if (!selectedAddress) {
            notify.error({
              title: 'خطا',
              text: 'باید ابتدا آدرس مورد نظر را انتخاب کنید.'
            })
            return
          }
          submitCart(
            { addressUuid: selectedAddress },
            {
              onSuccess: () => {
                notify.success({
                  title: 'خرید موفق',
                  text: 'خرید شما با موفقیت انجام شد.'
                })
                navigate(path.common.landing.link())
              }
            }
          )
        }}
      />
    </BasePage>
  )
}
