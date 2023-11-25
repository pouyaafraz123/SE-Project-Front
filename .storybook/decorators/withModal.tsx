import { useArgs } from '@storybook/preview-api'
import { StoryContext, StoryFn } from '@storybook/react'
import React, { Suspense, useEffect } from 'react'
import { Button } from '../../src/components/atoms/button'
import {
  ModalContainer,
  closeModal,
  useModalStore
} from '../../src/components/modals/baseModal'

export function WithModal(Story: StoryFn, context: StoryContext) {
  const [args, setArgs] = useArgs()

  useEffect(() => {
    if (args.isOpen == true) args.show()
    else closeModal()
  }, [args])

  function show() {
    setArgs({ isOpen: true })
    args.show()
  }

  return (
    <Suspense>
      <ModalContainer />
      <Story />
      <Button mode='main' label='open modal' onClick={show} />
    </Suspense>
  )
}
