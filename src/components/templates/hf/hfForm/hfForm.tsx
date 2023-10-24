import { useFormik } from 'formik'
import {
  FastInput,
  FastSelect,
  FastComplete,
  FastPhone,
  FastDate
} from '@components/fastFields'
import { Grid } from '@components/atoms/Grid'
import { Form } from '@components/formControls/baseForm'
import { IFormValues, formConfig, onSubmit } from './schema'

type IProps =
  | {
      mode: 'create'
      initialValues?: IFormValues
      onSubmit: (data: IFormValues) => void
    }
  | {
      mode: 'view' | 'edit'
      initialValues: IFormValues
      onSubmit: (data: IFormValues) => void
    }

export function HFForm({ mode = 'create', ...props }: IProps) {
  const initialValues =
    mode == 'create' ? null : { initialValues: props.initialValues }

  const formik = useFormik<IFormValues>({
    ...formConfig,
    ...initialValues
  })
  const getProps = { formik, readonly: mode == 'view' }

  return (
    <div>
      <Form mode={mode} onSubmit={() => onSubmit(formik, props.onSubmit)}>
        <Grid>
          <FastSelect
            {...getProps}
            name='HFType'
            title='hfType'
            type='hfType'
          />
          <FastInput {...getProps} name='HFName' title='hfName' type='hfName' />
          <FastSelect
            {...getProps}
            name='Country'
            title='country'
            type='country'
          />
          <FastSelect
            {...getProps}
            name='State'
            title='state'
            type='state'
            countryField='Country'
          />
          <FastSelect
            {...getProps}
            name='City'
            title='city'
            type='city'
            stateField='State'
          />
          <FastInput
            {...getProps}
            name='PostalCode'
            title='postalCode'
            type='postalCode'
          />
          <FastPhone {...getProps} name='Phone' title='phone' />
          <FastPhone
            {...getProps}
            name='Fax'
            title='fax'
            icon='printer-minimalistic'
          />
          <FastInput
            {...getProps}
            name='WebSite'
            title='website'
            type='website'
          />
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
          <FastSelect // TODO missing dropdown multiselect
            {...getProps}
            name='HFDepartments'
            title='hfDepartments'
            type='gender'
          />
          <FastInput
            {...getProps}
            name='Address'
            title='address'
            type='address'
          />
        </Grid>
      </Form>
    </div>
  )
}
