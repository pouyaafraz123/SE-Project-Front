import { Typography, TypographyProps } from '@components/atoms/typography'
import { FormikProps } from 'formik'
import { useTranslation } from 'react-i18next'
import { ParseKeys } from 'i18next'
import { Icon, iconNameType, IconProps } from '@components/atoms/icons'
import { clsx } from 'clsx'
import classes from './styles.module.scss'

interface Props<T> {
  name: keyof T
  children: React.ReactNode
  title: ParseKeys<'form'> // TODO get generic namespace
  titleProps?: TypographyProps
  formik: FormikProps<T>
  icon?: iconNameType | IconProps
}

export function Field<T>(props: Props<T>) {
  const { t } = useTranslation('form')
  const { errors, touched } = props.formik
  const error = errors[props.name]
  const touch = touched[props.name]

  const icon = props.icon && (
    <Icon
      {...(typeof props.icon === 'string' ? { name: props.icon } : props.icon)}
    />
  )

  // TODO style error, icon, label
  return (
    <div>
      <label>
        <div className={classes.label}>
          {icon}
          <Typography fontSize='md-high' {...props.titleProps}>
            {t(props.title)}
          </Typography>
        </div>
        {props.children}
        {touch && error ? <div>{error.toString()}</div> : null}
      </label>
    </div>
  )
}
