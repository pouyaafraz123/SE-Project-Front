import { useMemo } from 'react'

/**
 * A custom React hook that takes in data and a mapper function and returns the mapped result using useMemo.
 *
 * @param T | undefined data - The data to be mapped.
 * @param (data: T) => U mapperFn - The function used to map the data.
 * @returns U | undefined - The mapped result or undefined if data is undefined.
 */
export function useInitialValues<T, U>(
  data: T | undefined,
  mapperFn: (data: T) => U
): U | undefined {
  return useMemo(() => {
    if (data) {
      return mapperFn(data)
    }
    return undefined
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
}
