import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import { Field } from '../field'
import { FastSelectProps } from './types'
import { dropdownIcons } from './icon'
import { Select } from '@/components/formControls'
import { QueryVariablesType, useOptions } from '@/api/dropdowns'
import { IOption } from '@/interfaces'

export function FastSelect<T>(props: FastSelectProps<T>) {
  const {
    formik,
    name,
    type,
    icon,
    title,
    placeholder,
    readOnly,
    dependencies,
    disabled
  } = props
  const { t } = useTranslation('form')
  const defaultIcon = dropdownIcons[type]
  const queryVariables: QueryVariablesType = {
    optionType: type,
    params: undefined
  }
  const { data, isLoading, isError } = useOptions({
    variables: queryVariables,
    enabled: !readOnly,
    staleTime: Infinity,
    cacheTime: Infinity
  })
  const options = data ? data?.data : []
  const _title = title || type
  const { values, setFieldValue, errors, touched, handleBlur } = formik

  const handleChange = useCallback(
    (value: IOption) => {
      setFieldValue(name, value)
      if (dependencies) {
        for (let index = 0; index < dependencies.length; index++) {
          const dep_name = dependencies[index]
          setFieldValue(dep_name, { key: '', value: '' })
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <Field
      name={name}
      title={_title}
      formik={props.formik}
      icon={icon || defaultIcon}
    >
      <Select
        isLoading={isLoading}
        isError={isError}
        placeholder={placeholder || t(_title)}
        id={name.toString()}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name] as IOption}
        options={options}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        readOnly={readOnly}
        disabled={disabled}
      />
    </Field>
  )
}
