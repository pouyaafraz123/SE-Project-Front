import { useTranslation } from 'react-i18next'
import { useOptions } from '@api/dropdowns'
import { AutoComplete } from '@components/formControls/autoComplete'
import { IProps } from './types'
import { queryParams, iconMap } from './helper'
import { Field } from '@/components/fastFields/field/field'
import { IOption } from '@/components/molecules/selectBox/types'

export function FastComplete<T>(props: IProps<T>) {
  const params = queryParams(props.formik, props)
  const { OptionsType, ...rest } = params
  const enabled =
    !props.readonly && Object.values(rest).every((val) => val !== '')

  const { data, isSuccess, isLoading } = useOptions({
    variables: params,
    enabled
  })

  const { t } = useTranslation('form')
  const title = props.title || props.type
  const placeholder = props.placeholder || t(title)
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as IOption

  const options = !isSuccess ? [] : data.data

  const icon = props.icon || iconMap[props.type]
  return (
    <Field name={name} title={title} formik={props.formik} icon={icon}>
      <AutoComplete
        placeholder={placeholder}
        id={name.toString()}
        onChange={(val) => setFieldValue(name.toString(), val)}
        onBlur={handleBlur}
        value={value}
        options={options}
        disabled={props.disabled || (isLoading && !props.readonly)}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        readOnly={props.readonly}
      />
    </Field>
  )
}
