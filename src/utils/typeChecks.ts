export function isDefinedNonZero(value: string | null): number | null {
  return (value && parseInt(value) > 0 && parseInt(value)) || null
}

/**
 * Extend for types. Works somewhat like interface extends (mostly for unions)
 */
export type Extends<T, U extends T> = U
