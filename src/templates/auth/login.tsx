import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import { FastInput, FastPassword } from '@components/fastFields'
import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import classes from './styles.module.scss'
import { formConfig, IFormValues } from '@/templates/auth/loginSchema.ts'

export function Login() {
  const formik = useFormik<IFormValues>({ ...formConfig })

  return (
    <Form noCancel submitBtnTitle={'login'} mode={'create'}>
      <div className={clsx(classes.authContainer__login)}>
        <Typography variant={'h2'}>ورود به حساب کاربری</Typography>
        <Grid>
          <FastInput formik={formik} name={'username'} type={'username'} />
          <FastPassword formik={formik} name={'password'} />
        </Grid>
      </div>
    </Form>
  )
}
