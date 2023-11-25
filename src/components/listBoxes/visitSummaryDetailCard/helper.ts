import { isEmptyArray } from 'formik'
import { variantProps } from '.'

//converting `variantProps` type to const to get its keys
const variantPropsConstant: Required<variantProps> = {
  description: '',
  disease: [],
  isConfirmed: true,
  visitFor: 'myself'
}

interface variantPropsObject extends variantProps {}

export function hasNoData(object: variantPropsObject): boolean {
  const keys = Object.keys(variantPropsConstant) as Array<keyof variantProps>
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    if (typeof object[key] === 'string' && String(object[key]).trim() !== '') {
      return false
    }
    if (Array.isArray(object[key]) && !isEmptyArray(object[key])) {
      return false
    }
    if (typeof object[key] === 'boolean') {
      return false
    }
  }
  return true
}
