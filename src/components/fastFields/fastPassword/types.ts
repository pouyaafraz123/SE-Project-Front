import { FieldProps } from '../field'
import { PasswordProps } from '@/components/formControls/password'

export type FastPasswordProps<T> = Pick<
  PasswordProps,
  'placeholder' | 'disabled' | 'readOnly'
> &
  Pick<FieldProps<T>, 'formik' | 'name' | 'icon'> &
  Partial<Pick<FieldProps<T>, 'title'>>
