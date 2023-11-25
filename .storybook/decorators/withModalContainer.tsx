import { StoryContext, StoryFn } from '@storybook/react'
import React from 'react'
import { ModalContainer } from '../../src/components/modals/baseModal'

export function WithModalContainer(Story: StoryFn, context: StoryContext) {
  return (
    <>
      <ModalContainer />
      <Story />
    </>
  )
}
