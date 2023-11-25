import { Meta, StoryObj } from '@storybook/react'

import { useArgs } from '@storybook/preview-api'
import { StoryContext, StoryFn } from '@storybook/react'
import React from 'react'
import { ModalContainer } from './modal'
import { showModal, closeModal } from './store'
import { Button } from '@/components/atoms/button'

function WithModalControls(Story: StoryFn, context: StoryContext) {
  const [args, setArgs] = useArgs()
  context.args.onClose = () => {
    setArgs({ isOpen: false })
  }
  return (
    <>
      <ModalContainer />
      <Story />
    </>
  )
}

interface IProps {}
function TestModal(props: IProps) {
  return <div>test1</div>
}
function TestModal2(props: IProps) {
  return (
    <>
      <div>test2</div>
      <Button mode='main' label='close' onClick={() => closeModal()} />
    </>
  )
}

const meta = {
  title: 'Organisms/Modal/BaseModal',
  component: ModalContainer,
  parameters: {
    layout: 'padded'
  },
  decorators: [WithModalControls],
  args: {}
} satisfies Meta<typeof ModalContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <>
      <Button
        mode='main'
        label='open modal'
        onClick={() => showModal(<TestModal />)}
      />
      <Button
        mode='main'
        label='open modal 2'
        onClick={() => showModal(<TestModal2 />)}
      />
    </>
  )
}
