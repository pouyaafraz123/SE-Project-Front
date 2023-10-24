import { StoryFn, StoryContext } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

export const withRouter = (Story: StoryFn, context: StoryContext) => {
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  )
}
