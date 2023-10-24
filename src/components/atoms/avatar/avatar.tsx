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
  const { userInfo, size } = props

  const avatarSize = getSize(size)

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

  // According to whether the URL is available or not,
  // or if it is valid or not, we will display the avatar
  // or initials's of the user
  const renderAvatarContent = () => {
    if (userInfo.imageUrl && isValidUrl(userInfo.imageUrl)) {
      return (
        <img src={userInfo.imageUrl} alt='Avatar' className={styles.avatar} />
      )
    } else {
      const initials =
        userInfo.firstName && userInfo.lastName
          ? userInfo.firstName.charAt(0).toUpperCase() +
            '.' +
            userInfo.lastName.charAt(0).toUpperCase()
          : ''
      return <span className={styles.initials}>{initials}</span>
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.avatarContainer} ${avatarSize}`}>
        {renderAvatarContent()}
      </div>
    </div>
  )
}

export { Avatar }
