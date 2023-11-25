import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import arabic from 'react-date-object/calendars/arabic'
import arabic_ar from 'react-date-object/locales/arabic_ar'
import persian_en from 'react-date-object/locales/persian_en'
import { useState } from 'react'
import DateObject from 'react-date-object'
import { Input } from '@components/formControls'
import transition from 'react-element-popper/animations/transition'
import opacity from 'react-element-popper/animations/opacity'
export function DatePickerPage() {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      {/*Global Calendar*/}
      <DatePicker
        render={<Input />}
        animations={[opacity(), transition({ from: 35, duration: 800 })]}
        value={date}
        onChange={(e) => {
          if (e instanceof DateObject) {
            setDate(e?.toDate())
          }
        }}
      />
      {/*Farsi Persian Shamsi Calendar*/}
      <DatePicker
        animations={[opacity(), transition({ from: 35, duration: 800 })]}
        render={<Input />}
        value={date}
        onChange={(e) => {
          if (e instanceof DateObject) {
            setDate(e?.toDate())
          }
        }}
        calendar={persian}
        locale={persian_fa}
      />
      {/*Arabic Calendar*/}
      <DatePicker
        animations={[opacity(), transition({ from: 35, duration: 800 })]}
        render={<Input />}
        value={date}
        onChange={(e) => {
          if (e instanceof DateObject) {
            setDate(e?.toDate())
          }
        }}
        calendar={arabic}
        locale={arabic_ar}
      />
      {/*English Shamsi Calendar */}
      <DatePicker
        animations={[opacity(), transition({ from: 35, duration: 800 })]}
        render={<Input />}
        value={date}
        onChange={(e) => {
          if (e instanceof DateObject) {
            setDate(e?.toDate())
          }
        }}
        calendar={persian}
        locale={persian_en}
      />
    </div>
  )
}
