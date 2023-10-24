import { ISelectBoxPosition } from './types'

export function getSelectBoxPosition<T extends HTMLElement>(
  element: T | null
): ISelectBoxPosition {
  if (element) {
    return {
      x: element.getBoundingClientRect().left,
      y: element.getBoundingClientRect().top + element.offsetHeight,
      width: element.offsetWidth
    }
  }
  return {
    x: 0,
    y: 0,
    width: 0
  }
}
