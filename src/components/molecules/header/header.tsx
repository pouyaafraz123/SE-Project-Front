import clsx from 'clsx'
import { Icon } from '@components/atoms/icons'
import { IconButton } from '@components/molecules/iconButton'
import { Typography } from '@components/atoms/typography'
import { Navbar } from '@components/molecules/navbar'
import { IHeaderProps } from '@components/molecules/header'
import { useNavigate } from 'react-router-dom'
import classes from './styles.module.scss'
import logo from '@/assets/images/logo.png'
import { path } from '@/routes'

export function Header({ isNeedBack }: IHeaderProps) {
  const navigate = useNavigate()

  return (
    <div className={clsx(classes.header)}>
      <div
        className={clsx(classes.header__logoPlace)}
        onClick={() => navigate(path.common.landing.link())}
      >
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
        <div
          className={clsx(classes.header__action)}
          onClick={() => navigate(path.common.productSearch.link())}
        >
          <IconButton
            transparent
            icon={
              <Icon name={'magnifer'} fontWeight={'bold'} fontSize={'xl'} />
            }
            label={'جستجو'}
          />
        </div>
        <div className={clsx(classes.header__sep)}></div>
        <div
          className={clsx(classes.header__action)}
          onClick={() => navigate(path.common.profile.link())}
        >
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
        {isNeedBack && (
          <>
            <div
              className={clsx(
                classes.header__action,
                classes.header__backAction
              )}
              onClick={() => navigate(-1)}
            >
              <IconButton
                isSmall
                fullRounded
                icon={
                  <Icon
                    name={'arrow-right'}
                    fontWeight={'bold'}
                    fontSize={'2xl'}
                  />
                }
                noTooltip
                label={''}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
