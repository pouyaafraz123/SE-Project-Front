/**
 * Generates a version 4 UUID.
 *
 * @returns {string} A string representation of a UUID with the format "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 */
export function generateUUIDv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * Validates whether a given string is a valid UUID.
 *
 * @param {string} str - The string to validate.
 * @returns {boolean} True if the string is a valid UUID, false otherwise.
 */
export function validateUUID(str: string): boolean {
  // Regular expression to check if string is a valid UUID
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

  return regexExp.test(str)
}

/**
 * Generates a random integer between the given minimum and maximum values (inclusive).
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between the given minimum and maximum values.
 */
export function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
