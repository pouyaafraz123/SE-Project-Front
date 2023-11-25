import { useArgs } from '@storybook/preview-api'
import { StoryContext, StoryFn } from '@storybook/react'
import React from 'react'
import { Button } from '../../src/components/atoms/button'

export function WithModalControls(Story: StoryFn, context: StoryContext) {
  const [args, setArgs] = useArgs()
  context.args.onClose = () => {
    setArgs({ isOpen: false })
  }
  return (
    <>
      <Button
        mode='main'
        label='open modal'
        onClick={() => setArgs({ isOpen: true })}
      />
      <Story />
    </>
  )
}
