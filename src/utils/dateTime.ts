import { useUIStore } from '@stores'

/**
 * converts js date to api Date without timezone conversion
 * used for birthdate
 * @param date
 * @returns api date
 */
export function convertToAPIDateFreeze(date: string | Date): string {
  if (date) {
    const dateInstance = new Date(date)
    const year = dateInstance.getFullYear()
    const month = convertToTwoDigits(dateInstance.getMonth() + 1)
    const day = convertToTwoDigits(dateInstance.getDate())

    return `${year}-${month}-${day}`
  }
  return ''
}

export function convertToTwoDigits(num: number): string {
  return ('00' + num).slice(-2)
}

// export function convertBirthday(date: string | Date): string {
//   if (date) {
//     console.log(date)

//     const dateInstance = new Date(date)
//     const year = dateInstance.getFullYear()
//     const month = convertToTwoDigits(dateInstance.getMonth() + 1)
//     const day = convertToTwoDigits(dateInstance.getDate())
//     console.log(useUIStore.getState().locale)

//     console.log(
//       new Intl.DateTimeFormat(useUIStore.getState().locale).format(dateInstance)
//     )

//     // const dateJ = moment.now()
//     // console.log(dateJ.format('YYYY-MM-DD'))

//     // moment.
//     return `${year}-${month}-${day}`
//   }
//   return ''
// }

export function useConvertDate() {
  const locale = useUIStore((state) => state.locale)

  function convertBirthday(date: string | Date): string {
    if (date) {
      return new Date(date).toLocaleString(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    }
    return ''
  }
  return { convertBirthday }
}
