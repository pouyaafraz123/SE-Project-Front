import { clsx } from 'clsx'
import { useTranslation } from 'react-i18next'
import { Grid } from '@components/atoms/Grid'
import { Button } from '@components/atoms/button'
import { useFormik } from 'formik'
import {
  FastComplete,
  FastDate,
  FastInfiniteSearch,
  FastInput,
  FastMultiSelect,
  FastPhone,
  FastRadio,
  FastSelect,
  FastTime
} from '@components/fastFields'
import { Form } from '@components/formControls/baseForm'
import classes from './styles.module.scss'
import { formConfig, IFormValues } from './schema'
import { Box } from '@/components/atoms/box'
import { Typography } from '@/components/atoms/typography'
import { Separator } from '@/components/atoms/separator'

interface IProps {
  mode: 'view' | 'edit' | 'create'
  initialValues?: IFormValues
}

export function TestForm(props: IProps) {
  const init = props.initialValues || formConfig.initialValues
  const formik = useFormik<IFormValues>({
    ...formConfig,
    initialValues: init
  })
  const getProps = { formik, readonly: props.mode == 'view' }
  const { t } = useTranslation('form')

  return (
    <Box px='l5' py='l5' radius='lg'>
      <Form
        mode={props.mode}
        onSubmit={formik.handleSubmit}
        noCancel
        submitBtnProps={{ className: classes.registerBtn, mode: 'submit' }}
      >
        <Typography
          variant='caption1'
          fontFamily='Morabba'
          fontSize='base'
          fontWeight='medium'
          className={clsx(classes.gridLabel)}
        >
          {`${t('personalInfo')}:`}
        </Typography>
        <Grid className={clsx(classes.box)}>
          <FastTime {...getProps} name='time' title='time' />
          <FastSelect
            {...getProps}
            title='country'
            name='doctorCountry'
            type='country'
          />
          <FastSelect
            {...getProps}
            title='state'
            name='doctorState'
            type='state'
            countryField='doctorCountry'
          />
          <FastSelect
            {...getProps}
            title='city'
            name='doctorCity'
            type='city'
            stateField='doctorState'
          />
          <FastSelect
            {...getProps}
            title='speciality'
            name='doctorSpeciality'
            type='gender'
          />
          <Grid.Column doubleWidth>
            <FastInfiniteSearch
              {...getProps}
              name='doctor'
              type='user'
              title='doctorName'
              countryField='doctorCountry'
              stateField='doctorState'
              cityField='doctorCity'
              specialityField='doctorSpeciality'
            />
          </Grid.Column>
          <FastSelect
            {...getProps}
            title='hfType'
            name='hfType'
            type='hfType'
          />
          <FastInfiniteSearch
            {...getProps}
            name='hf'
            type='hf'
            title='hfName'
            hfTypeField='hfType'
          />
        </Grid>
        <div style={{ marginBlock: '30px' }}>
          <Separator />
        </div>
        <Grid className={clsx(classes.box)}>
          <FastInput {...getProps} name='firstName' type='firstName' />
          <FastInput {...getProps} name='lastName' type='lastName' />
          <FastSelect {...getProps} name='gender' type='gender' />
          <FastSelect
            {...getProps}
            title='countryOfLicense'
            name='countryOfLicense'
            type='country'
          />
          <Grid.Column doubleWidth>
            <FastSelect
              {...getProps}
              title='hfCountry'
              name='hfCountry'
              type='country'
            />
          </Grid.Column>
          <FastSelect
            {...getProps}
            title='hfState'
            name='hfState'
            type='state'
            countryField='hfCountry'
          />
          <FastSelect
            {...getProps}
            title='hfCity'
            name='hfCity'
            type='city'
            stateField='hfState'
          />
          <FastComplete {...getProps} name='country' type='country' />
          <FastPhone {...getProps} name='phone' />
          <FastDate {...getProps} name='date' title='birthday' />
          <FastMultiSelect {...getProps} name='countryMulti' type='country' />
          <Grid.Button>
            <Button mode={'add'}></Button>
          </Grid.Button>
          {/* <RadioButton
            label='male'
            value='male'
            onChange={(value) => formik.setFieldValue('radioGender', value)}
            selectedValue={formik.values.radioGender}
          />
          <RadioButton
            label='female'
            value='female'
            onChange={(value) => formik.setFieldValue('radioGender', value)}
            selectedValue={formik.values.radioGender}
          /> */}
          <FastRadio
            {...getProps}
            name='radioGender'
            title='radioOption.male'
            value='male'
          />
          <FastRadio
            {...getProps}
            name='radioGender'
            title='radioOption.female'
            value='female'
          />
        </Grid>
        <Typography
          variant='caption1'
          fontFamily='Morabba'
          fontSize='base'
          fontWeight='medium'
          className={clsx(classes.gridLabel)}
        >
          {`${t('languageInfo')}:`}
        </Typography>
        <Grid className={clsx(classes.box)}></Grid>
        <Typography
          variant='caption1'
          fontFamily='Morabba'
          fontSize='base'
          fontWeight='medium'
          className={clsx(classes.gridLabel)}
        >
          {`${t('officeInfo')}:`}
        </Typography>
        <Grid className={clsx(classes.box)}></Grid>
        {Object.entries(formik.values)
          .sort()
          .map(([key, value], index) => (
            <Typography key={index}>{`${key}:  ${JSON.stringify(
              value
            )}`}</Typography>
          ))}
      </Form>
    </Box>
  )
}
