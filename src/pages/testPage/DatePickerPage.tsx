import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import arabic from 'react-date-object/calendars/arabic'
import arabic_ar from 'react-date-object/locales/arabic_ar'
import persian_en from 'react-date-object/locales/persian_en'
import { useEffect, useState } from 'react'
import DateObject from 'react-date-object'
import { Input } from '@components/formControls'
import transition from 'react-element-popper/animations/transition'
import opacity from 'react-element-popper/animations/opacity'
import { Filter, useFilterParam } from '@components/molecules/filter'

const filterOptions = [
  {
    key: '1',
    title: 'عنوان',
    options: [
      { key: '1', value: 'عنوان' },
      { key: '2', value: 'عنوان' },
      { key: '3', value: 'عنوان' },
      { key: '4', value: 'عنوان' },
      { key: '5', value: 'عنوان' },
      { key: '6', value: 'عنوان' },
      { key: '7', value: 'عنوان' }
    ]
  },
  {
    key: '2',
    title: 'عنوان',
    options: [
      { key: '6', value: 'عنوان' },
      { key: '7', value: 'عنوان' }
    ]
  },
  {
    key: '3',
    title: 'عنوان',
    options: [
      { key: '1', value: 'عنوان' },
      { key: '2', value: 'عنوان' },
      { key: '3', value: 'عنوان' },
      { key: '4', value: 'عنوان' },
      { key: '5', value: 'عنوان' },
      { key: '6', value: 'عنوان' },
      { key: '7', value: 'عنوان' },
      { key: '8', value: 'عنوان' }
    ]
  },
  {
    key: '4',
    title: 'عنوان',
    options: [
      { key: '1', value: 'عنوان' },
      { key: '2', value: 'عنوان' },
      { key: '3', value: 'عنوان' },
      { key: '4', value: 'عنوان' },
      { key: '5', value: 'عنوان' },
      { key: '6', value: 'عنوان' },
      { key: '7', value: 'عنوان' },
      { key: '8', value: 'عنوان' },
      { key: '9', value: 'عنوان' },
      { key: '10', value: 'عنوان' },
      { key: '11', value: 'عنوان' },
      { key: '12', value: 'عنوان' },
      { key: '13', value: 'عنوان' }
    ]
  }
]
export function DatePickerPage() {
  const { filterProps, filterValues } = useFilterParam(filterOptions)

  useEffect(() => {
    console.log(filterValues)
  }, [filterValues])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Filter {...filterProps} />
    </div>
  )
}
