import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleSwitch } from '../atoms/toggleSwitch'
import { notify } from '../atoms/notify'
import { showActionAlert } from '../molecules/alert'
import { ActivationProps } from '.'

export function UserActivation(props: ActivationProps) {
  const { t } = useTranslation('form')
  const { changeUserStatusMutate, status, isLoading, userId, fullName } = props
  const [isActive, setIsActive] = useState(status.key === 'active')
  function changeHandler(value: boolean) {
    if (value) {
      showActionAlert({
        title: t('changeUserStatus.title'),
        content: t('changeUserStatus.approveContent', { fullName: fullName }),
        onApprove() {
          notify.promise({
            promise: changeUserStatusMutate({
              id: userId,
              status: 'active'
            }).then((data) => {
              setIsActive(true)
            }),
            pendingMessage: {
              text: t('changeUserStatus.activating', { fullName: fullName }),
              title: t('changeUserStatus.title')
            }
          })
        }
      })
    } else {
      showActionAlert({
        title: t('changeUserStatus.title'),
        content: t('changeUserStatus.approveContent', { fullName: fullName }),
        onApprove() {
          notify.promise({
            promise: changeUserStatusMutate({
              id: userId,
              status: 'denied'
            }).then((data) => {
              setIsActive(false)
            }),
            pendingMessage: {
              text: t('changeUserStatus.inactivating', { fullName: fullName }),
              title: t('changeUserStatus.title')
            }
          })
        }
      })
    }
  }

  return (
    <ToggleSwitch
      disabled={isLoading}
      checked={isActive}
      onChange={changeHandler}
    />
  )
}
