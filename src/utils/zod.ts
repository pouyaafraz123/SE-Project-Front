import { z as zod, CustomErrorParams } from 'zod'
import { makeZodI18nMap } from 'zod-i18n-map'
import { toFormikValidationSchema } from 'zod-formik-adapter'

const dropdown = (params?: CustomErrorParams) =>
  zod.custom<{ key: string; value: string }>(
    (val) => {
      // @ts-expect-error check key and value defined and not empty
      return val && val.key && val.value
    },
    { params: { i18n: 'dropdownEmpty' } } // define custom error like this
    // custom errors are fetched from zod.json (at obj root)
  )

zod.setErrorMap(makeZodI18nMap({ ns: ['zod', 'zod'] }))

export const z = { ...zod, dropdown }
export { toFormikValidationSchema as toFormikSchema }
