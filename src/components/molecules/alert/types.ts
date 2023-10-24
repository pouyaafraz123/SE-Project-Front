import { ReactNode } from 'react'

/**
 * The type of alert (information, action, delete).
 */
export type TAlertType = 'information' | 'action' | 'delete'

/**
 * Alert component properties
 */
export type TAlertProps = IAlertCommonProps & IAlertConditionalProps
/**
 * Parameters for showing an alert.
 */
export type TShowAlertParams = Omit<TAlertProps, 'open'>

/**
 * Parameters for showing a custom alert.
 * @template T - The type of additional properties for custom alerts.
 */
export type TShowCustomAlertParams<T> = Omit<
  IAlertCommonProps & T,
  'type' | 'open'
>
/**
 * Common properties shared by all alert types.
 */
export interface IAlertCommonProps {
  /**
   * Indicates whether the alert is open or closed.
   */
  open: boolean
  /**
   * The title of the alert.
   */
  title: string
  /**
   * The content or message of the alert (optional).
   */
  content?: string
  /**
   * The type of the alert (information, action, delete).
   */
  type: TAlertType
}

/**
 * Properties specific to conditional alerts (action and delete).
 */
export interface IAlertConditionalProps {
  /**
   * A function to be called before closing the alert.
   */
  onBeforeClose?: () => void
  /**
   * The title for the close button.
   */
  closeTitle?: string
  /**
   * The title for the cancel button (optional).
   */
  cancelTitle?: string
  /**
   * The title for the approve button (optional).
   */
  approveTitle?: string
  /**
   * A function to be called when the cancel button is clicked (optional).
   */
  onCancel?: () => void
  /**
   * A function to be called when the approve button is clicked (optional).
   */
  onApprove?: () => void
}

/**
 * Variant-specific properties for information alerts.
 */
export type TInformationAlertVariantProps = {
  /**
   * The title for the close button.
   */
  closeTitle?: string
  /**
   * A function to be called before closing the alert.
   */
  onBeforeClose?: () => void
}

/**
 * Variant-specific properties for action alerts.
 */
export type TActionAlertVariantProps = {
  /**
   * The title for the cancel button (optional).
   */
  cancelTitle?: string
  /**
   * The title for the approve button (optional).
   */
  approveTitle?: string
  /**
   * A function to be called when the cancel button is clicked (optional).
   */
  onCancel?: () => void
  /**
   * A function to be called when the approve button is clicked (optional).
   */
  onApprove?: () => void
}

/**
 * Variant-specific properties for delete alerts.
 */
export type TDeleteAlertVariantProps = {
  /**
   * The title for the cancel button (optional).
   */
  cancelTitle?: string
  /**
   * The title for the approve button (optional).
   */
  approveTitle?: string
  /**
   * A function to be called when the cancel button is clicked (optional).
   */
  onCancel?: () => void
  /**
   * A function to be called when the approve button is clicked (optional).
   */
  onApprove?: () => void
}

/**
 * Common button type for all alert variants.
 * @template T - The type of additional properties for the button.
 */
export type TAlertButtonsType<T> = { onClose: () => void } & T

/**
 * Information about alert variants and their icons.
 */
export interface IAlertVariantInfo {
  /**
   * The icon associated with the alert variant.
   */
  icon: ReactNode
}

/**
 * Data structure that maps alert types to their variant information.
 */
export type TAlertVariantsData = Record<TAlertType, IAlertVariantInfo>
