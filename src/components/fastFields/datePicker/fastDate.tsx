import { ParseKeys } from 'i18next'
import { FormikProps } from 'formik'
import { DatePicker } from '@components/formControls/datePicker'
import { iconNameType } from '@/components/atoms/icons'
import { Field } from '@/components/fastFields/field/field'

interface IProps<T> {
  name: keyof T
  title: ParseKeys<'form'> // TODO generic namespace
  disabled?: boolean
  placeholder?: string
  formik: FormikProps<T>
  icon?: iconNameType
  readonly?: boolean
}

export function FastDate<T>(props: IProps<T>) {
  const icon = props.icon || 'calendar'
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as Date
  const placeholder = props.placeholder

  return (
    <Field
      name={props.name}
      title={props.title}
      formik={props.formik}
      icon={icon}
      datepicker
    >
      <DatePicker
        placeholder={placeholder}
        id={name.toString()}
        onChange={(val) => setFieldValue(name.toString(), val)}
        onBlur={handleBlur}
        date={value}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        readOnly={props.readonly}
      />
    </Field>
  )
}
