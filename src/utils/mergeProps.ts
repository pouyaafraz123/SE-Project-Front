/**
 * Merges multiple objects into a single object, retaining only non-undefined properties.
 *
 * @template T - The type of the objects being merged.
 * @param {...T} propsArray - An array of objects to merge.
 * @returns {T} - A new object containing the merged properties.
 */
export const mergeProps = <T extends object>(...propsArray: T[]): T => {
  const mergedProps: Partial<T> = {} // Use Partial<T> to start with an empty object

  for (const props of propsArray) {
    for (const key in props) {
      if (
        Object.prototype.hasOwnProperty.call(props, key) &&
        props[key] !== undefined
      ) {
        mergedProps[key] = props[key]
      }
    }
  }

  return mergedProps as T // Use type assertion to cast back to type T
}
