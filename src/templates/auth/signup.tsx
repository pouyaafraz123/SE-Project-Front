import { useFormik } from 'formik'
import { Form } from '@components/formControls/baseForm'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'
import { Grid } from '@components/atoms/Grid'
import { FastInput, FastPassword } from '@components/fastFields'
import { getUserTypesValue, UserTypes } from '@constants'
import DropdownItem from '@components/molecules/dropdownItem'
import { DropdownMenu } from '@components/molecules/dropdownMenu'
import { Dropdown } from '@components/molecules/dropdown'
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
        userType: formik.values.role
      })
    }
  })

  return (
    <Form
      noCancel
      submitBtnTitle={'signup'}
      mode={'create'}
      onSubmit={formik.handleSubmit}
    >
      <div className={clsx(classes.authContainer__login)}>
        <Typography variant={'h2'}>ایجاد اکانت رایگان</Typography>
        <Grid>
          <FastInput formik={formik} name={'email'} type={'email'} />
          <FastPassword formik={formik} name={'password'} />
          <Dropdown anchor={'bottom'}>
            <div id={'mmm'} className={classes.menuContainer}>
              <Typography color={'primary-dark'}>
                {getUserTypesValue(formik.values.role)}
              </Typography>
            </div>
            <DropdownMenu
              className={classes.menuDropdown}
              anchor={'bottom-start'}
              toggleId={'mmm'}
            >
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
