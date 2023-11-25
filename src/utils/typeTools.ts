export type Exclusive<
  T extends Record<PropertyKey, unknown>,
  U extends Record<PropertyKey, unknown>
> =
  | (T & { [k in Exclude<keyof U, keyof T>]?: never })
  | (U & { [k in Exclude<keyof T, keyof U>]?: never })

export type Optional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>

export type OmitSafety<T, K extends keyof T> = Omit<T, K>

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }
