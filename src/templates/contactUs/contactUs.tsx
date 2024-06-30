import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import { FastInput } from '@components/fastFields'
import { useCategories } from '@api/category'
import { FastComplete } from '@components/formControls/fastSelect/fastComplete.tsx'
import { useNavigate } from 'react-router-dom'
import { IContactUsProps } from './types'
import {
  contactUsFormSchema,
  contactUsInitialValues,
  IContactUsFormValues
} from './schema'
import { IAddCategoryProps } from '@/templates/addCategory/types.ts'
import {
  addCategoryFormSchema,
  addCategoryInitialValues,
  IAddCategoryFormValues
} from '@/templates/addCategory/schema.ts'
import { FastTextarea } from '@/components/fastFields/fastTextarea/fastTextarea'

export function ContactUs({ onSubmit }: IContactUsProps) {
  const formik = useFormik<IContactUsFormValues>({
    initialValues: contactUsInitialValues,
    validationSchema: contactUsFormSchema,
    onSubmit: (values) => {
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
      <Grid subtitle={'contact_us'}>
        <FastInput name={'firstName'} type={'first_name'} formik={formik} />
        <FastInput name={'lastName'} type={'last_name'} formik={formik} />
        <FastInput name={'email'} type={'email'} formik={formik} />
        <Grid.FullWidthColumn>
          <FastTextarea formik={formik} name='message' type='description' />
        </Grid.FullWidthColumn>
      </Grid>
    </Form>
  )
}
