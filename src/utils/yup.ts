/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from 'yup'
import { DateSchema, TestContext } from 'yup'
import { isValidPhoneNumber } from 'react-phone-number-input'

const REQUIRED = 'This field is required.'

// check string empty or undefined
yup.addMethod<yup.StringSchema>(yup.string, 'emptyAsUndefined', function () {
  return this.transform((value) => (value ? value : undefined))
})

// check number empty or undefined
yup.addMethod<yup.NumberSchema>(yup.number, 'emptyAsUndefined', function () {
  return this.transform((value, originalValue) =>
    String(originalValue)?.trim() ? value : undefined
  )
})

// check mix object empty or undefined
yup.addMethod(yup.mixed, 'emptyAsUndefined', function () {
  return this.transform((value, originalValue) =>
    String(originalValue)?.trim() ? value : undefined
  )
})

yup.addMethod<yup.ObjectSchema<any>>(yup.object, 'dropdown', function (args) {
  return this.test(
    'key-value-test',
    '',
    function (value: { key: unknown; value: unknown }, context: TestContext) {
      const { createError } = context
      const { optional, errorMessage } = args || {
        optional: false,
        errorMessage: REQUIRED
      }
      if ((!value?.key || !value?.value) && !optional) {
        return createError({ message: errorMessage })
      }
      return true
    }
  )
})

yup.addMethod<yup.StringSchema>(yup.string, 'mac', function () {
  return this.matches(
    /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
    'Invalid MAC address'
  )
})

yup.addMethod<yup.StringSchema>(yup.string, 'requiredString', function (args) {
  return this.test('required', '', function (value) {
    const { createError } = this
    const { optional, errorMessage } = args || {
      optional: false,
      errorMessage: REQUIRED
    }
    if (!optional && (value === undefined || value.trim() === '')) {
      return createError({ message: errorMessage })
    }
    return true
  })
})

yup.addMethod<yup.ObjectSchema<any>>(
  yup.object,
  'phoneNumber',
  function (args) {
    return this.test(
      'phone-number-test',
      '',
      function (value: { number: string; code: string }, context: TestContext) {
        const { createError } = context
        const { optional, errorMessage } = args || {
          optional: false,
          errorMessage: REQUIRED
        }
        if (!value?.number && !optional) {
          return createError({ message: errorMessage })
        }
        if (value?.number) {
          const phoneText = (value?.code + value?.number)?.replace(' ', '')
          if (!isValidPhoneNumber(phoneText)) {
            return createError({ message: 'Enter a valid phone number.' })
          }
        }

        return true
      }
    )
  }
)

yup.addMethod<yup.ObjectSchema<any>>(yup.object, 'timeInput', function (args) {
  return this.test(
    'time-input-test',
    '',
    function (
      value: { hour: unknown; minute: unknown; period: unknown },
      context: TestContext
    ) {
      const { createError } = context
      const { optional } = args || { optional: false }
      if ((!value?.hour || !value?.minute || !value?.period) && !optional) {
        return createError({ message: REQUIRED })
      }
      return true
    }
  )
})

yup.addMethod<DateSchema>(yup.date, 'minAge', function (args) {
  return this.test('min-age-test', '', function (value, context: TestContext) {
    const { createError } = context
    const { optional, min, errorMessage } = args || {
      optional: false,
      errorMessage: REQUIRED
    }
    const dateOfBirth = new Date(value || '')
    const differenceMs = Date.now() - dateOfBirth.getTime()
    const dateFromEpoch = new Date(differenceMs)
    const yearFromEpoch = dateFromEpoch.getUTCFullYear()
    const age = Math.abs(yearFromEpoch - 1970)

    if (!value && !optional) {
      return createError({ message: errorMessage })
    }
    if (age < min && !optional) {
      return createError({ message: `Age Should be over ${min}` })
    }

    return true
  })
})

yup.addMethod<DateSchema>(yup.date, 'maxAge', function (args) {
  return this.test('max-age-test', '', function (value, context: TestContext) {
    const { createError } = context
    const { optional, max } = args || { optional: false }
    const dateOfBirth = new Date(value || '')
    const differenceMs = Date.now() - dateOfBirth.getTime()
    const dateFromEpoch = new Date(differenceMs)
    const yearFromEpoch = dateFromEpoch.getUTCFullYear()
    const age = Math.abs(yearFromEpoch - 1970)

    if (!value && !optional) {
      return createError({ message: REQUIRED })
    }
    if (age > max && !optional) {
      return createError({ message: `Age Should be under ${max}` })
    }

    return true
  })
})

declare module 'yup' {
  interface ObjectSchema<
    TIn extends yup.Maybe<yup.AnyObject>,
    TContext = yup.AnyObject,
    TDefault = any,
    TFlags extends yup.Flags = ''
  > {
    dropdown(args?: {
      optional?: boolean
      errorMessage?: string
    }): ObjectSchema<TIn, TContext>
    phoneNumber(args?: {
      optional?: boolean
      errorMessage?: string
    }): ObjectSchema<TIn, TContext>
    timeInput(args?: { optional: boolean }): ObjectSchema<TIn, TContext>
  }

  interface StringSchema<
    TType extends yup.Maybe<string> = string | undefined,
    TContext = yup.AnyObject,
    TDefault = undefined,
    TFlags extends yup.Flags = ''
  > extends yup.Schema<TType, TContext, TDefault, TFlags> {
    emptyAsUndefined(): StringSchema<TType, TContext>
    mac(): StringSchema<TType, TContext>
    requiredString(args?: {
      optional?: boolean
      errorMessage?: string
    }): StringSchema<TType, TContext>
  }

  interface NumberSchema<
    TType extends yup.Maybe<number> = number | undefined,
    TContext = yup.AnyObject,
    TDefault = undefined,
    TFlags extends yup.Flags = ''
  > extends yup.Schema<TType, TContext, TDefault, TFlags> {
    emptyAsUndefined(): NumberSchema<TType, TContext>
  }

  interface DateSchema {
    minAge(args?: {
      optional?: boolean
      min: number
      errorMessage?: string
    }): DateSchema
    maxAge(args?: {
      optional?: boolean
      max: number
      errorMessage?: string
    }): DateSchema
  }
}

export { yup }
