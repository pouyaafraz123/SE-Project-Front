import { Input } from '@components/formControls/input'
import transition from 'react-element-popper/animations/transition'
import opacity from 'react-element-popper/animations/opacity'
import DateObject from 'react-date-object'
import DP from 'react-multi-date-picker'
import { useTranslation } from 'react-i18next'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import { localeType } from '@configs'
import { DatePickerProps } from './types'

export function DatePicker(props: DatePickerProps) {
  const { value, onChange, readOnly, disabled, date, placeholder, ...rest } =
    props
  const { i18n } = useTranslation()
  const lng = i18n.language as localeType
  let calender, locale
  if (lng === 'fa') {
    calender = persian
    locale = persian_fa
  }

  return (
    <DP
      render={
        <Input
          dir='ltr'
          placeholder={
            placeholder ||
            new Date().toLocaleDateString(lng === 'fa' ? 'fa' : 'zh-Hans-CN')
          }
          readOnly={readOnly}
          disabled={disabled}
          {...rest}
        />
      }
      animations={[opacity(), transition({ from: 35, duration: 800 })]}
      value={date}
      onChange={(e) => {
        if (e instanceof DateObject) {
          onChange?.(e.toDate().toISOString())
        }
      }}
      calendar={calender}
      locale={locale}
      readOnly={readOnly}
      disabled={disabled}
    />
  )
}
