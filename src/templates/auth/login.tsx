import { Typography } from '@components/atoms/typography'
import clsx from 'clsx'
import { FastInput, FastPassword } from '@components/fastFields'
import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import { Grid } from '@components/atoms/Grid'
import { getUserTypesValue, UserTypes } from '@constants'
import { useRef } from 'react'
import { DropdownMenu } from '@components/molecules/dropdownMenu'
import { Dropdown } from '@components/molecules/dropdown'
import DropdownItem from '@components/molecules/dropdownItem'
import classes from './styles.module.scss'
import { ILoginProps } from '@/templates/auth/types.ts'
import { formConfig, IFormValues } from '@/templates/auth/loginSchema.ts'

export function Login({ onLogin, isLoading }: ILoginProps) {
  const formik = useFormik<IFormValues>({
    ...formConfig,
    onSubmit: (values) => {
      onLogin({
        email: values.email,
        password: values.password,
        userType: formik.values.role
      })
    }
  })

  const ref = useRef<HTMLDivElement>(null)

  return (
    <Form
      noCancel
      submitBtnTitle={'login'}
      mode={'create'}
      onSubmit={formik.handleSubmit}
    >
      <div className={clsx(classes.authContainer__login)}>
        <Typography variant={'h2'}>ورود به حساب کاربری</Typography>
        <Grid>
          <FastInput formik={formik} name={'email'} type={'email'} />
          <FastPassword formik={formik} name={'password'} />
          <Dropdown anchor={'bottom'}>
            <div id={'mmm'}>
              <Typography color={'primary-dark'}>
                {getUserTypesValue(formik.values.role)}
              </Typography>
            </div>
            <DropdownMenu anchor={'bottom-start'} toggleId={'mmm'}>
              <DropdownItem
                onClick={() => formik.setFieldValue('role', UserTypes.CUSTOMER)}
              >
                {getUserTypesValue(UserTypes.CUSTOMER)}
              </DropdownItem>
              <DropdownItem
                onClick={() => formik.setFieldValue('role', UserTypes.STAFF)}
              >
                {getUserTypesValue(UserTypes.STAFF)}
              </DropdownItem>
              <DropdownItem
                onClick={() => formik.setFieldValue('role', UserTypes.MANAGER)}
              >
                {getUserTypesValue(UserTypes.MANAGER)}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Grid>
      </div>
    </Form>
  )
}
