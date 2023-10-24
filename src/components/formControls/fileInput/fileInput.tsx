import clsx from 'clsx'
import { useRef, useState } from 'react'
import { FileInputProps } from './types'
import {
  EXCEL_FORMATS,
  IMAGE_FORMATS,
  fileListIterator,
  validateFileList
} from './helper'
import classes from './styles.module.scss'
import { Box } from '@/components/atoms/box'
import { FileUploadImage } from '@/components/icons'
import { Typography } from '@/components/atoms/typography'

export function FileInput(props: FileInputProps) {
  const {
    maxSize = { size: 4, unit: 'MB' },
    onChange,
    setError,
    type,
    value
  } = props
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function setTranslatedError(errorKey: string) {
    //TODO: use translation
    setError?.(errorKey)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
    const files = e.dataTransfer.files
    if (validateFileList(files, type, maxSize, setTranslatedError)) {
      const fileList = fileListIterator(files, value)
      onChange?.(fileList)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && validateFileList(files, type, maxSize, setTranslatedError)) {
      const fileList = fileListIterator(files, value)
      onChange?.(fileList)
    }
  }

  return (
    <Box
      px='l4'
      py='l4'
      radius='md'
      borderStyle='dashed'
      backgroundColor='secondary-background'
      borderColor='border-secondary'
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={clsx([
        dragging ? 'border-color-primary-main' : '',
        classes.box
      ])}
    >
      <div className='d-inline-flex justify-content-center'>
        <FileUploadImage />
      </div>
      <div className='d-flex-column justify-content-center gap-xs'>
        <Typography fontWeight='semi-bold' center>
          {type === 'excel' && <span>فایل csv</span>}
          {type === 'image' && <span>عکس مورد نظر</span>}
          {type === 'multiType' && <span>فایل مورد نظر</span>}
          <span>را به اینجا بکشید.</span>
        </Typography>
        <Typography
          color='secondary-text'
          center
        >{`یا، برای مرور کردن کلیک کنید (${maxSize.size} ${maxSize.unit})`}</Typography>
      </div>
      <input
        type='file'
        ref={inputRef}
        style={{ display: 'none' }}
        accept={
          type === 'excel'
            ? EXCEL_FORMATS.join(', ')
            : type === 'image'
            ? IMAGE_FORMATS.join(', ')
            : '*/*'
        }
        multiple
        onChange={handleInputChange}
      />
    </Box>
  )
}
