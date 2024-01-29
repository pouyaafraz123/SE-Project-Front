import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import { FastInput } from '@components/fastFields'
import { useNavigate } from 'react-router-dom'
import { FileInput } from '@components/formControls/fileInput'
import { notify } from '@components/atoms/notify'
import {
  addBrandFormSchema,
  addBrandInitialValues,
  IAddBrandFormValues
} from '@/templates/addBrand/schema.ts'
import { IAddBrandProps } from '@/templates/addBrand/types.ts'

export function AddBrand({ onSubmit }: IAddBrandProps) {
  const formik = useFormik<IAddBrandFormValues>({
    initialValues: addBrandInitialValues,
    validationSchema: addBrandFormSchema,
    onSubmit: (values) => {
      if (!values.logoFileId) {
        notify.error({ title: 'خطا', text: 'باید فایل لوگو را انتخاب کنید' })
        return
      }
      onSubmit(values)
    }
  })

  const navigate = useNavigate()

  return (
    <Form
      submitBtnTitle={'submit'}
      onSubmit={formik.handleSubmit}
      onCancel={() => navigate(-1)}
    >
      <Grid subtitle={'add_brand'}>
        <FastInput name={'name'} type={'brand_name'} formik={formik} />
        <Grid.FullWidthColumn>
          <FileInput
            type={'image'}
            label={'upload_avatar'}
            value={formik.values.logoFileId ? [formik.values.logoFileId] : []}
            onChange={(value) => formik.setFieldValue('logoFileId', value[0])}
          />
        </Grid.FullWidthColumn>
      </Grid>
    </Form>
  )
}
