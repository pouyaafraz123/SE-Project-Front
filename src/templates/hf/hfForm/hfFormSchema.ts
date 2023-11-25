import { FormikConfig, FormikProps } from 'formik'
import { IPhoneNumber } from '@components/formControls/phone'
import { z, toFormikSchema, ShapeOf } from '@utils'
import { notify } from '@components/atoms/notify'
import { IOption } from '@/interfaces'
import { IOperationTimesLists } from '@/components/listBoxes/OperationTimes/types'

export interface IFormValues {
  HFType: IOption
  HFName: string
  Country: IOption
  State: IOption
  City: IOption
  PostalCode: string
  Phone: IPhoneNumber
  Fax: IPhoneNumber
  WebSite: string
  Email: string
  ContactFirstName: string
  ContactLastName: string
  HFDepartments?: IOption[]
  Address: string
  timezone: IOption
  day: IOption
  startTime: string
  endTime: string
  operationTimesLists: IOperationTimesLists[]
}

const schema = z.object<ShapeOf<IFormValues>>({
  HFType: z.dropdown(),
  HFName: z.string(),
  Country: z.dropdown(),
  State: z.dropdown(),
  City: z.dropdown(),
  PostalCode: z.string(),
  Phone: z.phone(),
  // Fax: z.object({}),
  WebSite: z.string().optional(),
  Email: z.string(),
  ContactFirstName: z.string(),
  ContactLastName: z.string(),
  // HFDepartments: z.object({}),
  Address: z.string(),
  timezone: z.dropdown()
})

export const formConfig: FormikConfig<IFormValues> = {
  initialValues: {
    HFType: { key: '', value: '' },
    HFName: '',
    Country: { key: '', value: '' },
    State: { key: '', value: '' },
    City: { key: '', value: '' },
    PostalCode: '',
    Phone: { code: '', number: '' },
    Fax: { code: '', number: '' },
    WebSite: '',
    Email: '',
    ContactFirstName: '',
    ContactLastName: '',
    HFDepartments: [],
    Address: '',
    timezone: { key: '', value: '' },
    day: { key: '', value: '' },
    endTime: '',
    startTime: '',
    operationTimesLists: []
  },
  validationSchema: toFormikSchema(schema),
  validateOnChange: true,
  onSubmit: () => {} // only here for ts errors.
}

export async function onSubmit(
  formik: FormikProps<IFormValues>,
  onSubmit: (values: IFormValues) => void
) {
  // TODO get title from fields - fix translation
  const errors = await formik.validateForm()
  // formik.setErrors(errors)
  formik.submitForm()

  const fieldsWithErr = Object.keys(errors) as [keyof typeof errors]
  if (fieldsWithErr.length > 0) {
    const errToastMsg = fieldsWithErr
      .map((key) => `${key}: ${errors[key]}`)
      .join('\n')

    notify.error({ title: 'err', text: errToastMsg })
    return
  }
  onSubmit(formik.values)
}
