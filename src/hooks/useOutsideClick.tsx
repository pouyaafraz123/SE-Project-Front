import { RefObject, useEffect } from 'react'

/**
 * A custom React hook that detects clicks outside a specified element and triggers a callback function.
 * @template T - The type of the HTML element to be referenced.
 * @param {React.RefObject<T>} ref - The reference to the HTML element to be monitored for outside clicks.
 * @param {() => void} callback - The callback function to be triggered when an outside click is detected.
 * @returns {React.RefObject<T>} - The reference to the monitored HTML element.
 */
export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  return ref
}
