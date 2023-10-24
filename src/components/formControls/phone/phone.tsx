import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Input } from '..'
import classes from './styles.module.scss'
import { findAndSetTheCode } from './helper'
import { IPhoneNumber, PhoneProps } from '.'
import {
  getSelectBoxPosition,
  selectBoxFn
} from '@/components/molecules/selectBox'
import FlagImg from '@/components/atoms/flagImg/flagImg'

const DEFAULT_CODE = '+98'

export function Phone(props: PhoneProps) {
  const {
    value = { code: '', number: '' },
    onChange,
    countries,
    className,
    disabled,
    readOnly,
    defaultCode = DEFAULT_CODE,
    ...rest
  } = props

  // reference of the container div box
  const divRef = useRef(null)
  // state for store the phone value
  const [phoneValue, setPhoneValue] = useState<IPhoneNumber>(value)

  // state for store the select country code with its flag url
  const [selectedFlag, setSelectedFlag] = useState<string>('')

  // set the phoneValue value if the default code has changed
  useEffect(() => {
    findAndSetTheCode(
      countries,
      defaultCode,
      phoneValue,
      setPhoneValue,
      setSelectedFlag
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultCode])

  // function to show the select box
  function codeBoxClickHandler() {
    if (!readOnly && !disabled) {
      selectBoxFn.show({
        onSelect(item) {
          setPhoneValue((prev) => ({
            code: item.key.toString(),
            number: prev.number
          }))

          setSelectedFlag(item.flag || '')
        },
        hasSearch: true,
        refElementPosition: getSelectBoxPosition(divRef.current),
        options: countries
      })
    }
  }

  function inputChangeHandler(value: string) {
    setPhoneValue((prev) => ({
      code: prev.code,
      number: value
    }))
    onChange?.({ ...phoneValue, number: value })
  }

  return (
    <div ref={divRef} className={classes.container}>
      <Input
        dir={phoneValue.number === '' ? document.body.dir : 'ltr'}
        type='tel'
        className={clsx([classes.phoneInput, className])}
        value={phoneValue.number}
        onChange={inputChangeHandler}
        readOnly={readOnly}
        disabled={disabled}
        {...rest}
      />
      <div
        className={classes.codeContainer}
        data-disabled={disabled}
        data-readonly={readOnly}
        onClick={codeBoxClickHandler}
      >
        <FlagImg src={selectedFlag} />
        <div>{phoneValue.code}</div>
      </div>
    </div>
  )
}
