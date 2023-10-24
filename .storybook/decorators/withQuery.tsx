import { StoryFn, StoryContext } from '@storybook/react'
import { queryClient } from '../../src/api/clients'
import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

export const withQuery = (Story: StoryFn, context: StoryContext) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  )
}
