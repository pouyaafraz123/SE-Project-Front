import { clsx } from 'clsx'
import { useTranslation } from 'react-i18next'
import { Grid } from '@components/atoms/Grid'
import { Button } from '@components/atoms/button'
import { useFormik } from 'formik'
import {
  FastInput,
  FastSelect,
  FastComplete,
  FastPhone,
  FastDate
} from '@components/fastFields'
import { Form } from '@components/formControls/baseForm'
import classes from './styles.module.scss'
import { IFormValues, formConfig } from './schema'
import { Box } from '@/components/atoms/box'
import { Typography } from '@/components/atoms/typography'

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
          <Grid.Button>
            <Button mode={'add'}></Button>
          </Grid.Button>
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
      </Form>
    </Box>
  )
}
