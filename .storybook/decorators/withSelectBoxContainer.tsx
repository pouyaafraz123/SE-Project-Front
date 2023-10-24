import { StoryFn } from '@storybook/react'
import { SelectBoxContainer } from '../../src/components/molecules/selectBox/index'
import React from 'react'

export const withSelectBoxContainer = (Story: StoryFn) => {
  return (
    <>
      <Story />
      <SelectBoxContainer />
    </>
  )
}
