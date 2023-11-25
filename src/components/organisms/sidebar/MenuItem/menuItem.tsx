import { Fragment, useState } from 'react'
import { useMatch } from 'react-router-dom'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { useSidebarStore } from '..'
import { HiddenBox } from '../components/hiddenBox'
import { Centring } from '../components'
import classes from './styles.module.scss'
import Before from './before'
import { SidebarMenuItemProps } from './types'
import SidebarChildItem from './childItem'
import { LinkProducer } from './linkProducer'
import { Typography } from '@/components/atoms/typography'
import { Icon } from '@/components/atoms/icons'
import { Collapse } from '@/components/atoms/collapse'

export function SidebarMenuItem(props: SidebarMenuItemProps) {
  const { iconName, items, name, className } = props
  const { t } = useTranslation('sidebar')
  const { isOpen, open, selectedChildParentName } = useSidebarStore(
    (state) => ({
      isOpen: state.isOpen,
      open: state.open,
      selectedChildParentName: state.selectedChildParentName
    })
  )

  const pathMatch = useMatch(items.path || '') && Boolean(items.path)
  const childPathMatches = name === selectedChildParentName

  const isSelected = items.child ? childPathMatches : pathMatch

  const [collapseIsOpen, setCollapse] = useState(false)

  function menuItemClickHandler() {
    if (isOpen) {
      setCollapse(!collapseIsOpen)
    } else {
      if (items.child) {
        open()
        setCollapse(true)
      }
    }
  }

  return (
    <LinkProducer path={items.path}>
      <Centring
        className={clsx([
          className,
          classes.container,
          isSelected && classes.isSelected
        ])}
        onClick={menuItemClickHandler}
      >
        <Before />
        <Icon
          name={iconName}
          fontSize={isSelected ? 'lg' : 'base'}
          type={isSelected ? 'bold-duotone' : 'linear'}
          color={isSelected ? 'primary-main' : 'inherit'}
        />
        <HiddenBox
          className='flex-item-center w-100'
          style={{ overflowY: 'hidden' }}
        >
          <Typography fontSize='sm' color='inherit'>
            {t(name)}
          </Typography>
          {items.child && (
            <Icon
              className={clsx([
                classes['arrow-icon'],
                collapseIsOpen && classes.rotateIcon
              ])}
              name='arrow-down'
              fontSize='base'
              fontWeight='extra-bold'
              color='border-secondary'
            />
          )}
        </HiddenBox>
      </Centring>
      {items.child && (
        <Collapse
          isOpen={collapseIsOpen && isOpen}
          className={classes.childItemContainer}
        >
          {items.child.map((item, index) => (
            <Fragment key={index}>
              {index !== 0 && (
                <div className={clsx([classes.space, classes.childItem])}>
                  <div className={clsx(['border-start', classes.space])}></div>
                </div>
              )}
              <SidebarChildItem
                key={index}
                name={item.name}
                path={item.path}
                parentName={name}
                index={index}
                total={items.child?.length}
              />
            </Fragment>
          ))}
        </Collapse>
      )}
    </LinkProducer>
  )
}
