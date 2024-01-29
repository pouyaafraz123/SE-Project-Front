import { useTranslation } from 'react-i18next'
import { Field } from '../field'
import { FastPasswordProps } from './types'
import { Password } from '@/components/formControls/password'

export function FastPassword<T>(props: FastPasswordProps<T>) {
  const { placeholder, title, formik, name, icon, ...rest } = props
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const { t } = useTranslation('form')
  const value = values[name] as string
  const _title = t(title || 'password')
  const _placeholder = placeholder || _title
  return (
    <Field name={name} title={title || 'password'} formik={formik} icon={icon}>
      <Password
        id={name.toString()}
        value={value}
        onChange={(value) => setFieldValue(name.toString(), value)}
        onBlur={handleBlur}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        placeholder={_placeholder}
        {...rest}
      />
    </Field>
  )
}
