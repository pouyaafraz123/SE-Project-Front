import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import {
  DoctorFormInitialValues,
  DoctorFormSchema,
  DoctorFormValidationSchema
} from './doctorFormSchema'
import { Grid } from '@/components/atoms/Grid'
import {
  FastComplete,
  FastDate,
  FastInput,
  FastPhone,
  FastSelect,
  FastInfiniteSearch
} from '@/components/fastFields'
import { notify } from '@/components/atoms/notify'
import { Form } from '@/components/formControls/baseForm'
import { IFormsTemplateProps } from '@/interfaces'
import { path } from '@/routes'

export function DoctorForm(props: IFormsTemplateProps<DoctorFormSchema>) {
  const { mode, onCancel, onSubmit, initialValues } = props
  const { t } = useTranslation('form')
  const formik = useFormik<DoctorFormSchema>({
    initialValues: initialValues || DoctorFormInitialValues,
    validationSchema: DoctorFormValidationSchema,
    validateOnChange: true,
    onSubmit(values, formikHelpers) {
      onSubmit(values)
    }
  })

  const getProps = { formik, readonly: props.mode == 'view' }

  return (
    <Form
      mode={mode}
      onCancel={onCancel}
      onSubmit={formik.handleSubmit}
      editLink={path.users.doctorEdit.link(
        props.mode !== 'create' ? props.id : ''
      )}
    >
      <Grid subtitle='infoSubtitle.personal'>
        <FastInput {...getProps} name='firstName' type='firstName' />
        <FastInput {...getProps} name='lastName' type='lastName' />
        <FastSelect {...getProps} name='gender' type='gender' />
        <FastDate {...getProps} name='birthday' title='birthday' />
        <FastInput {...getProps} name='nationalId' type='nationalCode' />
        <FastSelect {...getProps} name='speciality' type='speciality' />
        <FastSelect
          {...getProps}
          name='subSpeciality'
          type='subSpeciality'
          specialityField='speciality'
        />
        <FastSelect {...getProps} name='degree' type='doctorDegree' />
        <FastComplete
          {...getProps}
          name='licenseCountry'
          type='country'
          title='countryOfLicense'
        />
        <FastInput {...getProps} name='licenseNumber' type='licenseNumber' />
        <FastComplete
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
          title='hfName'
          type='hf'
          countryField='hfCountry'
          stateField='hfState'
          cityField='hfCity'
          hfTypeField='hfType'
        />
        {/* <FastComplete{...getProps} name='hfName' type='' /> */}
        <FastInput {...getProps} name='email' type='email' />
        <FastInput {...getProps} name='website' type='website' />
        <FastPhone {...getProps} name='phoneNumber' />
        <FastPhone {...getProps} name='mobileNumber' title='mobile' />
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
      <Grid subtitle='infoSubtitle.office' border='top-gradient'>
        <FastComplete {...getProps} name='officeCountry' type='country' />
        <FastComplete
          {...getProps}
          name='officeState'
          type='state'
          countryField='officeCountry'
        />
        <FastComplete
          {...getProps}
          name='officeCity'
          type='city'
          stateField='officeState'
        />
        <FastPhone {...getProps} name='officePhoneNumber' />
        <Grid.Column doubleWidth>
          <FastInput {...getProps} name='officeAddress' type='address' />
        </Grid.Column>
      </Grid>
    </Form>
  )
}
