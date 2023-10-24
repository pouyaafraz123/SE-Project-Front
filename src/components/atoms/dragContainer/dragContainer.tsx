import {
  getDraggablePropsFromType,
  IDragContainerProps
} from '@components/atoms/dragContainer'
import Draggable from 'react-draggable'
import { useMemo } from 'react'
import './styles.module.scss'

/**
 * Draggable container component that enables dragging behavior on its children.
 *
 * @param {object} props - The props for the DragContainer.
 * @param {React.ReactNode} props.children - The children elements to be wrapped with draggable behavior.
 * @param {TDragTypes} [props.type='on-body'] - The type of drag behavior (optional).
 * @param {boolean} [props.disabled] - Whether dragging should be disabled (optional).
 * @returns {React.ReactNode} - The draggable container with children.
 */
export function DragContainer({
  children,
  type,
  disabled
}: IDragContainerProps) {
  const typesProps = useMemo(() => {
    return getDraggablePropsFromType(type || 'on-body')
  }, [type])

  return (
    <Draggable {...typesProps} disabled={disabled}>
      {children}
    </Draggable>
  )
}
