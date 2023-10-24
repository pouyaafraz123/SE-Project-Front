import {
  TNotifMessageProps,
  TNotifProps
} from '@components/atoms/notify/types.ts'
import { VNotifVariants } from '@components/atoms/notify/variants.tsx'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'
import classes from './styles.module.scss'

/**
 * Displays a notification with a specified type and message.
 * @param {TNotifProps} props - Notification properties.
 * @returns Notif Notification component.
 */
export function Notif(props: TNotifProps) {
  /**
   * The title of the notification
   */
  const { title, text } = props.msg

  /**
   * The type of the notification (e.g., 'info', 'warning', 'danger', 'success', 'promise').
   */
  const { type } = props

  /**
   * The message content of the notification.
   */
  const { msg } = props

  /**
   * The icon and color for the notification based on its type.
   */
  const { icon, color } = VNotifVariants[type]

  return (
    <div className={clsx(classes.notif)} data-variant={type}>
      <div className={clsx(classes.notif__contents)}>
        <div className={clsx(classes.notif__head)}>
          <div className={clsx(classes.notif__icon)}>{icon}</div>
          <div>
            <Typography fontFamily={'Morabba'} variant={'h5'} color={color}>
              {title}
            </Typography>
          </div>
        </div>
      </div>
      <Typography fontFamily={'dana'} fontWeight={'regular'} fontSize={'sm'}>
        {text}
      </Typography>
    </div>
  )
}

/**
 * Displays an information notification with the specified message.
 * @param {TNotifMessageProps} props - Information notification properties.
 * @returns InfoNotify Information notification component.
 */
export function InfoNotify(props: TNotifMessageProps) {
  /**
   * The message content of the information notification.
   */
  const { msg } = props

  return <Notif msg={msg} type={'info'} />
}

/**
 * Displays a warning notification with the specified message.
 * @param {TNotifMessageProps} props - Warning notification properties.
 * @returns WarningNotify Warning notification component.
 */
export function WarningNotify(props: TNotifMessageProps) {
  /**
   * The message content of the warning notification.
   */
  const { msg } = props

  return <Notif msg={msg} type={'warning'} />
}

/**
 * Displays an error notification with the specified message.
 * @param {TNotifMessageProps} props - Error notification properties.
 * @returns ErrorNotify Error notification component.
 */
export function ErrorNotify(props: TNotifMessageProps) {
  /**
   * The message content of the error notification.
   */
  const { msg } = props

  return <Notif msg={msg} type={'danger'} />
}

/**
 * Displays a promise notification with the specified message.
 * @param {TNotifMessageProps} props - Promise notification properties.
 * @returns PromiseNotify Promise notification component.
 */
export function PromiseNotify(props: TNotifMessageProps) {
  /**
   * The message content of the promise notification.
   */
  const { msg } = props

  return <Notif msg={msg} type={'promise'} />
}

/**
 * Displays a success notification with the specified message.
 * @param {TNotifMessageProps} props - Success notification properties.
 * @returns SuccessNotify Success notification component.
 */
export function SuccessNotify(props: TNotifMessageProps) {
  /**
   * The message content of the success notification.
   */
  const { msg } = props

  return <Notif msg={msg} type={'success'} />
}
