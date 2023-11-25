import { FormikProps } from 'formik'
import { IOption } from '@/interfaces'

export type ILanguageLists = {
  id: string
  language: IOption
  languageSkills: IOption
}

export interface languageListBoxFormikSchema {
  language: IOption
  languageSkills: IOption
  languageLists: ILanguageLists[]
}

export interface LanguageListBoxProps<T extends languageListBoxFormikSchema> {
  formik: FormikProps<T>
}

export type ColumnActionProps = {
  onDelete: (id: string) => void
}
