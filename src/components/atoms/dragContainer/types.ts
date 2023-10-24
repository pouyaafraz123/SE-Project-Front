import { PropsWithChildren } from 'react'

export type TDragTypes = 'on-body' | 'on-parent'

/**
 * Props for the DragContainer component.
 *
 * @interface IDragContainerProps
 * @property {TDragTypes} [type] - The type of drag behavior. Possible values are 'on-body' and 'on-parent'.
 * @property {boolean} [disabled] - If true, the drag functionality is disabled.
 * @property {React.ReactNode} children - The content to be wrapped by the DragContainer.
 */
export interface IDragContainerProps extends PropsWithChildren {
  type?: TDragTypes
  disabled?: boolean
}
