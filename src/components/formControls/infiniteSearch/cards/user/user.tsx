import classes from './styles.module.scss'
import { Avatar } from '@/components/atoms/avatar'
import { Typography } from '@/components/atoms/typography'
import { Separator } from '@/components/atoms/separator'
import { IUserSearchEndpoint } from '@/api/infinite'

export interface IUserPickerCardProps {
  userInfo: IUserSearchEndpoint
  onClick?: () => void
}

export function UserPickerCard(props: IUserPickerCardProps) {
  const { userInfo, onClick } = props

  return (
    <div className={classes.card} onClick={onClick}>
      <Avatar size='extraSmall' userInfo={userInfo} />
      <div className={classes.cardText}>
        <div className={classes.cardTopRow}>
          <Typography
            fontWeight='medium'
            fontFamily='dana'
            fontSize='md-high'
          >{`${userInfo.firstName} ${userInfo.lastName}`}</Typography>
          {userInfo.speciality && (
            <Typography fontFamily='dana' fontSize='xs' variant='caption1'>
              {userInfo.userId}
            </Typography>
          )}
        </div>
        {userInfo.speciality ? (
          <Typography fontFamily='dana' fontSize='xs' fontWeight='regular'>
            {userInfo.speciality}
          </Typography>
        ) : (
          <Typography fontFamily='dana' fontSize='xs' variant='caption1'>
            {userInfo.userId}
          </Typography>
        )}
      </div>
    </div>
  )
}
