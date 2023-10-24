import { useState } from 'react'
import { ChipProps } from './types'
import styles from './styles.module.scss'
import { getColor } from './getColor'

export function Chip(props: ChipProps) {
  const { value, name } = props

  const [hidden, setHidden] = useState(true)

  return (
    <div className={styles.wrapper}>
      <div className={styles.chipContainer}>
        {Array.isArray(name) ? (
          name.map((chipName, index) => {
            return (
              <div
                key={index}
                className={`${styles.chip} ${
                  index > 0 && hidden && styles.hidden
                }`}
                style={{
                  color: getColor(chipName),
                  background: getColor(chipName) + '1A'
                }}
              >
                {value[index]}
              </div>
            )
          })
        ) : (
          <div
            className={styles.chip}
            style={{
              color: getColor(name),
              background: getColor(name) + '1A'
            }}
          >
            {value}
          </div>
        )}
      </div>
      {Array.isArray(name) && name.length > 1 ? (
        hidden ? (
          <div
            className={styles.secondaryChip}
            onClick={() => setHidden(false)}
          >
            {name.length - 1}+
          </div>
        ) : (
          <div className={styles.arrowContainer}>
            <span
              onClick={() => setHidden(true)}
              className='icon-linear_arrow-up'
            ></span>
          </div>
        )
      ) : (
        ''
      )}
    </div>
  )
}
