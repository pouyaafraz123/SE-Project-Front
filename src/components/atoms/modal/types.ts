import { PropsWithChildren } from 'react'

/**
 * Interface representing the props for the Modal component.
 */
export interface IModalProps extends PropsWithChildren {
  /**
   * Determines whether the modal is open or closed.
   */
  open: boolean

  /**
   * A callback function to handle the modal's close event.
   */
  onClose?: () => void

  /**
   * Determines whether a backdrop should be displayed behind the modal.
   */
  backdrop?: boolean

  /**
   * Determines whether the modal is draggable.
   */
  draggable?: boolean

  /**
   * The maximum width of the modal. Can be a number or string.
   */
  maxWidth?: number | string

  /**
   * Determines whether the modal should prevent scrolling of the body content behind it.
   */
  notScroll?: boolean

  /**
   * A class name to apply to the modal's body.
   */
  bodyClassname?: string
}
