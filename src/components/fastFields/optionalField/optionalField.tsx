import { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import classes from '../field/styles.module.scss'
import { OptionalFieldProps } from '.'
import { Icon } from '@/components/atoms/icons'
import { Typography } from '@/components/atoms/typography'

/**
 * Field without formik and error message
 * @param props
 * @returns
 */
export function OptionalField(props: PropsWithChildren<OptionalFieldProps>) {
  const { name, children, icon, title } = props
  const { t } = useTranslation('form')
  const IconComp = (
    <Icon {...(typeof icon === 'string' ? { name: icon } : icon)} />
  )
  return (
    <div className={classes.container}>
      <label htmlFor={name}>
        <div className={classes.label}>
          {IconComp}
          <Typography fontSize='md-high'>{t(title)}</Typography>
        </div>
      </label>
      {children}
    </div>
  )
}
