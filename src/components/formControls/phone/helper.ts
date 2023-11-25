import { Dispatch, SetStateAction } from 'react'
import { IPhoneNumber } from '.'
import { IOption } from '@/interfaces'

export function findAndSetTheCode(
  countries: IOption[],
  defaultCode: string,
  phoneValue: IPhoneNumber,
  setPhoneValue: Dispatch<SetStateAction<IPhoneNumber>>,
  setSelectedCode: Dispatch<SetStateAction<string>>
) {
  if (phoneValue.code !== defaultCode && phoneValue.number === '') {
    const countryOption = countries.find((item) => item.key === defaultCode)
    if (countryOption) {
      setPhoneValue((prev) => ({
        code: countryOption.key.toString(),
        number: prev.number
      }))
      setSelectedCode(countryOption.flag || '')
    }
  }
}
