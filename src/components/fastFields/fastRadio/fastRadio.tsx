import { ParseKeys } from 'i18next'
import { FormikProps } from 'formik'
import { RadioButton } from '@components/formControls/radioButton'
import { useTranslation } from 'react-i18next'

interface IProps<T, U extends keyof T> {
  name: U
  title: ParseKeys<'form'>
  value: FormikProps<T>['values'][U]
  disabled?: boolean
  formik: FormikProps<T>
  readonly?: boolean
  onChange?: (value: FormikProps<T>['values'][U]) => void
}

export function FastRadio<T, U extends keyof T>(props: IProps<T, U>) {
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const selectedValue = values[name] as string
  const value = props.value as string
  const { t } = useTranslation('form')
  const title = props.title
  return (
    <RadioButton
      label={t(title)}
      value={value}
      onChange={(value) => {
        setFieldValue(name.toString(), props.value)
        props?.onChange?.(props.value)
      }}
      selectedValue={selectedValue}
    />
  )
}
