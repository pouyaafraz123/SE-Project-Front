import { TAlertProps, VAlertVariants } from '@components/molecules/alert'
import { Modal } from '@components/atoms/modal'
import { useMemo } from 'react'
import {
  ActionAlertButtons,
  DeleteAlertButtons,
  InformationAlertButtons
} from '@components/molecules/alert/alertButtons.tsx'
import clsx from 'clsx'
import { Typography } from '@components/atoms/typography'
import { closeAlert } from '@stores'
import classes from './styles.module.scss'

/**
 * Alert component that displays various types of alerts.
 * @param {TAlertProps} props - The props for the Alert component.
 * @param {boolean} props.open - Indicates whether the alert is open or closed.
 * @param {string} props.title - The title of the alert.
 * @param {string} props.content - The content of the alert.
 * @param {TAlertType} props.type - The type of the alert (information, action, delete).
 * @param {function} props.onBeforeClose - A function to be called before closing the alert.
 * @param {string} props.closeTitle - The title for the close button.
 * @param {string} props.cancelTitle - The title for the cancel button (for action and delete alerts).
 * @param {function} props.onCancel - A function to handle the cancel action (for action and delete alerts).
 * @param {string} props.approveTitle - The title for the approve button (for action and delete alerts).
 * @param {function} props.onApprove - A function to handle the approve action (for action and delete alerts).
 * @returns Alert - The rendered Alert component.
 */
export function Alert(props: TAlertProps) {
  const {
    open,
    title,
    content,
    type,
    onBeforeClose,
    closeTitle,
    cancelTitle,
    onCancel,
    approveTitle,
    onApprove
  } = props

  const { icon } = VAlertVariants[type]

  // Determine the appropriate alert buttons based on the alert type
  const alertButtons = useMemo(() => {
    return {
      information: (
        // Render buttons for an information alert
        <InformationAlertButtons
          onClose={() => closeAlert()}
          closeTitle={closeTitle}
          onBeforeClose={onBeforeClose}
        />
      ),
      action: (
        // Render buttons for an action alert
        <ActionAlertButtons
          onClose={() => closeAlert()}
          approveTitle={approveTitle}
          cancelTitle={cancelTitle}
          onApprove={onApprove}
          onCancel={onCancel}
        />
      ),
      delete: (
        // Render buttons for a delete alert
        <DeleteAlertButtons
          onClose={() => closeAlert()}
          approveTitle={approveTitle}
          cancelTitle={cancelTitle}
          onApprove={onApprove}
          onCancel={onCancel}
        />
      )
    }[type]
  }, [
    approveTitle,
    cancelTitle,
    closeTitle,
    onApprove,
    onBeforeClose,
    onCancel,
    type
  ])

  return (
    <Modal
      open={open}
      onClose={() => {
        if (onBeforeClose) {
          onBeforeClose()
        }
        closeAlert()
      }}
      backdrop
      draggable={false}
    >
      <div className={clsx(classes.alert)}>
        <div className={clsx(classes.alert__contents)}>
          <Typography variant={'h5'} color={'primary-main'}>
            <div className={clsx(classes.alert__head)}>
              <div>{icon}</div>
              <div>{title}</div>
            </div>
          </Typography>
          <Typography>{content}</Typography>
        </div>
        <div className={clsx(classes.alert__buttons)}>
          {/* Render the appropriate alert buttons */}
          {alertButtons}
        </div>
      </div>
    </Modal>
  )
}
