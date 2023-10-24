import { TAlertVariantsData } from '@components/molecules/alert'
import { Icon } from '@components/atoms/icons'

/**
 * Variants data for different alert types, including icons.
 * @type {TAlertVariantsData}
 */
export const VAlertVariants: TAlertVariantsData = {
  information: {
    /**
     * Icon for information alerts.
     * @type {ReactNode}
     */
    icon: (
      <Icon name={'info-square'} type={'bold-duotone'} color={'primary-dark'} />
    )
  },
  action: {
    /**
     * Icon for action alerts.
     * @type {ReactNode}
     */
    icon: (
      <Icon name={'settings'} type={'bold-duotone'} color={'primary-dark'} />
    )
  },
  delete: {
    /**
     * Icon for delete alerts.
     * @type {ReactNode}
     */
    icon: (
      <Icon
        name={'trash-bin-trash'}
        type={'bold-duotone'}
        color={'primary-dark'}
      />
    )
  }
}
