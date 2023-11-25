import { z as zod, CustomErrorParams, ZodTypeAny } from 'zod'
import { makeZodI18nMap } from 'zod-i18n-map'
import { toFormikValidationSchema } from 'zod-formik-adapter'

const dropdown = (optional: boolean = false, params?: CustomErrorParams) =>
  zod.custom<{ key: string; value: string }>(
    (val) => {
      // @ts-expect-error check key and value defined and not empty
      return optional || (val && val.key && val.value)
    },
    { params: { i18n: 'dropdownEmpty' } } // define custom error like this
    // custom errors are fetched from zod.json (at obj root)
  )
const phone = (params?: CustomErrorParams) =>
  zod.custom<{ code: string; number: string }>(
    (val) => {
      // @ts-expect-error check key and value defined and not empty
      return val && val.code && val.number
    },
    { params: { i18n: 'dropdownEmpty' } } // define custom error like this
    // custom errors are fetched from zod.json (at obj root)
  )

zod.setErrorMap(makeZodI18nMap({ ns: ['zod', 'zod'] }))

export type ShapeOf<T> = Partial<Record<keyof T, ZodTypeAny>>

export const z = { ...zod, dropdown, phone }
export { toFormikValidationSchema as toFormikSchema }
