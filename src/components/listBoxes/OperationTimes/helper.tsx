import { IOption } from '@/interfaces'

/**
 * Validates whether the fields are not not empty
 * @param day day field value
 * @param startTime start time field value
 * @param endTime end time field value
 * @returns True if the fields are valid , false otherwise.
 */
export function isValid(day: IOption, startTime: string, endTime: string) {
  if (day.key !== '' && startTime !== '' && endTime !== '') {
    return true
  }
  return false
}
