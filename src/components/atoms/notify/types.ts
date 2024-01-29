import { ReactNode } from 'react'
import { color } from '@constants'

/**
 * Type representing different notification types.
 */
export type TNotifType = 'info' | 'warning' | 'danger' | 'success' | 'promise'

/**
 * Type representing a notification message with a title and text.
 */
export type TNotifMessage =
  | {
      title?: string
      text: string
    }
  | string

/**
 * Props for displaying a notification message.
 */
export interface TNotifMessageProps {
  msg: TNotifMessage
}

/**
 * Props for displaying a notification with a specific type.
 */
export interface TNotifProps {
  msg: TNotifMessage
  type: TNotifType
}

/**
 * Props for displaying a promise-based notification.
 */
export interface TPromiseNotifProps {
  pendingMessage: TNotifMessage
  resolvedMessage?: TNotifMessage
  rejectMessage?: TNotifMessage
  promise: Promise<any>
}

/**
 * Interface representing notification data with an icon and color.
 */
export interface INotifData {
  icon: ReactNode
  color: color
}

/**
 * Data for different notification variants based on their type.
 */
export type TNotifVariantData = Record<TNotifType, INotifData>

// Constants for notification colors can be defined here if needed.

// Example usage:
// const infoNotif: TNotifMessageProps = { msg: { title: 'Info', text: 'This is an informational notification.' } };
// const successNotif: TNotifProps = { msg: { title: 'Success', text: 'Operation completed successfully.' }, type: 'success' };
// const promiseNotif: TPromiseNotifProps = {
//   pendingMessage: { title: 'Pending', text: 'The promise is pending.' },
//   resolvedMessage: { title: 'Resolved', text: 'The promise has been resolved.' },
//   promise: somePromise,
// };
