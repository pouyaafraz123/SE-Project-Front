import { FormikConfig, FormikProps } from 'formik'
import { z, toFormikSchema } from '@utils'
import { notify } from '@components/atoms/notify'
import { IDoctor } from '@components/listBoxes/doctor'
import { IHF } from '@components/listBoxes/hf'
import { IFinancialRule } from '@components/listBoxes/financialRule'
import { IOption } from '@/interfaces'

export interface IFormValues {
  doctorCountry: IOption
  doctorState: IOption
  doctorCity: IOption
  doctorSpeciality: IOption
  doctor: IOption
  doctorList: IDoctor[]
  hfCountry: IOption
  hfState: IOption
  hfCity: IOption
  hfType: IOption
  hf: IOption
  hfList: IHF[]
  visitType: IOption
  visitDuration: string
  price: string
  robovPercentage: string
  ruleList: IFinancialRule[]
}

const schema = z.object({
  // doctorCountry: z.dropdown(),
  // doctorState: z.dropdown(),
  // doctorCity: z.dropdown(),
  // doctorSpeciality: z.dropdown(),
  doctor: z.dropdown(),
  // hfCountry: z.dropdown(),
  // hfState: z.dropdown(),
  // hfCity: z.dropdown(),
  // hfType: z.dropdown(),
  hf: z.dropdown(),
  visitType: z.dropdown(),
  visitDuration: z.coerce.number().positive(), // TODO min, max??
  price: z.coerce.number().positive(), // TODO min, max??
  robovPercentage: z.coerce.number().min(0).max(100)
})

export const formConfig: FormikConfig<IFormValues> = {
  initialValues: {
    doctorCountry: { key: '', value: '' },
    doctorState: { key: '', value: '' },
    doctorCity: { key: '', value: '' },
    doctorSpeciality: { key: '', value: '' },
    doctor: { key: '', value: '' },
    doctorList: [],
    hfCountry: { key: '', value: '' },
    hfState: { key: '', value: '' },
    hfCity: { key: '', value: '' },
    hfType: { key: '', value: '' },
    hf: { key: '', value: '' },
    hfList: [],
    visitType: { key: '', value: '' },
    visitDuration: '',
    price: '',
    robovPercentage: '',
    ruleList: []
  },
  validationSchema: toFormikSchema(schema),
  validateOnChange: true,
  onSubmit: () => {} // only here for ts errors.
}

export async function onSubmit(
  formik: FormikProps<IFormValues>,
  mode: 'create' | 'edit' | 'view',
  onSubmit?: (values: IFormValues) => void
) {
  // TODO get title from fields - fix translation
  const { hfList, ruleList, doctorList } = formik.values

  if (ruleList.length > 0 && (mode != 'create' || doctorList.length > 0)) {
    onSubmit?.(formik.values)
    return
  }

  const errToastMsg = `${
    mode == 'create' && doctorList.length == 0 ? 'emptyDoctorList' : ''
  }\n
  ${ruleList.length == 0 ? 'emptyRuleList' : ''}` // TODO fix multiline + translation

  notify.error({ title: 'err', text: errToastMsg })
}
