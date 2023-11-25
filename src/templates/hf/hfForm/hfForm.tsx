import { useFormik } from 'formik'
import {
  FastInput,
  FastSelect,
  FastComplete,
  FastPhone,
  FastMultiSelect
} from '@components/fastFields'
import { Grid } from '@components/atoms/Grid'
import { Form } from '@components/formControls/baseForm'
import { IFormValues, formConfig, onSubmit } from './hfFormSchema'
import { IFormsTemplateProps } from '@/interfaces'
import { path } from '@/routes'
import { OperationTimes } from '@/components/listBoxes'

export function HFForm(props: IFormsTemplateProps<IFormValues>) {
  const { mode = 'create' } = props
  const initialValues =
    mode === 'create' ? null : { initialValues: props.initialValues }

  const formik = useFormik<IFormValues>({
    ...formConfig,
    ...initialValues
  })
  const getProps = { formik, readonly: mode == 'view' }

  return (
    <div>
      <Form
        mode={mode}
        onSubmit={() => onSubmit(formik, props.onSubmit)}
        onCancel={props.onCancel}
        editLink={path.hf.hfEdit.link(props.mode !== 'create' ? props.id : '')}
      >
        <Grid>
          <FastSelect {...getProps} name='HFType' type='hfType' />
          <FastInput {...getProps} name='HFName' type='hfName' />
          <FastComplete {...getProps} name='Country' type='country' />
          <FastComplete
            {...getProps}
            name='State'
            type='state'
            countryField='Country'
          />
          <FastComplete
            {...getProps}
            name='City'
            type='city'
            stateField='State'
          />
          <FastInput {...getProps} name='PostalCode' type='postalCode' />
          <FastPhone {...getProps} name='Phone' title='phone' />
          <FastPhone
            {...getProps}
            name='Fax'
            title='fax'
            icon='printer-minimalistic'
          />
          <FastInput {...getProps} name='WebSite' type='website' />
          <FastInput {...getProps} name='Email' title='email' type='email' />
          <FastInput
            {...getProps}
            name='ContactFirstName'
            title='contactFirstName'
            type='firstName'
          />
          <FastInput
            {...getProps}
            name='ContactLastName'
            title='contactLastName'
            type='lastName'
          />
          <FastMultiSelect
            {...getProps}
            name='HFDepartments'
            type='hfDepartments'
          />
          <FastInput
            {...getProps}
            name='Address'
            title='address'
            type='address'
          />
          <FastSelect
            {...getProps}
            name='timezone'
            type='timezone'
            countryField='Country'
          />
        </Grid>
        <OperationTimes formik={formik} />
      </Form>
    </div>
  )
}
