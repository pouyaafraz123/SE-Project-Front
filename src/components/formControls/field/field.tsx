import { Typography } from '@components/atoms/typography'
import { useTranslation } from 'react-i18next'
import { Icon } from '@components/atoms/icons'
import classes from './styles.module.scss'
import { FieldProps } from '.'

export function Field<T>(props: FieldProps<T>) {
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
    <div className={classes.container}>
      {!props.datepicker && (
        <label>
          <div className={classes.label}>
            {icon}
            <Typography fontSize='md-high' {...props.titleProps}>
              {t(props.title)}
            </Typography>
          </div>
          {props.children}
          {touch && error ? (
            <Typography
              color='danger-dark'
              fontSize='sm'
              className={classes.error}
            >
              {error.toString()}
            </Typography>
          ) : null}
        </label>
      )}
      {props.datepicker && (
        <>
          <label htmlFor={props.name as string}>
            <div className={classes.label}>
              {icon}
              <Typography fontSize='md-high' {...props.titleProps}>
                {t(props.title)}
              </Typography>
            </div>
          </label>
          {props.children}
          <label htmlFor={props.name as string}>
            {touch && error ? (
              <Typography
                color='danger-dark'
                fontSize='sm'
                className={classes.error}
              >
                {error.toString()}
              </Typography>
            ) : null}
          </label>
        </>
      )}
    </div>
  )
}
