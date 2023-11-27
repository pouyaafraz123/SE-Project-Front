import { useFormik } from 'formik'
import { formConfig, IFormValues } from '@/templates/auth/signupSchema.ts'
import { Form } from '@components/formControls/baseForm'
import clsx from 'clsx'
import classes from '@/templates/auth/styles.module.scss'
import { Typography } from '@components/atoms/typography'
import { Grid } from '@components/atoms/Grid'
import { FastInput, FastPassword } from '@components/fastFields'

export function Signup() {
  const formik = useFormik<IFormValues>({ ...formConfig })

  return (
    <Form noCancel submitBtnTitle={'signup'} mode={'create'}>
      <div className={clsx(classes.authContainer__login)}>
        <Typography variant={'h2'}>ایجاد اکانت رایگان</Typography>
        <Grid>
          <FastInput formik={formik} name={'username'} type={'username'} />
          <FastPassword formik={formik} name={'password'} />
        </Grid>
      </div>
    </Form>
  )
}
