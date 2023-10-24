import { FormEventHandler, MouseEventHandler } from 'react'

/**
 * Props for a set of form buttons.
 *
 * @interface IFormButtonsProps
 */
export interface IFormButtonsProps {
  /**
   * Event handler for the form submission action.
   * @type {FormEventHandler<HTMLButtonElement>}
   */
  onSubmit?: FormEventHandler<HTMLButtonElement>
  /**
   * Event handler for the click action of the submit button.
   * @type {MouseEventHandler<HTMLButtonElement>}
   */
  onSubmitClick?: MouseEventHandler<HTMLButtonElement>
  /**
   * Event handler for the click action of the cancel button.
   * @type {MouseEventHandler<HTMLButtonElement>}
   */
  onCancel?: MouseEventHandler<HTMLButtonElement>
  /**
   * The title or label for the cancel button.
   * @type {string}
   */
  cancelTitle?: string
  /**
   * The title or label for the submit button.
   * @type {string}
   */
  submitTitle?: string
  /**
   * Flag to specify whether the buttons should take up full width.
   * @type {boolean}
   */
  fullWidth?: boolean
}
