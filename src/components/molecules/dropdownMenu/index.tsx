import clsx from 'clsx'
import {
  HtmlHTMLAttributes,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from 'react'
import { Typography } from '@components/atoms/typography'
import classes from './styles.module.scss'

type anchor =
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end'
  | 'left-bottom'
  | 'left-top'
  | 'right-bottom'
  | 'right-top'
  | 'top-start'
  | 'top-center'
  | 'top-end'

export interface IDropdownMenuProps extends PropsWithChildren<any> {
  children?: JSX.Element[] | JSX.Element
  anchor: anchor
  /**
   * It should be unique.
   *
   * It should the be same as the `id` you assign to the toggle button.
   */
  toggleId: string
  className?: string
  /**
   * It should be unique.
   *
   * It should the be same as the `id` you assign to the nested toggle button (in this case it is the `Dropdown` component).
   */
  nestedToggleId?: string
  menuContainerAttributes?: HtmlHTMLAttributes<HTMLDivElement>
  menuAttributes?: HtmlHTMLAttributes<HTMLDivElement>
}

// dropdown menu component
export function DropdownMenu({
  anchor,
  toggleId,
  children,
  className,
  nestedToggleId,
  menuAttributes,
  menuContainerAttributes
}: IDropdownMenuProps) {
  const [toggle, setToggle] = useState<Element | null>()
  const [nestedToggle, setNestedToggle] = useState<NodeListOf<Element> | null>()
  const [show, setShow] = useState(false)
  const isNested = Boolean(nestedToggleId)
  // get nested toggle element if it is nested
  useEffect(() => {
    setNestedToggle(document.querySelectorAll(`#${nestedToggleId}`))
  }, [isNested, nestedToggleId])

  //get toggle element at first time
  useEffect(() => {
    setToggle(document.querySelector(`#${toggleId}`))
  }, [toggleId])

  //toggle element has to be close the dropdown menu if it is open and close it when it is open
  const toggleHandler = useCallback(() => setShow(!show), [show])
  useEffect(() => {
    toggle?.addEventListener('click', toggleHandler)
    return () => toggle?.removeEventListener('click', toggleHandler)
  }, [toggle, toggleHandler])

  //close the dropdown menu when user clicked outside the toggle element
  const closeDropdownHandler = useCallback(
    (ev: MouseEvent) => {
      if (ev.target instanceof Element) {
        if (
          isNested === true &&
          nestedToggle != null &&
          nestedToggle !== undefined
        ) {
          let click_on_nested_element = false
          for (let index = 0; index < nestedToggle.length; index++) {
            const element = nestedToggle.item(index)
            if (element.contains(ev.target) === true) {
              click_on_nested_element = true
              break
            }
          }
          if (
            !click_on_nested_element &&
            toggle?.contains(ev.target) === false
          ) {
            setShow(false)
          }
        } else {
          if (toggle?.contains(ev.target) === false) {
            setShow(false)
          }
        }
      }
    },
    [isNested, nestedToggle, toggle]
  )

  // attach click handlers
  useEffect(() => {
    document.addEventListener('click', closeDropdownHandler)
    return () => document.removeEventListener('click', closeDropdownHandler)
  }, [closeDropdownHandler])
  //render component
  return (
    <div className='position-relative' {...menuContainerAttributes}>
      {anchor === 'bottom-center' || anchor === 'top-center' ? (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: anchor === 'top-center' ? '0' : 'auto'
          }}
        >
          <div
            className={clsx([
              classes.dropdownMenu,
              show && 'd-block',
              className
            ])}
            data-anchor={anchor}
            style={{ position: 'relative', left: '-50%' }}
            {...menuAttributes}
          >
            <Typography>{children}</Typography>
          </div>
        </div>
      ) : (
        <div
          className={clsx([classes.dropdownMenu, show && 'd-block', className])}
          data-anchor={anchor}
          {...menuAttributes}
        >
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  )
}
