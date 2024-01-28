import { FormikProps } from 'formik'
import { Textarea } from '@components/formControls'
import { ParseKeys } from 'i18next'
import { useTranslation } from 'react-i18next'
import { iconNameType, IconProps } from '@components/atoms/icons'
import { Field } from '@/components/fastFields/field/field'
import { Extends } from '@/utils'

type types = Extends<ParseKeys<'form'>, 'address'>

const iconMap: { [key in types]: iconNameType | IconProps } = {
  address: 'map-point'
}

interface IProps<T> {
  name: keyof T & string
  title?: ParseKeys<'form'>
  type: types
  disabled?: boolean
  placeholder?: string
  formik: FormikProps<T>
  icon?: iconNameType | IconProps
  readonly?: boolean
  onChange?: (val: string) => void
}

export function FastTextarea<T>(props: IProps<T>) {
  const { t } = useTranslation('form')
  const title = props.title || props.type
  const placeholder = props.placeholder || t(title)
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as string

  const icon = props.icon || iconMap[props.type]
  return (
    <Field name={name} title={title} formik={props.formik} icon={icon}>
      <Textarea
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
        disabled={props.disabled}
      />
    </Field>
  )
}
