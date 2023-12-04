import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'
import { Grid } from '@components/atoms/Grid'
import { FastInput, FastPassword } from '@components/fastFields'
import { UserTypes } from '@constants'
import { ISignupProps } from '@/templates/auth/types.ts'
import classes from '@/templates/auth/styles.module.scss'
import { formConfig, IFormValues } from '@/templates/auth/signupSchema.ts'

export function Signup({ onSignup, isLoading }: ISignupProps) {
  const formik = useFormik<IFormValues>({
    ...formConfig,
    onSubmit: (values) => {
      onSignup({
        email: values.email,
        password: values.password,
        userType: UserTypes.CUSTOMER
      })
    }
  })

  return (
    <Form
      noCancel
      submitBtnTitle={'signup'}
      mode={'create'}
      isSubmitting={isLoading}
      onSubmit={formik.handleSubmit}
    >
      <div className={clsx(classes.authContainer__login)}>
        <Typography variant={'h2'}>ایجاد اکانت رایگان</Typography>
        <Grid>
          <FastInput formik={formik} name={'email'} type={'email'} />
          <FastPassword formik={formik} name={'password'} />
        </Grid>
      </div>
    </Form>
  )
}
