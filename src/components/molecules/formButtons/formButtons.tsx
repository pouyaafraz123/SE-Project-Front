import clsx from 'clsx'
import { Button } from '@components/atoms/button'
import classes from './styles.module.scss'
import { IFormButtonsProps } from '@/components/molecules/formButtons'

/**
 * Component that renders form buttons, typically used for submitting and canceling forms.
 *
 * @param {IFormButtonsProps} props - The props for the FormButtons component.
 * @param {MouseEventHandler<HTMLButtonElement>} [props.onSubmitClick] - Event handler for the click action of the submit button. Optional.
 * @param {FormEventHandler<HTMLButtonElement>} [props.onSubmit] - Event handler for the form submission action. Optional.
 * @param {string} [props.submitTitle] - The title or label for the submit button. Optional.
 * @param {string} [props.cancelTitle] - The title or label for the cancel button. Optional.
 * @param {MouseEventHandler<HTMLButtonElement>} [props.onCancel] - Event handler for the click action of the cancel button. Optional.
 * @param {boolean} [props.fullWidth] - Flag to specify whether the buttons should take up full width. Optional.
 * @returns {JSX.Element} The rendered FormButtons component.
 */
export function FormButtons({
  onSubmitClick,
  onSubmit,
  submitTitle,
  cancelTitle,
  onCancel,
  fullWidth,
  buttonGroupClassName
}: IFormButtonsProps) {
  return (
    // Render a div containing form buttons with optional full-width styling.
    <div
      className={clsx(
        classes.formButtons,
        buttonGroupClassName,
        fullWidth && classes.w100
      )}
    >
      {/* Render the cancel button with optional full-width styling. */}
      <Button
        mode={'cancel'}
        onClick={onCancel}
        label={cancelTitle}
        className={clsx(fullWidth && classes.grow)}
      />
      {/* Render the submit button with optional full-width styling. */}
      <Button
        mode={'submit'}
        onSubmit={onSubmit}
        onClick={onSubmitClick}
        label={submitTitle}
        className={clsx(fullWidth && classes.grow)}
      />
    </div>
  )
}
