import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import {
  PatientFormInitialValues,
  PatientFormSchema,
  PatientFormValidationSchema
} from './patientFormSchema'
import { Grid } from '@/components/atoms/Grid'
import {
  FastComplete,
  FastDate,
  FastInfiniteSearch,
  FastInput,
  FastPhone,
  FastSelect
} from '@/components/fastFields'
import { notify } from '@/components/atoms/notify'
import { Form } from '@/components/formControls/baseForm'
import { IFormsTemplateProps } from '@/interfaces'
import { path } from '@/routes'

export function PatientForm(props: IFormsTemplateProps<PatientFormSchema>) {
  const { mode, onCancel, onSubmit, initialValues } = props
  const { t } = useTranslation('form')
  const formik = useFormik<PatientFormSchema>({
    initialValues: initialValues || PatientFormInitialValues,
    validationSchema: PatientFormValidationSchema,
    validateOnChange: true,
    onSubmit(values, formikHelpers) {
      onSubmit(values)
    }
  })

  const getProps = { formik, readonly: mode == 'view' }

  return (
    <Form
      mode={mode}
      onCancel={onCancel}
      onSubmit={formik.handleSubmit}
      editLink={path.users.patientEdit.link(
        props.mode !== 'create' ? props.id : ''
      )}
    >
      <Grid subtitle='infoSubtitle.personal'>
        <FastInput {...getProps} name='firstName' type='firstName' />
        <FastInput {...getProps} name='lastName' type='lastName' />
        <FastSelect {...getProps} name='gender' type='gender' />
        <FastDate {...getProps} name='birthday' title='birthday' />
        <FastInput {...getProps} name='nationalCode' type='nationalCode' />
        {/* <FastComplete
          {...getProps}
          name='hfCountry'
          type='country'
          title='hfCountry'
        />
        <FastComplete
          {...getProps}
          name='hfState'
          type='state'
          title='hfState'
          countryField='hfCountry'
        />
        <FastComplete
          {...getProps}
          name='hfCity'
          type='city'
          title='hfCity'
          stateField='hfState'
        />
        <FastSelect {...getProps} name='hfType' type='hfType' />
        <FastInfiniteSearch
          {...getProps}
          name='hfName'
          type='hf'
          title='hfName'
          hfTypeField='hfType'
        /> */}
        {/* <FastInput
          {...getProps}
          name='patientFileNumber'
          type='patientFileNumber'
        /> */}
        <FastInput {...getProps} name='email' type='email' />
        <FastPhone {...getProps} name='phoneNumber' />
        <FastPhone {...getProps} name='mobileNumber' title='mobile' />
      </Grid>
      <Grid subtitle='infoSubtitle.home' border='top-gradient'>
        <FastComplete
          {...getProps}
          name='livingCountry'
          type='country'
          title='countryOfResidence'
        />
        <FastComplete
          {...getProps}
          name='livingState'
          type='state'
          title='stateOfResidence'
          countryField='livingCountry'
        />
        <FastComplete
          {...getProps}
          name='livingCity'
          type='city'
          title='cityOfResidence'
          stateField='livingState'
        />
        <FastInput {...getProps} name='postalCode' type='postalCode' />
        <Grid.Column doubleWidth>
          <FastInput
            {...getProps}
            name='address'
            type='address'
            title='residentialAddress'
          />
        </Grid.Column>
      </Grid>
    </Form>
  )
}
