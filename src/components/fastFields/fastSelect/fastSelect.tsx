import { Select } from '@components/formControls/select'
import { useTranslation } from 'react-i18next'
import { useOptions } from '@api/dropdowns'
import { IProps } from './types'
import { queryParams, iconMap } from './helper'
import { Field } from '@/components/fastFields/field/field'
import { IOption } from '@/components/molecules/selectBox/types'

export function FastSelect<T>(props: IProps<T>) {
  const params = queryParams(props.formik, props)
  const { OptionsType, ...rest } = params
  const enabled =
    props.type !== 'gender' &&
    !props.readonly &&
    Object.values(rest).every((val) => val !== '')

  const { data, isSuccess, isLoading } = useOptions({
    variables: params,
    enabled
  })
  const queryOptions = !isSuccess ? [] : data.data
  const options =
    props.type !== 'gender'
      ? queryOptions
      : [
          { key: 1, value: 'مرد' },
          { key: 2, value: 'زن' }
        ]
  const disabled =
    props.disabled || (props.type !== 'gender' && isLoading && !props.readonly)
  const { t } = useTranslation('form')
  const title = props.title || props.type
  const placeholder = props.placeholder || t(title)
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as IOption

  const icon = props.icon || iconMap[props.type]
  return (
    <Field name={name} title={title} formik={props.formik} icon={icon}>
      <Select
        placeholder={placeholder}
        id={name.toString()}
        onChange={(val) => setFieldValue(name.toString(), val)}
        onBlur={handleBlur}
        value={value}
        options={options}
        disabled={disabled}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        readOnly={props.readonly}
      />
    </Field>
  )
}
