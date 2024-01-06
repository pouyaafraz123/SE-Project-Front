import { IPageTabsProps } from '@components/atoms/pageTabs/types.ts'
import { useMemo } from 'react'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'
import classes from './styles.module.scss'

export function PageTabs<T extends string = string>(props: IPageTabsProps<T>) {
  const { tabs, selectedKey, onChange } = props

  const renderTabs = useMemo(() => {
    return (
      <>
        {tabs?.map((tab) => {
          return (
            <div
              key={tab?.key}
              className={clsx(
                classes.tabContainer__tab,
                selectedKey === tab?.key && classes?.tabContainer__selectedTab
              )}
              onClick={() => onChange(tab?.key)}
            >
              <Typography color={'inherit'}>{tab?.title}</Typography>
            </div>
          )
        })}
      </>
    )
  }, [onChange, selectedKey, tabs])

  return <div className={clsx(classes.tabContainer)}>{renderTabs}</div>
}
