import { useSearchParams } from 'react-router-dom'

export const useParams = <T extends string>(
  keys: [T, ...T[]]
): {
  values: { [key in T]: string | null }
  set: (values: Record<T, string>) => void
} => {
  const [searchParams, setSearchParams] = useSearchParams()

  const params = keys.reduce(
    (prev, key) => ({
      ...prev,
      [key]: searchParams.get(key)
    }),
    {} as { [key in T]: string | null }
  )
  return { values: params, set: (vals) => setSearchParams(vals) }
}
