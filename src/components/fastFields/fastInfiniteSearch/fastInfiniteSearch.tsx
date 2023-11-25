import { useTranslation } from 'react-i18next'
import {
  IHFSearchEndpoint,
  IUserSearchEndpoint,
  useInfinite
} from '@api/infinite'
import { useState } from 'react'
import { IFastInfiniteProps } from './types'
import { queryParams } from './helper'
import { Field } from '@/components/fastFields/field/field'
import { InfiniteSearch } from '@/components/formControls/infiniteSearch'
import { IOption } from '@/interfaces'

export function FastInfiniteSearch<T>(props: IFastInfiniteProps<T>) {
  const params = queryParams(props.formik, props)
  const enabled = !props.readonly

  const { t } = useTranslation('form')
  const title = props.title
  const placeholder = props.placeholder || t(title)
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as IOption

  const [filter, setFilter] = useState('')

  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfinite({
    enabled,
    variables: { ...params, filter }
  })

  const list = data?.pages.map((page) => page.list).flat() || []

  const icon = props.icon

  function onChange(value: IOption) {
    setFieldValue(name.toString(), value)
    props.onChangeFullData?.(list.find((item) => item.id == value.key)!)
  }

  return (
    <Field name={name} title={title} formik={props.formik} icon={icon}>
      {props.type == 'user' && (
        <InfiniteSearch
          placeholder={placeholder}
          id={name.toString()}
          onChange={onChange}
          onBlur={handleBlur}
          value={value}
          validation={touched[name] && errors[name] ? 'error' : undefined}
          readOnly={props.readonly}
          type='user'
          data={list as IUserSearchEndpoint[]}
          searchInputChangeHandler={(value) => setFilter(value)}
          onGetNext={() => fetchNextPage()}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
      {props.type == 'hf' && (
        <InfiniteSearch
          placeholder={placeholder}
          id={name.toString()}
          onChange={onChange}
          onBlur={handleBlur}
          value={value}
          validation={touched[name] && errors[name] ? 'error' : undefined}
          readOnly={props.readonly}
          type='hf'
          data={list as IHFSearchEndpoint[]}
          searchInputChangeHandler={(value) => setFilter(value)}
          onGetNext={() => fetchNextPage()}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </Field>
  )
}
