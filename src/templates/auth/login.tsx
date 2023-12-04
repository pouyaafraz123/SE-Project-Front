import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import { FastInput, FastPassword } from '@components/fastFields'
import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import { UserTypes } from '@constants'
import classes from './styles.module.scss'
import { formConfig, IFormValues } from '@/templates/auth/loginSchema.ts'
import { ILoginProps } from '@/templates/auth/types.ts'

export function Login({ onLogin, isLoading }: ILoginProps) {
  const formik = useFormik<IFormValues>({
    ...formConfig,
    onSubmit: (values) => {
      onLogin({
        email: values.email,
        password: values.password,
        userType: UserTypes.CUSTOMER
      })
    }
  })

  return (
    <Form
      noCancel
      submitBtnTitle={'login'}
      mode={'create'}
      isSubmitting={isLoading}
      onSubmit={formik.handleSubmit}
    >
      <div className={clsx(classes.authContainer__login)}>
        <Typography variant={'h2'}>ورود به حساب کاربری</Typography>
        <Grid>
          <FastInput formik={formik} name={'email'} type={'email'} />
          <FastPassword formik={formik} name={'password'} />
        </Grid>
      </div>
    </Form>
  )
}
