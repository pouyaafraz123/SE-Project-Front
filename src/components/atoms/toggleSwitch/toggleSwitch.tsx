import { useState } from 'react'
import styles from './styles.module.scss'
import { ToggleSwitchProps } from './types'

// MAYBE NEED TO SOME PROPERTIES CHANGE
export function ToggleSwitch(props: ToggleSwitchProps) {
  const { value } = props
  const [isToggled, setIsToggled] = useState(value)
  const onToggle = () => setIsToggled((prevState) => !prevState)

  return (
    <label className={styles.toggleSwitch}>
      <input type='checkbox' checked={isToggled} onChange={onToggle} />
      <span className={styles.switch} />
    </label>
  )
}
