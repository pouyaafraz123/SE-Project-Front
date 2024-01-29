import { ReactNode } from 'react'
import type { NavigateOptions, To } from 'react-router-dom'

export interface IContainerBoxProps {
  name: string
  link: { to: To; options?: NavigateOptions }
  children: ReactNode
}
