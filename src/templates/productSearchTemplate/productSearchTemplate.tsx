import { useTranslation } from 'react-i18next'
import { PageTable } from '@components/organisms/pageTable'
import { ProductCard } from '@components/molecules/productCard'
import { useFormik } from 'formik'
import { useCategories } from '@api/category'
import { Grid } from '@components/atoms/Grid'
import { FastComplete } from '@components/formControls/fastSelect/fastComplete.tsx'
import { useEffect } from 'react'
import { useBrands } from '@api/brands'
import { useLocation, useNavigate } from 'react-router-dom'
import { FastRadio } from '@components/fastFields'
import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import { useUserStore } from '@stores'
import { UserTypes } from '@constants'
import { Button } from '@components/atoms/button'
import classes from './styles.module.scss'
import {
  IProductSearchFormValues,
  productSearchFormInitialValues
} from '@/templates/productSearchTemplate/schema.ts'
import { IProductSearchTemplate } from '@/templates/productSearchTemplate'
import { path } from '@/routes'

export function ProductSearchTemplate({
  isLoading,
  data,
  total,
  isFetching,
  tableParamProps,
  onCategoryChange,
  onBrandChange,
  onOrderChange
}: IProductSearchTemplate) {
  const { t } = useTranslation('form')

  const { search } = useLocation()
  const navigate = useNavigate()
  const role = useUserStore((state) => state.role)

  const searchParams = new URLSearchParams(search)

  const formik = useFormik<IProductSearchFormValues>({
    initialValues: {
      brand: searchParams?.get('brand')
        ? JSON.parse(searchParams?.get('brand') || '')
        : productSearchFormInitialValues?.brand,
      category: searchParams?.get('category')
        ? JSON.parse(searchParams?.get('category') || '')
        : productSearchFormInitialValues?.category,
      order:
        searchParams?.get('order') || productSearchFormInitialValues?.order,
      isDiscounted: productSearchFormInitialValues?.isDiscounted
    },
    onSubmit: () => {}
  })

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError
  } = useCategories({
    variables: {
      PageSize: 100,
      PageIndex: 1
    }
  })

  const {
    data: brands,
    isLoading: isBrandsLoading,
    isError: isBrandsError
  } = useBrands({
    variables: {
      PageSize: 100,
      PageIndex: 1
    }
  })

  useEffect(() => {
    onCategoryChange(formik.values.category.key)
    onBrandChange(formik.values.brand.key)
    onOrderChange(formik.values.order)
    searchParams.set('brand', JSON.stringify(formik.values.brand))
    searchParams.set('category', JSON.stringify(formik.values.category))
    searchParams.set('order', formik.values.order)
    navigate({ search: searchParams?.toString() }, { replace: true })
  }, [formik.values.brand.key, formik.values.category.key, formik.values.order])

  if (isLoading || !data) return null

  const actions = [UserTypes.MANAGER, UserTypes.STAFF]?.includes(
    role || UserTypes.CUSTOMER
  )
    ? [
        <div key={'1'}>
          <Button
            mode={'main'}
            onClick={() => navigate(path.common.productForm.link())}
          >
            افزودن محصول
          </Button>
        </div>
      ]
    : undefined

  return (
    <div>
      <div>
        <Grid>
          <FastComplete
            type={'category'}
            formik={formik}
            name={'category'}
            options={
              categories?.data?.data?.map((i) => ({
                key: i?.uuid,
                value: i?.name
              })) || []
            }
            isLoading={isCategoriesLoading}
            isError={isCategoriesError}
          />
          <FastComplete
            type={'brand'}
            formik={formik}
            name={'brand'}
            options={
              brands?.data?.data?.map((i) => ({
                key: i?.uuid,
                value: i?.name
              })) || []
            }
            isLoading={isBrandsLoading}
            isError={isBrandsError}
          />
          <div className={clsx(classes.productSearch__questionField)}>
            <Typography fontSize='md-high'>مرتب سازی:</Typography>
            <div className={clsx(classes.productSearch__radios)}>
              <FastRadio
                name={'order'}
                title={'newest'}
                value={'Newest'}
                formik={formik}
              />
              <FastRadio
                name={'order'}
                title={'cheapest'}
                value={'Cheapest'}
                formik={formik}
              />
              <FastRadio
                name={'order'}
                title={'discounted'}
                value={'Discounted'}
                formik={formik}
              />
            </div>
          </div>
        </Grid>
      </div>
      <PageTable
        actions={actions}
        noDownload
        noPrint
        title={t('product_table')}
        type={'grid'}
        total={total}
        isFetching={isFetching}
        {...tableParamProps}
      >
        {data?.map((product) => <ProductCard key={product?.id} {...product} />)}
      </PageTable>
    </div>
  )
}
