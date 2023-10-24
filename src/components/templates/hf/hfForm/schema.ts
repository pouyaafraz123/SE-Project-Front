import { FormikConfig, FormikProps } from 'formik'
import { IPhoneNumber } from '@components/formControls/phone'
import { z, toFormikSchema } from '@utils'
import { notify } from '@components/atoms/notify'
import { IOption } from '@/components/molecules/selectBox/types'

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
  HFDepartments?: IOption // TODO missing dropdown multiselect
  Address: string
}

const schema = z.object({
  HFType: z.dropdown()
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
    HFDepartments: { key: '', value: '' }, // TODO missing dropdown multiselect
    Address: ''
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
  const errs = await formik.validateForm()
  formik.setErrors(errs)
  const fieldsWithErr = Object.keys(errs) as [keyof typeof errs]
  if (fieldsWithErr.length > 0) {
    const errToastMsg = fieldsWithErr
      .map((key) => `${key}: ${errs[key]}`)
      .join('\n')
    notify.error({ title: 'err', text: errToastMsg })
    return
  }
  onSubmit(formik.values)
}
