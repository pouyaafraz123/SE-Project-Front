import { Extends } from '@utils'
import { ParseKeys } from 'i18next'
import { iconNameType, IconProps } from '@components/atoms/icons'
import { FormikProps } from 'formik'
import { useTranslation } from 'react-i18next'
import { Field } from '@components/fastFields/field/field.tsx'
import { Input } from '@components/formControls'

interface IProps<T> {
  name: keyof T
  disabled?: boolean
  placeholder?: string
  dependents?: (keyof T)[]
  dependencies?: (keyof T)[]
  formik: FormikProps<T>
  readonly?: boolean
  onChange?: (val: string) => void
}

export function FastPassword<T>(props: IProps<T>) {
  const { t } = useTranslation('form')
  const title = 'password'
  const placeholder = props.placeholder || t(title)
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as string

  return (
    <Field name={name} title={title} formik={props.formik} icon={'eye'}>
      <Input
        placeholder={placeholder}
        id={name.toString()}
        onChange={(val) => {
          props?.onChange?.(val)
          setFieldValue(name.toString(), val)
        }}
        onBlur={handleBlur}
        value={value}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        readOnly={props.readonly}
        type={'password'}
      />
    </Field>
  )
}
