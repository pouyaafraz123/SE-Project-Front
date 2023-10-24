import { FormControlProps } from '..'

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

export interface FileInputProps
  extends FormControlProps<HTMLInputElement, File[]> {
  type: IFileType
  maxSize?: IFileSize
  setError?: (error: string) => void
}
