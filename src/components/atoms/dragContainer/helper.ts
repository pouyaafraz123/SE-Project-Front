import { TDragTypes } from '@components/atoms/dragContainer'
import { DraggableProps } from 'react-draggable'

/**
 * Get DraggableProps based on the specified drag type.
 *
 * @param {TDragTypes} type - The type of drag behavior.
 * @returns {Partial<DraggableProps>} - DraggableProps with bounds set based on the drag type.
 */
export const getDraggablePropsFromType = (
  type: TDragTypes
): Partial<DraggableProps> => {
  if (type === 'on-body') return { bounds: 'body' } // Set bounds to 'body' for 'on-body' type.
  if (type === 'on-parent') return { bounds: 'parent' } // Set bounds to 'parent' for 'on-parent' type.
  return {} // Return an empty object for other types.
}
