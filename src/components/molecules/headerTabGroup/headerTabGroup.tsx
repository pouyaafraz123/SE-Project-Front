import { HeaderTab } from '@components/atoms/headerTab'
import { IHeaderTabGroupProps } from '@components/molecules/headerTabGroup/types.ts'
import clsx from 'clsx'
import classes from './styles.module.scss'

export function HeaderTabGroup({
  tabs,
  selectedKey,
  onChange,
  tabsSize,
  className
}: IHeaderTabGroupProps) {
  return (
    <div className={clsx(classes.tabs, className)}>
      {tabs?.map(({ key, title }) => {
        return (
          <HeaderTab
            title={title}
            key={key}
            isSelected={key === selectedKey}
            onSelect={(isSelected) => {
              if (isSelected) onChange(key)
            }}
            size={tabsSize}
          />
        )
      })}
    </div>
  )
}
