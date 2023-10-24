import { TNotifVariantData } from '@components/atoms/notify/types.ts'
import { Icon } from '@components/atoms/icons'
import { RotateLoader } from '@components/atoms/rotateLoader'

/**
 * Data for different notification variants based on their type.
 */
export const VNotifVariants: TNotifVariantData = {
  info: {
    /**
     * Icon for informational notifications.
     */
    icon: (
      <Icon name={'info-square'} type={'bold-duotone'} color={'primary-main'} />
    ),
    /**
     * Color for informational notifications.
     */
    color: 'primary-main'
  },
  warning: {
    /**
     * Icon for warning notifications.
     */
    icon: (
      <Icon
        name={'danger-triangle'}
        type={'bold-duotone'}
        color={'warning-main'}
      />
    ),
    /**
     * Color for warning notifications.
     */
    color: 'warning-main'
  },
  danger: {
    /**
     * Icon for danger notifications.
     */
    icon: <Icon name={'danger'} type={'bold-duotone'} color={'danger-main'} />,
    /**
     * Color for danger notifications.
     */
    color: 'danger-main'
  },
  success: {
    /**
     * Icon for success notifications.
     */
    icon: (
      <Icon
        name={'check-circle'}
        type={'bold-duotone'}
        color={'success-main'}
      />
    ),
    /**
     * Color for success notifications.
     */
    color: 'success-main'
  },
  promise: {
    /**
     * Icon for promise notifications.
     */
    icon: <RotateLoader color={'primary-main'} width={'24px'} />,
    /**
     * Color for promise notifications.
     */
    color: 'primary-main'
  }
}
