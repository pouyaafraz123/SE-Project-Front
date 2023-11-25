import { PropsWithChildren } from 'react'
import { formLayoutProps } from '.'
import { FormButtons } from '@/components/molecules/formButtons'

export function FormLayout<T>(props: PropsWithChildren<formLayoutProps<T>>) {
  const { children, formik } = props
  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      {children}
      <FormButtons buttonGroupClassName='mt-l6' fullWidth />
    </form>
  )
}
