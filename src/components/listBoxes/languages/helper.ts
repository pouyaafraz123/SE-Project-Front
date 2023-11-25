import { ILanguageLists } from '.'
import { IOption } from '@/interfaces'

/**
 * Validates whether the fields are not not empty
 * @param language language field value
 * @param languageSkills language skills field value
 * @returns True if the fields are valid , false otherwise.
 */
export function isValid(language: IOption, languageSkills: IOption) {
  if (language.key !== '' && languageSkills.key !== '') {
    return true
  }
  return false
}

/**
 * Finds the index of a duplicated language in the given language lists array based on the language and language skills options.
 *
 * @param {IOption} language - The language option to search for.
 * @param {ILanguageLists[]} languageLists - The array of language lists to search within.
 * @returns {number} The index of the duplicated language, or -1 if no duplicates are found.
 */
export function findDuplicated(
  language: IOption,
  languageLists: ILanguageLists[]
): number {
  const foundIndex = languageLists.findIndex(
    (item) => item.language.key === language.key
  )
  return foundIndex
}
