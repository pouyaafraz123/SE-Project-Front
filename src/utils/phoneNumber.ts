import { IPhoneNumber } from '@/components/formControls'

/**
 * converts phone number string from server to phone dropdown
 * @param value phone number like "+98-9141231234"
 * @returns {IPhoneNumber}
 */
export function toPhone(value?: string): IPhoneNumber {
  if (!value) return { code: '', number: '' }
  const [code, number] = value.split('-')
  return { code, number }
}

/**
 * Encodes a phone number by concatenating the country code and phone number with a hyphen.
 * @param value - An object containing the country code and phone number of a phone number.
 * @returns A string representing the encoded phone number.
 */
export function encodePhone(value: IPhoneNumber): string {
  console.log(value.number)

  return value.number !== '' ? `${value.code}-${value.number}` : ''
}
