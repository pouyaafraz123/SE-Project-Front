import { createContext, useContext } from 'react'
import { DoctorInfo } from './types'

const DoctorCardContext = createContext<{ doctorInfo: DoctorInfo } | null>(null)

export function useDoctorCardContext() {
  const context = useContext(DoctorCardContext)

  if (!context) {
    throw new Error(
      'Table.* component must be rendered as child of Table component'
    )
  }
  return context
}

export default DoctorCardContext
