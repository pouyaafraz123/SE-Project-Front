import { PropsWithChildren } from 'react'
import classes from './styles.module.scss'
import { SidebarMenuProps } from './types'
import { Typography } from '@/components/atoms/typography'

export function SidebarMenu(props: PropsWithChildren<SidebarMenuProps>) {
  const { name, children } = props
  return (
    <div className={classes.sidebarMenu}>
      <Typography
        className={classes.sidebarMenuTitle}
        variant='caption1'
        fontFamily='Morabba'
      >
        {name}
      </Typography>
      {children}
    </div>
  )
}
