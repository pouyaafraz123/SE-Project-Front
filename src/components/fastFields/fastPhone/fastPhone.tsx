import { useTranslation } from 'react-i18next'
import { usePhoneCodes } from '@api/dropdowns'
import { FormikProps } from 'formik'
import { ParseKeys } from 'i18next'
import { IPhoneNumber, Phone } from '@components/formControls/phone'
import { useCallback } from 'react'
import { Field } from '@/components/fastFields/field/field'
import { iconNameType, IconProps } from '@/components/atoms/icons'

export type IProps<T> = {
  name: keyof T & string
  title?: ParseKeys<'form'>
  disabled?: boolean
  placeholder?: string
  formik: FormikProps<T>
  icon?: iconNameType | IconProps
  readonly?: boolean
}

export function FastPhone<T>(props: IProps<T>) {
  const enabled = !props.readonly
  const { data, isSuccess, isLoading } = usePhoneCodes({
    enabled
  })

  const { t } = useTranslation('form')
  const title = props.title || 'phone'
  const placeholder = props.placeholder || t(title)
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as IPhoneNumber

  const countries = !isSuccess
    ? [
        {
          key: '+98',
          flag: 'https://cdn.kcak11.com/CountryFlags/countries/ir.svg',
          value: 'ایران'
        }
      ]
    : data.data

  const handleChange = useCallback(
    (val: IPhoneNumber) => {
      setFieldValue(name.toString(), val)
    },
    [name, setFieldValue]
  )

  return (
    <Field
      name={name}
      title={title}
      formik={props.formik}
      icon={props.icon || 'phone-calling-rounded'}
    >
      <Phone
        countries={countries}
        placeholder={placeholder}
        id={name.toString()}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        disabled={props.disabled || (isLoading && !props.readonly)}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        readOnly={props.readonly}
      />
    </Field>
  )
}
