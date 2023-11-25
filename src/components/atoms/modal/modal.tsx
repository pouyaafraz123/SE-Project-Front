import { IModalProps } from '@components/atoms/modal/types.ts'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import React, { memo, useEffect, useState } from 'react'
import { getContainerStyle } from '@components/atoms/modal/config.ts'
import { Box } from '@components/atoms/box'
import { DragContainer } from '@components/atoms/dragContainer'
import { blockScroll, restoreScroll } from '@utils'
import { use } from 'i18next'
import classes from './styles.module.scss'

/**
 * Modal component that can be used to display pop-up modal dialogs.
 *
 * @param {IModalProps} props - The props for the Modal component.
 * @param {boolean} props.open - Indicates whether the modal is open or not.
 * @param {Function} [props.onClose] - A callback function to be called when the modal is closed.
 * @param {number|string} [props.maxWidth] - The maximum width of the modal. It can be a number or a CSS string (e.g., '400px').
 * @param {boolean} [props.notScroll=false] - If `true`, prevents scrolling of the background content when the modal is open.
 * @param {string} [props.bodyClassname] - Additional CSS class to apply to the modal body.
 * @param {boolean} [props.backdrop=true] - If `true`, displays a backdrop behind the modal.
 * @param {boolean} [props.draggable=false] - If `true`, allows dragging of the modal by the user.
 * @param {React.ReactNode} props.children - The content to be displayed within the modal.
 * @returns {React.ReactPortal} The React portal containing the modal.
 */
export const Modal = memo<IModalProps>((props) => {
  const {
    open,
    onClose,
    maxWidth,
    notScroll = false,
    bodyClassname,
    backdrop = true,
    draggable = false,
    children
  } = props
  const [localOpen, setLocalOpen] = useState<boolean>(false)
  const container = document.getElementById('modalRoot')!

  useEffect(() => {
    console.log('Open', open, 'Local Open', localOpen)
  }, [open, localOpen])

  useEffect(() => {
    if (open) {
      setLocalOpen(open)
    } else {
      setTimeout(() => {
        setLocalOpen(open)
      }, 150)
    }

    if (!notScroll) {
      if (open) blockScroll()
      else {
        restoreScroll()
      }
    }
  }, [notScroll, open])

  useEffect(() => {
    getContainerStyle(container.style, localOpen)
  }, [localOpen])

  /*  useEffect(() => {
    if (!open&&localOpen){

    }
  }, [open]);*/

  useEffect(() => {
    return () => {
      restoreScroll()
    }
  }, [])

  const modalBody = (
    <div
      className={clsx(
        classes.modalContainer,
        backdrop && classes.backdrop,
        !(open || localOpen) && classes.displayNone
      )}
      onClick={() => {
        if (onClose) {
          onClose()
        }
      }}
    >
      {(open || localOpen) && (
        <DragContainer disabled={!draggable}>
          <Box
            radius={'lg'}
            px={'0'}
            py={'0'}
            shadow
            className={clsx(classes.anim, !open && classes.exitAnim)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: maxWidth }}
              className={clsx(classes.modal, bodyClassname)}
            >
              {children}
            </div>
          </Box>
        </DragContainer>
      )}
    </div>
  )

  return createPortal(modalBody, container)
})

Modal.displayName = 'Modal'
