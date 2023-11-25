import { FormikProps } from 'formik'
import { Input } from '@components/formControls'
import { ParseKeys } from 'i18next'
import { useTranslation } from 'react-i18next'
import { iconNameType, IconProps } from '@components/atoms/icons'
import { Field } from '@/components/fastFields/field/field'
import { Extends } from '@/utils'

type types = Extends<
  ParseKeys<'form'>,
  | 'firstName'
  | 'lastName'
  | 'hfName'
  | 'postalCode'
  | 'website'
  | 'email'
  | 'address'
  | 'licenseNumber'
  | 'nationalCode'
  | 'patientFileNumber'
  | 'staffId'
  | 'search'
  | 'duaration'
  | 'price'
  | 'percentage'
  | 'illnessName'
  | 'reason'
>

const iconMap: { [key in types]: iconNameType | IconProps } = {
  firstName: 'user-rounded',
  lastName: 'user-rounded',
  hfName: 'hospital',
  postalCode: 'mailbox',
  website: 'global',
  email: 'letter',
  licenseNumber: 'medal-ribbon-star',
  address: { name: 'routing', type: 'bold' },
  nationalCode: 'card',
  patientFileNumber: 'clipboard',
  staffId: 'user-rounded',
  search: 'magnifer',
  duaration: 'add-square',
  percentage: 'add-square',
  price: 'dollar-minimalistic',
  illnessName: 'pills',
  reason: 'dropper-minimalistic'
}

interface IProps<T> {
  name: keyof T
  title?: ParseKeys<'form'>
  type: types
  disabled?: boolean
  placeholder?: string
  dependents?: (keyof T)[]
  dependencies?: (keyof T)[]
  formik: FormikProps<T>
  icon?: iconNameType | IconProps
  readonly?: boolean
  onChange?: (val: string) => void
}

export function FastInput<T>(props: IProps<T>) {
  const { t } = useTranslation('form')
  const title = props.title || props.type
  const placeholder = props.placeholder || t(title)
  const name = props.name
  const { values, setFieldValue, errors, touched, handleBlur } = props.formik
  const value = values[name] as string

  const icon = props.icon || iconMap[props.type]
  return (
    <Field name={name} title={title} formik={props.formik} icon={icon}>
      <Input
        placeholder={placeholder}
        id={name.toString()}
        onChange={(val) => {
          props?.onChange?.(val)
          setFieldValue(name.toString(), val)
        }}
        onBlur={handleBlur}
        value={value}
        validation={touched[name] && errors[name] ? 'error' : undefined}
        readOnly={props.readonly}
      />
    </Field>
  )
}
