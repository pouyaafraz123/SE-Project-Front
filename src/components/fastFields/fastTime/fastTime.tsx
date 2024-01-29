import { ParseKeys } from 'i18next'
import { FormikProps } from 'formik'
import { TimeInput } from '@components/formControls/timeInput'
import { iconNameType } from '@/components/atoms/icons'
import { Field } from '@/components/fastFields/field/field'

interface IProps<T> {
  name: keyof T & string
  title: ParseKeys<'form'> // TODO generic namespace
  disabled?: boolean
  placeholder?: string
  formik: FormikProps<T>
  icon?: iconNameType
  readonly?: boolean
}

export function FastTime<T>(props: IProps<T>) {
  // TODO set clock icon
  const icon = props.icon || 'calendar'
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as string
  const placeholder = props.placeholder

  return (
    <Field
      name={props.name}
      title={props.title}
      formik={props.formik}
      icon={icon}
    >
      <TimeInput
        id={name.toString()}
        value={value}
        onChange={(value) => setFieldValue(name.toString(), value)}
        onBlur={handleBlur}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        readOnly={props.readonly}
      />
    </Field>
  )
}
