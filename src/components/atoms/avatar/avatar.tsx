import { useState } from 'react'
import { Typography } from '../typography'
import styles from './styles.module.scss'
import { AvatarProps } from './types'
import { getSize } from './getSize'

/**
 * Avatar Component
 *
 * Displays an avatar image or the initials
 *  of the user if the image URL is invalid.
 *
 */
function Avatar(props: AvatarProps) {
  const { userInfo, size, variant, role, sidebar, roleValue } = props

  const avatarSize = getSize(size)
  const [imageError, setImageError] = useState(false)

  // It is possible that the URL that is sent to us
  // is not valid. In this function, we check whether the
  // URL is a valid or not
  const isValidUrl = (url: string) => {
    try {
      new URL(url)
      return true
    } catch (_) {
      return false
    }
  }

  const handleImageError = () => {
    setImageError(true)
  }

  // According to whether the URL is available or not,
  // or if it is valid or not, we will display the avatar
  // or initials's of the user
  const renderAvatarContent = () => {
    if (userInfo.imageUrl && isValidUrl(userInfo.imageUrl) && !imageError) {
      return (
        <img
          src={userInfo.imageUrl}
          alt='Avatar'
          className={styles.avatar}
          onError={handleImageError}
        />
      )
    } else {
      const initials =
        userInfo.firstName && userInfo.lastName
          ? userInfo.firstName.charAt(0).toUpperCase() +
            '.' +
            userInfo.lastName.charAt(0).toUpperCase()
          : ''
      return (
        <span>
          <Typography
            center
            color='primary-dark'
            fontFamily='Morabba'
            fontSize={
              size === 'small'
                ? 'base'
                : size === 'medium'
                ? 'xl'
                : size === 'large'
                ? '2xl'
                : 'base'
            }
            fontWeight='semi-bold'
          >
            {initials}
          </Typography>
        </span>
      )
    }
  }
  return (
    <div className={styles.wrapper}>
      {role && sidebar && variant && roleValue && (
        <>
          <span className={styles.border}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='58'
              height='58'
              viewBox='0 0 58 58'
              fill='none'
            >
              <path
                d='M1 29C1 34.5379 2.64217 39.9514 5.71885 44.556C8.79553 49.1605 13.1685 52.7494 18.2849 54.8686C23.4012 56.9879 29.0311 57.5424 34.4625 56.462C39.894 55.3816 44.8831 52.7149 48.799 48.799C52.7149 44.8831 55.3816 39.894 56.462 34.4625C57.5424 29.0311 56.9879 23.4012 54.8686 18.2849C52.7494 13.1685 49.1605 8.79554 44.556 5.71886C39.9514 2.64218 34.5379 1.00001 29 1.00001'
                stroke='#00ACB1'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </span>
        </>
      )}
      <div
        className={`${styles.avatarContainer} ${avatarSize}`}
        style={
          variant
            ? { width: `${variant / 16}rem`, height: `${variant / 16}rem` }
            : {}
        }
      >
        {renderAvatarContent()}
      </div>
    </div>
  )
}

export { Avatar }
