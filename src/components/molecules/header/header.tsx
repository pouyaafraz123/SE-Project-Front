import clsx from 'clsx'
import { Icon } from '@components/atoms/icons'
import { IconButton } from '@components/molecules/iconButton'
import { Typography } from '@components/atoms/typography'
import { Navbar } from '@components/molecules/navbar'
import classes from './styles.module.scss'
import logo from '@/assets/images/logo.png'

export function Header() {
  return (
    <div className={clsx(classes.header)}>
      <div className={clsx(classes.header__logoPlace)}>
        <div className={clsx(classes.header__logo)}>
          <img
            src={logo}
            alt={'Logo'}
            className={clsx(classes.header__logoImg)}
          />
        </div>
        <div>
          <Typography variant={'h1'} fontSize={'lg'}>
            NEX
          </Typography>
          <Typography variant={'h1'} fontSize={'md'} fontWeight={'regular'}>
            Next Generation Shop
          </Typography>
        </div>
      </div>
      <div className={clsx(classes.header__navBarPlace)}>
        <Navbar />
      </div>
      <div className={clsx(classes.header__actionsPlace)}>
        <div className={clsx(classes.header__action)}>
          <IconButton
            transparent
            icon={
              <Icon name={'magnifer'} fontWeight={'bold'} fontSize={'xl'} />
            }
            label={'جستجو'}
          />
        </div>
        <div className={clsx(classes.header__sep)}></div>
        <div className={clsx(classes.header__action)}>
          <IconButton
            transparent
            icon={
              <Icon
                name={'user-rounded'}
                fontWeight={'bold'}
                fontSize={'2xl'}
              />
            }
            label={'حساب کاربری'}
          />
        </div>
      </div>
    </div>
  )
}
