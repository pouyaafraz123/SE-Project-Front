import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import { FastInput } from '@components/fastFields'
import { useCategories } from '@api/category'
import { FastComplete } from '@components/formControls/fastSelect/fastComplete.tsx'
import { useNavigate } from 'react-router-dom'
import { IAddCategoryProps } from '@/templates/addCategory/types.ts'
import {
  addCategoryFormSchema,
  addCategoryInitialValues,
  IAddCategoryFormValues
} from '@/templates/addCategory/schema.ts'

export function AddCategory({ onSubmit }: IAddCategoryProps) {
  const formik = useFormik<IAddCategoryFormValues>({
    initialValues: addCategoryInitialValues,
    validationSchema: addCategoryFormSchema,
    onSubmit: (values) => {
      onSubmit({
        name: values?.name,
        parentUuid: values?.parentUuid?.key || undefined
      })
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
      PageIndex: 1,
      OnlyParentCategories: true
    }
  })

  if (!categories?.data?.data) return null

  return (
    <Form
      submitBtnTitle={'submit'}
      onSubmit={formik.handleSubmit}
      onCancel={() => navigate(-1)}
    >
      <Grid subtitle={'add_category'}>
        <FastInput name={'name'} type={'category_name'} formik={formik} />
        <FastComplete
          type={'category_parent'}
          formik={formik}
          name={'parentUuid'}
          options={
            categories?.data?.data?.map((i) => ({
              key: i?.uuid,
              value: i?.name
            })) || []
          }
          isLoading={isCategoriesLoading}
          isError={isCategoriesError}
        />
      </Grid>
    </Form>
  )
}
