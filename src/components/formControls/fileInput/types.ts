import { ParseKeys } from 'i18next'
import { InputProps } from '..'

export type IFileType = 'excel' | 'image' | 'multiType'

export type TFileSizeUnitType =
  | 'Bytes'
  | 'KB'
  | 'MB'
  | 'GB'
  | 'TB'
  | 'PB'
  | 'EB'
  | 'ZB'
  | 'YB'

export type IFileSize = { size: number; unit: TFileSizeUnitType }

export interface FileInputProps extends InputProps<File[]> {
  type: IFileType
  maxSize?: IFileSize
  setError?: (error: string) => void
  sampleLink?: string
  label: ParseKeys<'form'>
}
