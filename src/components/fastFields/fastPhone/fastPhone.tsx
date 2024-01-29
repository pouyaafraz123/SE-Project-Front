import { useTranslation } from 'react-i18next'
import { FormikProps } from 'formik'
import { ParseKeys } from 'i18next'
import { IPhoneNumber, Phone } from '@components/formControls/phone'
import { useCallback } from 'react'
import { Field } from '@/components/fastFields/field/field'
import { iconNameType, IconProps } from '@/components/atoms/icons'
import phoneCodes from '@/assets/phoneCodes.json'
import { IOption } from '@/interfaces'

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

  const { t } = useTranslation('form')
  const title = props.title || 'phone'
  const placeholder = props.placeholder || t(title)
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as IPhoneNumber

  const countries: IOption[] = phoneCodes?.data || []

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
        countries={countries?.map((c) => ({
          key: c.key,
          value: c.value,
          flag: `https://flagcdn.com/64x48/${c.flag}.png`
        }))}
        placeholder={placeholder}
        id={name.toString()}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        disabled={false}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        readOnly={props.readonly}
      />
    </Field>
  )
}
