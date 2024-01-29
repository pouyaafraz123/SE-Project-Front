import { useTranslation } from 'react-i18next'
import { useCallback, useEffect, useMemo } from 'react'
import { Field } from '../field'
import { DependentAutocompleteProps } from './types'
import { dropdownIcons } from './icon'
import { isEmptyObject, useQueryParams } from './helper'
import { AutoComplete } from '@/components/formControls'
import { useOptions } from '@/api/dropdowns'
import { IOption } from '@/interfaces'

export function FastChainComplete<T>(props: DependentAutocompleteProps<T>) {
  const {
    formik,
    name,
    icon,
    title,
    placeholder,
    readOnly,
    dependencies,
    disabled,
    ...rest
  } = props
  const { type } = rest
  const { t } = useTranslation('form')
  const defaultIcon = dropdownIcons[type]
  const { values, setFieldValue, errors, touched, handleBlur } = formik

  const {
    params: queryParam,
    state,
    isChanged
  } = useQueryParams(values, { ...rest })

  useEffect(() => {
    if (isChanged) {
      console.log(`${name} cleared`)
      setFieldValue(name, { key: '', value: '' } as IOption)
    }
  }, [state, isChanged, setFieldValue, name])

  const _disabled = disabled || isEmptyObject(queryParam?.params)

  const {
    data,
    isFetching: isLoading,
    isError
  } = useOptions({
    variables: queryParam,
    enabled: !readOnly && !_disabled,
    staleTime: Infinity,
    cacheTime: Infinity
  })

  const options = useMemo(() => (data ? data?.data : []), [data])

  const _title = title || type

  const handleChange = useCallback((value: IOption) => {
    setFieldValue(name, value)
    if (dependencies) {
      for (let index = 0; index < dependencies.length; index++) {
        const dep_name = dependencies[index]
        setFieldValue(dep_name, { key: '', value: '' })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Field
      name={name}
      title={_title}
      formik={formik}
      icon={icon || defaultIcon}
    >
      <AutoComplete
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
        disabled={_disabled}
      />
    </Field>
  )
}
