import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import { FastInput } from '@components/fastFields'
import { useCategories } from '@api/category'
import { FastComplete } from '@components/formControls/fastSelect/fastComplete.tsx'
import { useNavigate } from 'react-router-dom'
import { FileInput } from '@components/formControls/fileInput'
import { notify } from '@components/atoms/notify'
import { FastTextarea } from '@components/fastFields/fastTextarea/fastTextarea.tsx'
import { useBrands } from '@api/brands'
import { ListBox } from '@components/molecules/listBox'
import { createColumnHelper } from '@tanstack/react-table'
import { Button } from '@components/atoms/button'
import { IconButton } from '@components/molecules/iconButton'
import { Icon } from '@components/atoms/icons'
import {
  addProductFormSchema,
  addProductInitialValues,
  IAddProductFormValues
} from '@/templates/addProduct/schema.ts'
import { IAddProductProps } from '@/templates/addProduct/types.ts'

const columnHelper = createColumnHelper<{ key: string; value: string }>()

export function AddProduct({ onSubmit }: IAddProductProps) {
  const formik = useFormik<IAddProductFormValues>({
    initialValues: addProductInitialValues,
    validationSchema: addProductFormSchema,
    onSubmit: (values) => {
      if (values.productImages.length === 0) {
        notify.error({ title: 'خطا', text: 'باید فایل کاور را انتخاب کنید' })
        return
      }
      onSubmit(values)
    }
  })

  const navigate = useNavigate()

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

  const columns = [
    columnHelper.accessor('key', {
      header: 'ویژگی'
    }),
    columnHelper.accessor('value', { header: 'مقدار' }),
    columnHelper.accessor('key', {
      id: 'deleteAction',
      header: 'عملیات',
      cell(props) {
        return (
          <IconButton
            icon={<Icon name='trash-bin-trash' color='danger-main' />}
            noTooltip
            transparent
            label=''
            onClick={() => {
              const detail = { ...formik.values.detail }
              delete detail[props.getValue()]
              formik.setFieldValue('detail', detail)
            }}
          />
        )
      }
    })
  ]

  return (
    <Form
      submitBtnTitle={'submit'}
      onSubmit={formik.handleSubmit}
      onCancel={() => navigate(-1)}
    >
      <Grid subtitle={'add_product'}>
        <FastInput name={'name'} type={'product_name'} formik={formik} />
        <FastInput
          name={'price'}
          type={'price'}
          formik={formik}
          inputType={'number'}
        />
        <FastInput
          name={'discountPrice'}
          type={'discounted_price'}
          formik={formik}
          inputType={'number'}
        />
        <FastInput
          name={'quantity'}
          type={'quantity'}
          formik={formik}
          inputType={'number'}
        />
        <FastComplete
          type={'type_status'}
          formik={formik}
          name={'status'}
          options={[
            { key: 'Ordered', value: 'سفارش' },
            { key: 'Purchasable', value: 'قابل خرید' }
          ]}
          isLoading={isCategoriesLoading}
          isError={isCategoriesError}
        />
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
        <Grid.FullWidthColumn>
          <ListBox
            title={'add_detail'}
            dataJSON={Object.entries(formik.values.detail)?.map((item) => ({
              key: item[0],
              value: item[1]
            }))}
            columnDef={columns}
          />
          <Grid>
            <FastInput name={'featureKey'} type={'feature'} formik={formik} />
            <FastInput name={'featureValue'} type={'value'} formik={formik} />
            <Grid.Button>
              <Button
                mode={'add'}
                onClick={() => {
                  if (
                    !formik.values.featureValue ||
                    !formik.values.featureKey
                  ) {
                    notify.error({ title: 'خطا', text: 'دیتای نامعتبر' })
                    return
                  }

                  formik.setFieldValue('detail', {
                    ...formik.values.detail,
                    [formik.values.featureKey]: formik.values.featureValue
                  })
                  formik.setFieldValue('featureKey', '')
                  formik.setFieldValue('featureValue', '')
                }}
              />
            </Grid.Button>
          </Grid>
        </Grid.FullWidthColumn>
        <Grid.FullWidthColumn>
          <FastTextarea
            name={'description'}
            type={'description'}
            formik={formik}
          />
        </Grid.FullWidthColumn>
        <Grid.FullWidthColumn>
          <FileInput
            type={'image'}
            label={'upload_avatar'}
            value={formik.values.productImages}
            onChange={(value) => formik.setFieldValue('productImages', value)}
          />
        </Grid.FullWidthColumn>
      </Grid>
    </Form>
  )
}
