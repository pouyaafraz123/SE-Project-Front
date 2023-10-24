import { StoryFn } from '@storybook/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TOAST_CONTAINER_PROPS } from '../../src/configs'
import React from 'react'

export const withToast = (Story: StoryFn) => {
  const dir = document.body.dir

  return (
    <>
      <Story />
      <ToastContainer {...TOAST_CONTAINER_PROPS} rtl={dir === 'rtl'} />
    </>
  )
}
