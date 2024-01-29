import { navItems } from '@components/molecules/navbar/constants.ts'
import { Link } from '@components/atoms/link'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import classes from './styles.module.scss'

export function Navbar() {
  const { pathname } = useLocation()

  return (
    <div className={clsx(classes.navbar)}>
      {navItems?.map(({ id, title, link }) => {
        return (
          <Link
            key={id}
            to={link}
            className={clsx(
              classes.navbar__link,
              link === pathname && classes.navbar__linkSelected
            )}
            color={'inherit'}
            fontFamily={'Morabba'}
            fontSize={'lg'}
            fontWeight={'medium'}
          >
            {title}
          </Link>
        )
      })}
    </div>
  )
}
