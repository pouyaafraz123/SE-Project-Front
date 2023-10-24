// Get references to the document body and document element
const body = document.body
const documentElement = document.documentElement

/**
 * Function to block scrolling on the page by setting the body's position to 'fixed'.
 * This function also stores the current scroll position to restore it later.
 */
export const blockScroll = () => {
  // Store the current scroll position as a negative top value
  body.style.top = `-${documentElement.scrollTop}px`

  // Check if the document has vertical overflow
  if (documentElement.scrollHeight > documentElement.clientHeight) {
    // Set the body's position to 'fixed' to prevent scrolling
    body.style.position = 'fixed'
    body.style.width = '100%'
    body.style.overflowY = 'scroll'
  }
}

/**
 * Function to restore scrolling on the page after blocking it.
 * This function resets the body's styles to their original values and restores the scroll position.
 */
export const restoreScroll = () => {
  // Restore the body's overflow style to 'auto' and position to 'unset'
  body.style.overflowY = 'auto'
  body.style.position = 'unset'

  // Retrieve the previously stored scroll position and set it back
  const prevScrollTop = parseInt(body.style.top.split('p')[0])
  documentElement.scrollTop = -prevScrollTop
}
