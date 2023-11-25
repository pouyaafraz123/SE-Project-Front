import { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'
import { ToggleSwitchProps } from './types'

// MAYBE NEED TO SOME PROPERTIES CHANGE
export function ToggleSwitch(props: ToggleSwitchProps) {
  const { checked, onChange, disabled } = props
  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.checked)
  }
  return (
    <label className={styles.toggleSwitch}>
      <input
        type='checkbox'
        disabled={disabled}
        checked={checked}
        onChange={changeHandler}
      />
      <span className={styles.switch} />
    </label>
  )
}
