import { PageTable } from '@components/organisms/pageTable'
import { useTranslation } from 'react-i18next'
import { CartProductCard } from '@components/organisms/cartProductCard'
import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import { useNavigate } from 'react-router-dom'
import { AddressCard } from '@components/atoms/addressCard'
import { ICartTemplateProps } from '@/templates/cart/types.ts'

export function CartTemplate({
  data,
  isLoading,
  tableParamProps,
  total,
  isFetching,
  onCartUpdate,
  onCartItemDelete,
  addresses,
  selectedAddress,
  onAddressSelect,
  onSubmit
}: ICartTemplateProps) {
  const { t } = useTranslation('form')

  const navigate = useNavigate()

  if (isLoading || !data) return null

  return (
    <Form
      submitBtnTitle={'submit'}
      onCancel={() => navigate(-1)}
      onSubmit={() => onSubmit()}
    >
      <Grid subtitle={'cart_table'}>
        <Grid.FullWidthColumn>
          <PageTable
            noSearch
            noDownload
            noPrint
            title={t('cart_table')}
            type={'row'}
            total={total}
            isFetching={isFetching}
            {...tableParamProps}
          >
            {data?.map((cart) => (
              <CartProductCard
                key={cart?.product?.uuid}
                id={cart?.product?.uuid}
                title={cart?.product?.name}
                quantity={cart?.product?.quantity}
                img={cart?.product?.cover?.url}
                discount={0}
                price={cart?.product?.price}
                count={cart?.quantity}
                onCountChange={(count) =>
                  onCartUpdate({
                    productUuid: cart?.product?.uuid,
                    quantity: count
                  })
                }
                onDelete={() => onCartItemDelete(cart?.product?.uuid)}
              />
            ))}
          </PageTable>
        </Grid.FullWidthColumn>
      </Grid>
      <Grid subtitle={'select_address'}>
        {addresses?.map((address) => (
          <AddressCard
            address={address}
            key={address?.uuid}
            onClick={() => onAddressSelect(address?.uuid)}
            isSelected={address?.uuid === selectedAddress}
          />
        ))}
      </Grid>
    </Form>
  )
}
