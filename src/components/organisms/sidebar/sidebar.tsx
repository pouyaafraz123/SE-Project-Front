import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'
import classes from './styles.module.scss'
import {
  AccountSetting,
  PrivacyItems,
  MainMenuItems,
  AppearanceSettings
} from './Menu'
import { SideBarHeader } from './header'
import { useSidebarStore } from '.'

export function Sidebar(props: PropsWithChildren<unknown>) {
  const { children } = props
  const isOpen = useSidebarStore((state) => state.isOpen)
  return (
    <>
      <aside
        className={clsx([
          classes.sidebar,
          !isOpen ? classes.sidebar__close : ''
        ])}
      >
        <SideBarHeader />
        <div className={classes.sidebarMenuContainer}>
          <MainMenuItems />
          <PrivacyItems />
          <AccountSetting />
          <AppearanceSettings />
        </div>
      </aside>
      <main
        className={clsx([
          classes.mainContainer,
          !isOpen ? classes.mainContainer__close : ''
        ])}
      >
        <MemoChild>{children}</MemoChild>
      </main>
    </>
  )
}

const MemoChild = React.memo(function MemoChild({
  children
}: PropsWithChildren<unknown>) {
  return <>{children}</>
})
