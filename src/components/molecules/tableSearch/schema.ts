import { FormikConfig, FormikHelpers } from 'formik'

export interface ISearchFormValues {
  search: string
}

export const SearchFromInitialValues: ISearchFormValues = {
  search: ''
}

export function SearchFormConfig(
  onSubmit?: (
    values: ISearchFormValues,
    formikHelpers: FormikHelpers<ISearchFormValues>
  ) => void | Promise<any>
): FormikConfig<ISearchFormValues> {
  return {
    initialValues: SearchFromInitialValues,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: onSubmit || (() => {})
  }
}
