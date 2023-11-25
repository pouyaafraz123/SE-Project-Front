import { useMemo } from 'react'
import { ITableSearchProps } from '@components/molecules/tableSearch/types.ts'
import { FastInput } from '@components/fastFields'
import { useFormik } from 'formik'
import { SearchFormConfig } from '@components/molecules/tableSearch/schema.ts'
import classes from './styles.module.scss'

export function TableSearch({ value, onChange }: ITableSearchProps) {
  const formConfig = useMemo(() => {
    return SearchFormConfig()
  }, [])

  const formik = useFormik({
    ...formConfig,
    initialValues: { search: value || formConfig?.initialValues?.search }
  })

  return (
    <form className={classes.search}>
      <FastInput
        name={'search'}
        type={'search'}
        formik={formik}
        onChange={(value) => {
          onChange(value)
        }}
      />
    </form>
  )
}
