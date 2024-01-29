import { Children, forwardRef, PropsWithChildren, Ref } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { Box } from '../box'
import { Typography } from '../typography'
import classes from './styles.module.scss'
import { MenuProps } from './types'

export const Menu = forwardRef(function Menu(
  props: PropsWithChildren<MenuProps>,
  ref: Ref<HTMLDivElement>
) {
  const { children, className, ...rest } = props
  return (
    <Box
      ref={ref}
      px='0'
      py='2m1'
      radius='sm'
      className={clsx([classes.menu, className])}
      {...rest}
    >
      {children}
    </Box>
  )
})

export const MenuContent = forwardRef(function Content(
  props: PropsWithChildren<MenuProps>,
  ref: Ref<HTMLDivElement>
) {
  const { children, className, ...rest } = props
  const { t } = useTranslation('common')
  return (
    <div ref={ref} className={clsx([classes.content, className])} {...rest}>
      {Children.count(children) === 0 && (
        <Typography variant='caption1' center>
          {t('nodata')}
        </Typography>
      )}
      {children}
    </div>
  )
})

export const MenuHeader = forwardRef(function Content(
  props: PropsWithChildren<MenuProps>,
  ref: Ref<HTMLDivElement>
) {
  const { children, className, ...rest } = props
  return (
    <div ref={ref} className={clsx([classes.header, className])} {...rest}>
      {children}
    </div>
  )
})
