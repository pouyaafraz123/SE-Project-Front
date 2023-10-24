import { useTranslation } from 'react-i18next'
import { HiddenBox } from '../components/hiddenBox'
import { sidebarFn } from '..'
import classes from './styles.module.scss'
import { Avatar } from '@/components/atoms/avatar'
import { Typography } from '@/components/atoms/typography'
import { Icon } from '@/components/atoms/icons'

const userInfo = {
  firstName: 'ناصر',
  lastName: 'محمدی',
  hospital: 'بیمارستان الغدیر'
}

export function SideBarHeader() {
  const { t } = useTranslation('sidebar')
  return (
    <div className={classes.container}>
      <Avatar size='smaller' userInfo={userInfo} />
      <HiddenBox className={classes.userInfoBox}>
        <div>
          <Typography fontSize='md' fontWeight='semi-bold'>
            <Typography variant='inherit'>{`${userInfo.firstName} ${userInfo.lastName}`}</Typography>
            <Typography variant='inherit' fontSize='xs' fontWeight='regular'>
              {t('common.welcome')}
            </Typography>
          </Typography>
          <Typography variant='caption2'>{userInfo.hospital}</Typography>
        </div>
        {/* <Icon
          name='arrow-down'
          color='border-secondary'
          fontWeight='extra-bold'
          fontSize='base'
          className='MS-auto'
        /> */}
      </HiddenBox>
      <div className={classes.toggleIcon} onClick={() => sidebarFn.toggle()}>
        <Icon color='secondary-text' name='sidebar' fontSize='lg' />
      </div>
    </div>
  )
}
