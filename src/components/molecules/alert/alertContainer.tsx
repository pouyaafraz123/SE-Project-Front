import React, { PropsWithChildren } from 'react'
import { useUIStore } from '@stores'
import { Alert, TAlertProps } from '@components/molecules/alert'

/**
 * AlertContainer component is used to display alerts in the application.
 * It wraps the main content and renders an Alert component when an alert is triggered.
 * @param {PropsWithChildren} props - The props for the AlertContainer component.
 * @returns AlertContainer - The rendered AlertContainer component.
 */
export function AlertContainer(props: PropsWithChildren) {
  const { children } = props
  const { alertProps } = useUIStore()

  return (
    <>
      {children}
      {/* Render the Alert component with the alertProps from the store */}
      <Alert {...alertProps} />
    </>
  )
}
