import { toast, ToastOptions } from 'react-toastify'
import {
  TNotifMessage,
  TPromiseNotifProps
} from '@components/atoms/notify/types.ts'
import clsx from 'clsx'
import './styles.module.scss'
import {
  ErrorNotify,
  InfoNotify,
  PromiseNotify,
  SuccessNotify,
  WarningNotify
} from '@components/atoms/notify/notif.tsx'

/**
 * Shows an informational notification.
 * @param {TNotifMessage} msg - The message content for the notification.
 * @returns Notify - The identifier for the notification.
 */
const info = (msg: TNotifMessage) => {
  const toastOptions: ToastOptions = {
    bodyClassName: clsx('toastBody', 'toastBodyInfo'),
    className: clsx('toast')
  }
  return toast.info(<InfoNotify msg={msg} />, toastOptions)
}

/**
 * Shows a warning notification.
 * @param {TNotifMessage} msg - The message content for the notification.
 * @returns Notify - The identifier for the notification.
 */
const warning = (msg: TNotifMessage) => {
  const toastOptions: ToastOptions = {
    bodyClassName: clsx('toastBody', 'toastBodyWarning'),
    className: clsx('toast')
  }
  return toast.warning(<WarningNotify msg={msg} />, toastOptions)
}

/**
 * Shows an error notification.
 * @param {TNotifMessage} msg - The message content for the notification.
 * @returns Notify - The identifier for the notification.
 */
const error = (msg: TNotifMessage) => {
  const toastOptions: ToastOptions = {
    bodyClassName: clsx('toastBody', 'toastBodyError'),
    className: clsx('toast')
  }
  return toast.error(<ErrorNotify msg={msg} />, toastOptions)
}

/**
 * Shows a success notification.
 * @param {TNotifMessage} msg - The message content for the notification.
 * @returns Notify - The identifier for the notification.
 */
const success = (msg: TNotifMessage) => {
  const toastOptions: ToastOptions = {
    bodyClassName: clsx('toastBody', 'toastBodySuccess'),
    className: clsx('toast')
  }
  return toast.success(<SuccessNotify msg={msg} />, toastOptions)
}

/**
 * Shows a notification for a promise-based action.
 * @param {TPromiseNotifProps} props - The properties for the promise notification.
 * @returns Promise - The promise that resolves when the notification is closed.
 */
const promise = (props: TPromiseNotifProps) => {
  const { promise, resolvedMessage, rejectMessage, pendingMessage } = props

  return toast.promise(promise, {
    success: {
      render: <SuccessNotify msg={resolvedMessage} />,
      bodyClassName: clsx('toastBody', 'toastBodySuccess'),
      className: clsx('toast')
    },
    error: rejectMessage && {
      render: <ErrorNotify msg={rejectMessage} />,
      bodyClassName: clsx('toastBody', 'toastBodyError'),
      className: clsx('toast')
    },
    pending: {
      render: <PromiseNotify msg={pendingMessage} />,
      bodyClassName: clsx('toastBody', 'toastBodyInfo'),
      className: clsx('toast')
    }
  })
}

/**
 * A module that provides functions to display various types of notifications.
 */
export const notify = { info, warning, error, success, promise }
