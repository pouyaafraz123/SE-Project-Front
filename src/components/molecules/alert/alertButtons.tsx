import {
  TActionAlertVariantProps,
  TAlertButtonsType,
  TInformationAlertVariantProps
} from '@components/molecules/alert/types.ts'
import { Button } from '@components/atoms/button'

/**
 * Buttons for an information alert.
 * @param {TAlertButtonsType<TInformationAlertVariantProps>} props - The button props.
 * @param {string} props.closeTitle - The title for the close button.
 * @param {function} props.onBeforeClose - A function to be called before closing.
 * @param {function} props.onClose - A function to close the alert.
 * @returns InformationAlertButtons - The rendered buttons.
 */
export function InformationAlertButtons(
  props: TAlertButtonsType<TInformationAlertVariantProps>
) {
  const { closeTitle, onBeforeClose, onClose } = props

  return (
    <>
      <Button
        mode={'secondary'}
        onClick={() => {
          if (onBeforeClose) {
            onBeforeClose()
          }
          onClose()
        }}
      >
        {closeTitle || 'Close'}
      </Button>
    </>
  )
}

/**
 * Buttons for an action alert.
 * @param {TAlertButtonsType<TActionAlertVariantProps>} props - The button props.
 * @param {function} props.onClose - A function to close the alert.
 * @param {function} props.onCancel - A function to handle the cancel action.
 * @param {string} props.cancelTitle - The title for the cancel button.
 * @param {string} props.approveTitle - The title for the approve button.
 * @param {function} props.onApprove - A function to handle the approve action.
 * @returns ActionAlertButtons - The rendered buttons.
 */
export function ActionAlertButtons(
  props: TAlertButtonsType<TActionAlertVariantProps>
) {
  const { onClose, onCancel, cancelTitle, approveTitle, onApprove } = props

  return (
    <>
      <Button
        mode={'secondary'}
        onClick={() => {
          if (onCancel) {
            onCancel()
          }
          onClose()
        }}
      >
        {cancelTitle || 'Cancel'}
      </Button>
      <Button
        mode={'main'}
        onClick={() => {
          if (onApprove) {
            onApprove()
          }
          onClose()
        }}
      >
        {approveTitle || 'Approve'}
      </Button>
    </>
  )
}

/**
 * Buttons for a delete alert.
 * @param {TAlertButtonsType<TActionAlertVariantProps>} props - The button props.
 * @param {function} props.onClose - A function to close the alert.
 * @param {function} props.onCancel - A function to handle the cancel action.
 * @param {string} props.cancelTitle - The title for the cancel button.
 * @param {string} props.approveTitle - The title for the approve button.
 * @param {function} props.onApprove - A function to handle the approve action.
 * @returns DeleteAlertButtons - The rendered buttons.
 */
export function DeleteAlertButtons(
  props: TAlertButtonsType<TActionAlertVariantProps>
) {
  const { onClose, onCancel, cancelTitle, approveTitle, onApprove } = props

  return (
    <>
      <Button
        mode={'secondary'}
        onClick={() => {
          if (onCancel) {
            onCancel()
          }
          onClose()
        }}
      >
        {cancelTitle || 'Cancel'}
      </Button>
      <Button
        mode={'danger-secondary'}
        onClick={() => {
          if (onApprove) {
            onApprove()
          }
          onClose()
        }}
      >
        {approveTitle || 'Delete'}
      </Button>
    </>
  )
}
