import { FormikConfig } from 'formik'
import { IFinancialRule } from '@/components/listBoxes/financialRule'
import { toFormikSchema, z } from '@/utils'

const schema = z.object({
  visitType: z.dropdown(),
  visitDuration: z.coerce.number().positive(), // TODO min, max??
  price: z.coerce.number().positive(), // TODO min, max??
  robovPercentage: z.coerce.number().min(0).max(100)
})

export const formConfig: FormikConfig<IFinancialRule> = {
  initialValues: {
    id: '',
    visitType: { key: '', value: '' },
    visitDuration: '',
    price: '',
    robovPercentage: ''
  },
  validationSchema: toFormikSchema(schema),
  validateOnChange: true,
  onSubmit: () => {} // only here for ts errors.
}
