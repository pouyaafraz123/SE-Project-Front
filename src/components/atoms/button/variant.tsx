import { TButtonVariantsData } from '@components/atoms/button'
import { Icon } from '@components/atoms/icons'

export const VButtonVariants: TButtonVariantsData = {
  default: {},
  main: { color: 'secondary' },
  secondary: { color: 'primary', variant: 'outlined' },
  'danger-main': { color: 'danger', variant: 'outlined' },
  'danger-secondary': { color: 'danger' },
  cancel: {
    color: 'danger',
    variant: 'outlined',
    label: 'Cancel',
    type: 'button'
  },
  submit: {
    color: 'secondary',
    label: 'Submit',
    type: 'submit'
  },
  action: { variant: 'transparent' },
  add: {
    variant: 'transparent',
    type: 'button',
    label: 'افزودن',
    icon: <Icon name={'add-square'} />
  },
  select: { variant: 'transparent', type: 'button', label: 'Select' }
}
