import { Grid } from '@components/atoms/Grid'
import { Form } from '@components/formControls/baseForm'
import { useFormik } from 'formik'
import { Button } from '@components/atoms/button'
import { FastTextarea } from '@components/fastFields/fastTextarea/fastTextarea.tsx'
import {
  addAddressInitialValues,
  addressFormSchema,
  IAddAddressFormValues
} from '@/templates/address/schema.ts'
import { IAddAddressFormProps } from '@/templates/address/types.ts'

export function AddAddress({ onSubmit }: IAddAddressFormProps) {
  const formik = useFormik<IAddAddressFormValues>({
    initialValues: addAddressInitialValues,
    validationSchema: addressFormSchema,
    onSubmit: (values) => {
      onSubmit({ address: values.address })
      formik.resetForm()
    }
  })

  return (
    <Form noButtons>
      <Grid subtitle={'add_address'}>
        <Grid.FullWidthColumn>
          <FastTextarea name={'address'} type={'address'} formik={formik} />
        </Grid.FullWidthColumn>
        <Grid.Button>
          <Button mode={'add'} onClick={() => formik.submitForm()}></Button>
        </Grid.Button>
      </Grid>
    </Form>
  )
}
