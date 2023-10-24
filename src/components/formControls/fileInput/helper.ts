import { IFileType, IFileSize } from './types'
export const EXCEL_FORMATS = [
  '.csv',
  'application/vnd.MS-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
]
export const IMAGE_FORMATS = ['image/png', 'image/gif', 'image/jpeg']

export const fileSizeUnit = [
  'Bytes',
  'KB',
  'MB',
  'GB',
  'TB',
  'PB',
  'EB',
  'ZB',
  'YB'
]

/**
 * Iterates through a given FileList and returns an array of File objects. If oldFiles are provided, they are concatenated to the end of the array.
 *
 * @param {FileList} fileList - The list of files to iterate through.
 * @param {File[] | undefined} oldFiles - Optional array of File objects to concatenate to the end of the resulting array.
 * @returns {File[]} - An array of File objects.
 */
export function fileListIterator(
  fileList: FileList,
  oldFiles: File[] | undefined
): File[] {
  const temp: File[] = []
  for (let index = 0; index < fileList.length; index++) {
    const element = fileList[index]
    temp.push(element)
  }
  if (oldFiles) {
    return temp.concat(oldFiles)
  }
  return temp
}

/**
 * Validates a given FileList based on the specified file type and maximum size, and sets an error message if necessary.
 *
 * @param {FileList | null} fileList - The list of files to validate.
 * @param {IFileType} type - The expected file type.
 * @param {IFileSize } maxSize - The maximum size in bytes allowed for all files combined.
 * @param {(error: string) => void} setError - A callback function to set the error message.
 * @returns {boolean} - True if the FileList is valid, false otherwise.
 */
export function validateFileList(
  fileList: FileList | null,
  type: IFileType,
  maxSize: IFileSize,
  setError: (error: string) => void
): boolean {
  if (fileList === null) return true

  const totalSize = getTotalSize(fileList)
  if (totalSize > getActualFileSize(maxSize)) {
    setError('invalid_max_size') // * this is the key of translation object
    return false
  }

  if (type === 'excel') {
    for (let index = 0; index < fileList.length; index++) {
      if (!EXCEL_FORMATS.includes(fileList[index].type)) {
        setError('invalid_file_format') // * this is the key of translation object
        return false
      }
    }
  } else if (type === 'image') {
    for (let index = 0; index < fileList.length; index++) {
      if (!IMAGE_FORMATS.includes(fileList[index].type)) {
        setError('invalid_file_format') // * this is the key of translation object
        return false
      }
    }
  }
  return true
}

/**
 * Calculates the total size of all files in a given FileList.
 *
 * @param {FileList} fileList - The list of files to calculate the total size of.
 * @returns {number} - The total size of all files in bytes.
 */
function getTotalSize(fileList: FileList): number {
  let size = 0
  for (let index = 0; index < fileList.length; index++) {
    const element = fileList[index]
    size += element.size
  }
  return size
}

/**
 * get the file size in bytes in convert to KB, MB, GB
 * @param size file size
 */
export function humanizedFileSize(size: number) {
  if (size === 0) return '0 Bytes'
  const k = 1000,
    dm = 2,
    i = Math.floor(Math.log(size) / Math.log(k))
  return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + fileSizeUnit[i]
}

/**
 * Converts a human-readable file size string to its equivalent size in bytes.
 *
 * @param {IFileSize} sizeObject - The human-readable file size string to convert.
 * @returns {number} - The equivalent size in bytes.
 */
export function getActualFileSize(sizeObject: IFileSize): number {
  const size = sizeObject.size
  const unit = sizeObject.unit
  const index = fileSizeUnit.indexOf(unit)
  return size * Math.pow(1000, index)
}
