import { ISelectBoxPosition, ISelectBoxPositionOptions } from './types'

export function getSelectBoxPosition<T extends HTMLElement>(
  element: T | null,
  options?: ISelectBoxPositionOptions
): ISelectBoxPosition {
  const anchor = options?.anchor || 'start'

  if (element) {
    const viewportWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    )
    let x = element.getBoundingClientRect().x
    if (
      (document.dir === 'ltr' && anchor === 'end') ||
      (document.dir === 'rtl' && anchor === 'start')
    ) {
      x = viewportWidth - element.getBoundingClientRect().right
    }
    if (anchor === 'center') {
      x += element.offsetWidth / 2
    }

    return {
      x: x,
      y: element.getBoundingClientRect().top + element.offsetHeight,
      width: element.offsetWidth,
      anchor: anchor
    }
  }
  return {
    x: 0,
    y: 0,
    width: 0,
    anchor: anchor
  }
}
