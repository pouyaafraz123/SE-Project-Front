import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import {
  StaffFormInitialValues,
  StaffFormSchema,
  StaffFormValidationSchema
} from './staffFormSchema'
import { FormLayout } from '@/components/layout/formLayout'
import { Grid } from '@/components/atoms/Grid'
import {
  FastComplete,
  FastDate,
  FastInfiniteSearch,
  FastInput,
  FastPhone,
  FastSelect
} from '@/components/fastFields'
import { LanguageListBox } from '@/components/listBoxes'
import { notify } from '@/components/atoms/notify'

export function StaffForm() {
  const { t } = useTranslation('form')
  const formik = useFormik<StaffFormSchema>({
    initialValues: StaffFormInitialValues,
    validationSchema: StaffFormValidationSchema,
    validateOnChange: true,
    onSubmit(values, formikHelpers) {
      if (values.languageLists.length === 0) {
        notify.error({
          title: t('errors.default'),
          text: t('errors.emptyLanguageList')
        })
      } else {
        alert(values)
      }
    }
  })

  return (
    <FormLayout formik={formik}>
      <Grid subtitle='infoSubtitle.personal'>
        <FastInput formik={formik} name='firstName' type='firstName' />
        <FastInput formik={formik} name='lastName' type='lastName' />
        <FastSelect formik={formik} name='gender' type='gender' />
        <FastDate formik={formik} name='birthday' title='birthday' />
        <FastInput formik={formik} name='staffId' type='staffId' />
        <FastComplete
          formik={formik}
          name='hfCountry'
          type='country'
          title='hfCountry'
        />
        <FastComplete
          formik={formik}
          name='hfState'
          type='state'
          title='hfState'
          countryField='hfCountry'
        />
        <FastComplete
          formik={formik}
          name='hfCity'
          type='city'
          title='hfCity'
          stateField='hfState'
        />
        <FastSelect formik={formik} name='hfType' type='hfType' />
        <FastInfiniteSearch
          formik={formik}
          name='hfType'
          type='hf'
          title='hfName'
          hfTypeField='hfType'
        />
        <FastComplete
          formik={formik}
          name='department'
          type='hfDepartment'
          hfNameField='hfName'
        />
        <FastInput formik={formik} name='email' type='email' />
        <FastPhone formik={formik} name='phoneNumber' />
        <FastComplete
          formik={formik}
          name='livingCountry'
          type='country'
          title='countryOfResidence'
        />
        <FastComplete
          formik={formik}
          name='livingState'
          type='state'
          title='stateOfResidence'
          countryField='livingCountry'
        />
        <FastComplete
          formik={formik}
          name='livingCity'
          type='city'
          title='cityOfResidence'
          stateField='livingState'
        />
        <FastInput formik={formik} name='postalCode' type='postalCode' />
        <Grid.Column doubleWidth>
          <FastInput
            formik={formik}
            name='address'
            type='address'
            title='residentialAddress'
          />
        </Grid.Column>
      </Grid>
      <LanguageListBox formik={formik} />
    </FormLayout>
  )
}
