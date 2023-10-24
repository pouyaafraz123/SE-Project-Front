import { CSSProperties } from 'react'

/**
 * CSS styles for the modal root when it's closed (hidden).
 */
export const ModalRootCloseStyle: CSSProperties = {
  position: 'fixed',
  width: 0,
  height: 0,
  visibility: 'hidden',
  opacity: 0,
  top: 0,
  left: 0,
  zIndex: -9999
}

/**
 * CSS styles for the modal root when it's open (visible).
 */
export const ModalRootOpenStyle: CSSProperties = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  visibility: 'visible',
  opacity: 1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999
}

/**
 * Function to get the container style for the modal root based on its open/closed state.
 *
 * @param {CSSStyleDeclaration} style - The current CSS style of the container.
 * @param {boolean} open - Determines whether the modal is open.
 */
export const getContainerStyle = (
  style: CSSStyleDeclaration,
  open: boolean
) => {
  // If the modal is open, assign the open style, otherwise assign the close style.
  if (open) Object.assign(style, ModalRootOpenStyle)
  else Object.assign(style, ModalRootCloseStyle)
}
