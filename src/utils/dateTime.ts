import { useUIStore } from '@stores'
import { addDays } from 'date-fns'

export function convertToAPIDate(
  date: string | Date,
  freeze?: boolean
): string {
  if (validateDate(date)) {
    const dateInstance = new Date(date)
    const year = dateInstance.getFullYear()
    const month = convertToTwoDigits(dateInstance.getMonth() + 1)
    const day = convertToTwoDigits(dateInstance.getDate())

    const utcYear = dateInstance.getUTCFullYear()
    const utcMonth = convertToTwoDigits(dateInstance.getUTCMonth() + 1)
    const utcDay = convertToTwoDigits(dateInstance.getUTCDate())

    return freeze
      ? `${year}-${month}-${day}`
      : `${utcYear}-${utcMonth}-${utcDay}`
  }
  return ''
}

export function convertToFullAPIDate(
  date: string | Date,
  freeze?: boolean
): string {
  if (validateDate(date)) {
    const dateInstance = new Date(date)
    const year = dateInstance.getFullYear()
    const month = convertToTwoDigits(dateInstance.getMonth() + 1)
    const day = convertToTwoDigits(dateInstance.getDate())
    const hour = convertToTwoDigits(dateInstance.getHours())
    const minute = convertToTwoDigits(dateInstance.getMinutes())

    const utcYear = dateInstance.getUTCFullYear()
    const utcMonth = convertToTwoDigits(dateInstance.getUTCMonth() + 1)
    const utcDay = convertToTwoDigits(dateInstance.getUTCDate())
    const utcHour = convertToTwoDigits(dateInstance.getUTCHours())
    const utcMinute = convertToTwoDigits(dateInstance.getUTCMinutes())

    return freeze
      ? `${year}-${month}-${day} ${hour}:${minute}`
      : `${utcYear}-${utcMonth}-${utcDay} ${utcHour}:${utcMinute}`
  }
  return ''
}

export function convertToTwoDigits(num: number): string {
  return ('00' + num).slice(-2)
}

const validateDate = (date: string | Date) => {
  if (!date) return false
  const newDate = new Date(date)
  return !isNaN(newDate.getTime())
}

export function useConvertDate() {
  const locale = useUIStore((state) => state.locale)

  function humanizeDate(date: string | Date): string {
    if (validateDate(date)) {
      return new Date(date).toLocaleString(locale, {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      })
    }
    return '- - -'
  }

  function humanizeTime(date: string | Date): string {
    if (validateDate(date)) {
      return new Date(date).toLocaleString(locale, {
        hour: '2-digit',
        minute: '2-digit'
      })
    }
    return '- - -'
  }

  function humanizeFullTime(date: string | Date): string {
    if (validateDate(date)) {
      return new Date(date).toLocaleString(locale, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    return '- - -'
  }

  function humanizeFullDate(date: string | Date): string {
    if (validateDate(date)) {
      return new Date(date).toLocaleString(locale, {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
    return '- - -'
  }

  return { humanizeDate, humanizeTime, humanizeFullTime, humanizeFullDate }
}

export const getTomorrow = () => addDays(new Date(), 1)
