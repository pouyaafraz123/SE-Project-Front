import { useTranslation } from 'react-i18next'
import { PageTable } from '@components/organisms/pageTable'
import { ProductCard } from '@components/molecules/productCard'
import { IProductSearchTemplate } from '@/templates/productSearchTemplate'
import { Field } from '@components/fastFields/field'
import { AutoComplete } from '@components/formControls'
import { useFormik } from 'formik'
import {
  IProductSearchFormValues,
  productSearchFormInitialValues
} from '@/templates/productSearchTemplate/schema.ts'
import { useCategories } from '@api/category'
import { Grid } from '@components/atoms/Grid'

export function ProductSearchTemplate({
  isLoading,
  data,
  total,
  isFetching,
  tableParamProps
}: IProductSearchTemplate) {
  const { t } = useTranslation('form')

  const formik = useFormik<IProductSearchFormValues>({
    initialValues: productSearchFormInitialValues,
    onSubmit: () => {}
  })

  const { data: categories } = useCategories({
    variables: {
      PageSize: 100,
      PageIndex: 1
    }
  })

  if (isLoading || !data) return null

  return (
    <div>
      <div>
        <Grid>
          <Field name={'category'} title={'category'} formik={formik}>
            <AutoComplete
              options={
                categories?.data?.data?.map((i) => ({
                  key: i?.uuid,
                  value: i?.name
                })) || []
              }
              onChange={(e) => formik.handleChange(e)}
            />
          </Field>
        </Grid>
      </div>
      <PageTable
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
