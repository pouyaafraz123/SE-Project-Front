import { showAlert, useUIStore } from '@stores'
import {
  ALERT_DEFAULT_PROPS,
  TActionAlertVariantProps,
  TDeleteAlertVariantProps,
  TInformationAlertVariantProps,
  TShowAlertParams,
  TShowCustomAlertParams
} from '@components/molecules/alert'

/**
 * Shows an information alert dialog.
 * @param {TShowCustomAlertParams<TInformationAlertVariantProps>} alertProps - The properties of the information alert.
 */
export const showInformationAlert = (
  alertProps: TShowCustomAlertParams<TInformationAlertVariantProps>
) => {
  showAlert({ ...alertProps, type: 'information' })
}

/**
 * Shows an action alert dialog.
 * @param {TShowCustomAlertParams<TActionAlertVariantProps>} alertProps - The properties of the action alert.
 */
export const showActionAlert = (
  alertProps: TShowCustomAlertParams<TActionAlertVariantProps>
) => {
  showAlert({ ...alertProps, type: 'action' })
}

/**
 * Shows a delete alert dialog.
 * @param {TShowCustomAlertParams<TDeleteAlertVariantProps>} alertProps - The properties of the delete alert.
 */
export const showDeleteAlert = (
  alertProps: TShowCustomAlertParams<TDeleteAlertVariantProps>
) => {
  showAlert({ ...alertProps, type: 'delete' })
}
