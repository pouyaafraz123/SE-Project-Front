import { useCallback } from 'react'
import { FormikProps } from 'formik'
import { Input } from '@components/formControls'
import { ParseKeys } from 'i18next'
import { useTranslation } from 'react-i18next'
import { iconNameType, IconProps } from '@components/atoms/icons'
import { Field } from '@/components/fastFields/field/field'
import { Extends } from '@/utils'

type types = Extends<
  ParseKeys<'form'>,
  | 'first_name'
  | 'email'
  | 'search'
  | 'address'
  | 'last_name'
  | 'category_name'
  | 'brand_name'
  | 'product_name'
  | 'price'
  | 'discounted_price'
  | 'quantity'
  | 'feature'
  | 'value'
>

const iconMap: { [key in types]: iconNameType | IconProps } = {
  first_name: 'user-rounded',
  email: 'mailbox',
  search: 'magnifer',
  address: 'map-point',
  last_name: 'user-rounded',
  category_name: 'notes',
  brand_name: 'notes',
  product_name: 'notes',
  price: 'dollar-minimalistic',
  discounted_price: 'dollar-minimalistic',
  quantity: 'add-square',
  feature: 'clipboard-text',
  value: 'database'
}

interface IProps<T> {
  name: keyof T & string
  title?: ParseKeys<'form'>
  type: types
  disabled?: boolean
  placeholder?: string
  dependents?: (keyof T)[]
  dependencies?: (keyof T)[]
  formik: FormikProps<T>
  icon?: iconNameType | IconProps
  readonly?: boolean
  onChange?: (val: string) => void
  inputType?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'search'
}

export function FastInput<T>(props: IProps<T>) {
  const { onChange } = props
  const { t } = useTranslation('form')
  const title = props.title || props.type
  const placeholder = props.placeholder || t(title)
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as string

  const icon = props.icon || iconMap[props.type]
  const changeHandler = useCallback(
    (val: string) => {
      onChange?.(val)
      setFieldValue(name.toString(), val)
    },
    [onChange, setFieldValue, name]
  )

  return (
    <Field name={name} title={title} formik={props.formik} icon={icon}>
      <Input
        placeholder={placeholder}
        id={name.toString()}
        onChange={changeHandler}
        onBlur={handleBlur}
        value={value}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        readOnly={props.readonly}
        inputType={props?.inputType}
      />
    </Field>
  )
}
