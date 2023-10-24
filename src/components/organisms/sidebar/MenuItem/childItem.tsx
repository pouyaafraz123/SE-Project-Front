import { Link, useMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { HiddenBox } from '../components/hiddenBox'
import { sidebarFn } from '..'
import Before from './before'
import classes from './styles.module.scss'
import { SidebarChildItemProps } from './types'
import { Typography } from '@/components/atoms/typography'

export default function SidebarChildItem(props: SidebarChildItemProps) {
  const { name, path, parentName, index, total } = props
  const isSelected = useMatch(path)
  const { t } = useTranslation('sidebar')
  if (isSelected) sidebarFn.setSelectedParentName(parentName)

  return (
    <Link to={path}>
      <HiddenBox
        className={clsx([
          classes.container,
          classes.childItem,
          isSelected ? [classes.isSelected, classes.childItemIsSelected] : ''
        ])}
        returnNull={false}
      >
        <div
          className={clsx([
            classes.line,
            ['border-start'],
            index === 0 && classes.firstLine,
            total && total - 1 === index && classes.lastLine
          ])}
        ></div>
        <Before isSecondary />
        <Typography
          variant='caption1'
          color={isSelected ? 'primary-main' : 'secondary-text'}
          fontWeight={isSelected ? 'semi-bold' : 'medium'}
        >
          {t(name)}
        </Typography>
      </HiddenBox>
    </Link>
  )
}
